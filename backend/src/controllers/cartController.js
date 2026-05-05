import { pool, query } from '../config/db.js';
import { requireFields, validateQuantity } from '../utils/validators.js';

async function getOrCreateCart(userId) {
  const existing = await query('SELECT id FROM carts WHERE user_id = $1', [userId]);
  if (existing.rows.length > 0) return existing.rows[0];

  const created = await query('INSERT INTO carts (user_id) VALUES ($1) RETURNING id', [userId]);
  return created.rows[0];
}

async function buildCartResponse(userId) {
  const cart = await getOrCreateCart(userId);
  const items = await query(
    `SELECT ci.id AS cart_item_id, ci.product_id, p.name, p.price, p.stock, ci.quantity,
            (ci.quantity * p.price) AS line_total
     FROM cart_items ci
     JOIN products p ON ci.product_id = p.id
     WHERE ci.cart_id = $1
     ORDER BY ci.id ASC`,
    [cart.id]
  );

  const total = items.rows.reduce((sum, item) => sum + Number(item.line_total), 0);
  return { cartId: cart.id, items: items.rows, total: Number(total.toFixed(2)) };
}

export async function getCart(req, res, next) {
  try {
    res.json(await buildCartResponse(req.user.id));
  } catch (error) {
    next(error);
  }
}

export async function addToCart(req, res, next) {
  try {
    requireFields(req.body, ['productId', 'quantity']);
    const productId = Number(req.body.productId);
    const quantity = validateQuantity(req.body.quantity);

    const productResult = await query('SELECT id, stock FROM products WHERE id = $1', [productId]);
    if (productResult.rows.length === 0) {
      const error = new Error('Product not found');
      error.statusCode = 404;
      throw error;
    }

    if (productResult.rows[0].stock < quantity) {
      const error = new Error('Requested quantity is not available in stock');
      error.statusCode = 400;
      throw error;
    }

    const cart = await getOrCreateCart(req.user.id);
    const existingItem = await query(
      'SELECT id, quantity FROM cart_items WHERE cart_id = $1 AND product_id = $2',
      [cart.id, productId]
    );

    if (existingItem.rows.length > 0) {
      const newQuantity = existingItem.rows[0].quantity + quantity;
      await query('UPDATE cart_items SET quantity = $1 WHERE id = $2', [newQuantity, existingItem.rows[0].id]);
    } else {
      await query('INSERT INTO cart_items (cart_id, product_id, quantity) VALUES ($1, $2, $3)', [cart.id, productId, quantity]);
    }

    res.status(201).json(await buildCartResponse(req.user.id));
  } catch (error) {
    next(error);
  }
}

export async function updateCartItem(req, res, next) {
  try {
    requireFields(req.body, ['quantity']);
    const quantity = validateQuantity(req.body.quantity);
    const cart = await getOrCreateCart(req.user.id);

    const itemResult = await query(
      `SELECT ci.id, ci.product_id, p.stock
       FROM cart_items ci
       JOIN products p ON ci.product_id = p.id
       WHERE ci.id = $1 AND ci.cart_id = $2`,
      [req.params.itemId, cart.id]
    );

    if (itemResult.rows.length === 0) {
      const error = new Error('Cart item not found');
      error.statusCode = 404;
      throw error;
    }

    if (itemResult.rows[0].stock < quantity) {
      const error = new Error('Requested quantity is not available in stock');
      error.statusCode = 400;
      throw error;
    }

    await query('UPDATE cart_items SET quantity = $1 WHERE id = $2', [quantity, req.params.itemId]);
    res.json(await buildCartResponse(req.user.id));
  } catch (error) {
    next(error);
  }
}

export async function deleteCartItem(req, res, next) {
  try {
    const cart = await getOrCreateCart(req.user.id);
    const deleted = await query(
      'DELETE FROM cart_items WHERE id = $1 AND cart_id = $2 RETURNING id',
      [req.params.itemId, cart.id]
    );

    if (deleted.rows.length === 0) {
      const error = new Error('Cart item not found');
      error.statusCode = 404;
      throw error;
    }

    res.json(await buildCartResponse(req.user.id));
  } catch (error) {
    next(error);
  }
}
