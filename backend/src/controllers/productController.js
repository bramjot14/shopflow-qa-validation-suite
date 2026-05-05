import { query } from '../config/db.js';

export async function getProducts(req, res, next) {
  try {
    const result = await query(
      'SELECT id, name, description, price, stock, image_url FROM products ORDER BY id ASC'
    );
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
}

export async function getProductById(req, res, next) {
  try {
    const result = await query(
      'SELECT id, name, description, price, stock, image_url FROM products WHERE id = $1',
      [req.params.id]
    );

    if (result.rows.length === 0) {
      const error = new Error('Product not found');
      error.statusCode = 404;
      throw error;
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}
