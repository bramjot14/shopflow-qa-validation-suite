import { pool, query } from '../config/db.js';
import { requireFields } from '../utils/validators.js';

export async function createOrder(req, res, next) {
  const client = await pool.connect();

  try {
    requireFields(req.body, ['shippingAddress', 'paymentMethod']);
    const { shippingAddress, paymentMethod } = req.body;

    await client.query('BEGIN');

    const cartResult = await client.query('SELECT id FROM carts WHERE user_id = $1', [req.user.id]);
    if (cartResult.rows.length === 0) {
      const error = new Error('Cart is empty');
      error.statusCode = 400;
      throw error;
    }

    const cartId = cartResult.rows[0].id;
    const itemsResult = await client.query(
      `SELECT ci.product_id, ci.quantity, p.price, p.stock, p.name
       FROM cart_items ci
       JOIN products p ON ci.product_id = p.id
       WHERE ci.cart_id = $1`,
      [cartId]
    );

    if (itemsResult.rows.length === 0) {
      const error = new Error('Cart is empty');
      error.statusCode = 400;
      throw error;
    }

    for (const item of itemsResult.rows) {
      if (item.stock < item.quantity) {
        const error = new Error(`Not enough stock for ${item.name}`);
        error.statusCode = 400;
        throw error;
      }
    }

    const totalAmount = itemsResult.rows.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity),
      0
    );

    const orderResult = await client.query(
      `INSERT INTO orders (user_id, total_amount, status, shipping_address, payment_method)
       VALUES ($1, $2, 'Pending', $3, $4)
       RETURNING id, user_id, total_amount, status, shipping_address, payment_method, created_at`,
      [req.user.id, totalAmount.toFixed(2), shippingAddress.trim(), paymentMethod]
    );

    const order = orderResult.rows[0];

    for (const item of itemsResult.rows) {
      await client.query(
        `INSERT INTO order_items (order_id, product_id, quantity, unit_price)
         VALUES ($1, $2, $3, $4)`,
        [order.id, item.product_id, item.quantity, item.price]
      );

      await client.query(
        'UPDATE products SET stock = stock - $1 WHERE id = $2',
        [item.quantity, item.product_id]
      );
    }

    await client.query('DELETE FROM cart_items WHERE cart_id = $1', [cartId]);
    await client.query('COMMIT');

    res.status(201).json({
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    await client.query('ROLLBACK');
    next(error);
  } finally {
    client.release();
  }
}

export async function getOrders(req, res, next) {
  try {
    const orders = await query(
      `SELECT id, total_amount, status, shipping_address, payment_method, created_at, updated_at
       FROM orders
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [req.user.id]
    );

    res.json(orders.rows);
  } catch (error) {
    next(error);
  }
}

export async function getOrderById(req, res, next) {
  try {
    const order = await query(
      `SELECT id, user_id, total_amount, status, shipping_address, payment_method, created_at, updated_at
       FROM orders
       WHERE id = $1 AND user_id = $2`,
      [req.params.id, req.user.id]
    );

    if (order.rows.length === 0) {
      const error = new Error('Order not found');
      error.statusCode = 404;
      throw error;
    }

    const items = await query(
      `SELECT oi.id, oi.product_id, p.name, oi.quantity, oi.unit_price,
              (oi.quantity * oi.unit_price) AS line_total
       FROM order_items oi
       JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = $1`,
      [req.params.id]
    );

    res.json({ ...order.rows[0], items: items.rows });
  } catch (error) {
    next(error);
  }
}
