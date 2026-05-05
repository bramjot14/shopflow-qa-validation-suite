import jwt from 'jsonwebtoken';
import { query } from '../config/db.js';

export async function protect(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      const error = new Error('Not authorized. Token missing.');
      error.statusCode = 401;
      throw error;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'shopflow_local_secret_key');

    const result = await query('SELECT id, name, email, role FROM users WHERE id = $1', [decoded.id]);
    if (result.rows.length === 0) {
      const error = new Error('Not authorized. User not found.');
      error.statusCode = 401;
      throw error;
    }

    req.user = result.rows[0];
    next();
  } catch (error) {
    if (!error.statusCode) error.statusCode = 401;
    next(error);
  }
}

export function adminOnly(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    const error = new Error('Admin access required');
    error.statusCode = 403;
    return next(error);
  }

  next();
}
