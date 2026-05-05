import { query } from '../config/db.js';
import { requireFields } from '../utils/validators.js';

const allowedStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

export async function getAllOrders(req, res, next) {
  try {
    const result = await query(
      `SELECT o.id, o.user_id, u.name AS customer_name, u.email AS customer_email,
              o.total_amount, o.status, o.shipping_address, o.payment_method,
              o.created_at, o.updated_at
       FROM orders o
       JOIN users u ON o.user_id = u.id
       ORDER BY o.created_at DESC`
    );

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
}

export async function updateOrderStatus(req, res, next) {
  try {
    requireFields(req.body, ['status']);
    const { status } = req.body;

    if (!allowedStatuses.includes(status)) {
      const error = new Error(`Invalid status. Allowed values: ${allowedStatuses.join(', ')}`);
      error.statusCode = 400;
      throw error;
    }

    const result = await query(
      `UPDATE orders
       SET status = $1, updated_at = CURRENT_TIMESTAMP
       WHERE id = $2
       RETURNING id, user_id, total_amount, status, updated_at`,
      [status, req.params.id]
    );

    if (result.rows.length === 0) {
      const error = new Error('Order not found');
      error.statusCode = 404;
      throw error;
    }

    res.json({ message: 'Order status updated successfully', order: result.rows[0] });
  } catch (error) {
    next(error);
  }
}
