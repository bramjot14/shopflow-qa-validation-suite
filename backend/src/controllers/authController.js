import bcrypt from 'bcryptjs';
import { query } from '../config/db.js';
import { generateToken } from '../utils/generateToken.js';
import { isValidEmail, requireFields } from '../utils/validators.js';

export async function register(req, res, next) {
  try {
    requireFields(req.body, ['name', 'email', 'password']);

    const { name, email, password } = req.body;

    if (!isValidEmail(email)) {
      const error = new Error('Please provide a valid email address');
      error.statusCode = 400;
      throw error;
    }

    if (password.length < 8) {
      const error = new Error('Password must be at least 8 characters');
      error.statusCode = 400;
      throw error;
    }

    const existing = await query('SELECT id FROM users WHERE email = $1', [email.toLowerCase()]);
    if (existing.rows.length > 0) {
      const error = new Error('Email already exists. Please log in or use a different email.');
      error.statusCode = 409;
      throw error;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const result = await query(
      `INSERT INTO users (name, email, password_hash, role)
       VALUES ($1, $2, $3, 'customer')
       RETURNING id, name, email, role`,
      [name.trim(), email.toLowerCase(), passwordHash]
    );

    const user = result.rows[0];
    res.status(201).json({ user, token: generateToken(user) });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    requireFields(req.body, ['email', 'password']);

    const { email, password } = req.body;
    const result = await query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()]);

    if (result.rows.length === 0) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      throw error;
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      throw error;
    }

    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: generateToken(user)
    });
  } catch (error) {
    next(error);
  }
}
