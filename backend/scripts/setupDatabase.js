import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { pool } from '../src/config/db.js';

dotenv.config();

async function setupDatabase() {
  try {
    console.log('Creating ShopFlow tables...');

    await pool.query(`
      DROP TABLE IF EXISTS order_items CASCADE;
      DROP TABLE IF EXISTS orders CASCADE;
      DROP TABLE IF EXISTS cart_items CASCADE;
      DROP TABLE IF EXISTS carts CASCADE;
      DROP TABLE IF EXISTS products CASCADE;
      DROP TABLE IF EXISTS users CASCADE;

      CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(150) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          role VARCHAR(20) DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          name VARCHAR(150) NOT NULL,
          description TEXT,
          price NUMERIC(10, 2) NOT NULL CHECK (price > 0),
          stock INTEGER NOT NULL CHECK (stock >= 0),
          image_url TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE carts (
          id SERIAL PRIMARY KEY,
          user_id INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE cart_items (
          id SERIAL PRIMARY KEY,
          cart_id INTEGER NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
          product_id INTEGER NOT NULL REFERENCES products(id),
          quantity INTEGER NOT NULL CHECK (quantity > 0),
          UNIQUE(cart_id, product_id)
      );

      CREATE TABLE orders (
          id SERIAL PRIMARY KEY,
          user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          total_amount NUMERIC(10, 2) NOT NULL CHECK (total_amount >= 0),
          status VARCHAR(30) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled')),
          shipping_address TEXT NOT NULL,
          payment_method VARCHAR(50) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE order_items (
          id SERIAL PRIMARY KEY,
          order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
          product_id INTEGER NOT NULL REFERENCES products(id),
          quantity INTEGER NOT NULL CHECK (quantity > 0),
          unit_price NUMERIC(10, 2) NOT NULL CHECK (unit_price > 0)
      );
    `);

    const customerHash = await bcrypt.hash('Password123!', 10);
    const adminHash = await bcrypt.hash('Admin123!', 10);

    await pool.query(
      `INSERT INTO users (name, email, password_hash, role)
       VALUES
       ($1, $2, $3, $4),
       ($5, $6, $7, $8)`,
      [
        'QA Customer', 'customer@example.com', customerHash, 'customer',
        'QA Admin', 'admin@example.com', adminHash, 'admin'
      ]
    );

    await pool.query(`
      INSERT INTO products (name, description, price, stock, image_url)
      VALUES
      ('Wireless Headphones', 'Bluetooth headphones for everyday testing workflow.', 79.99, 25, 'https://placehold.co/600x400?text=Headphones'),
      ('USB-C Charger', 'Fast charging USB-C wall charger.', 24.99, 50, 'https://placehold.co/600x400?text=Charger'),
      ('Laptop Stand', 'Adjustable aluminum laptop stand.', 39.99, 15, 'https://placehold.co/600x400?text=Laptop+Stand'),
      ('Mechanical Keyboard', 'Compact mechanical keyboard for developers.', 89.99, 20, 'https://placehold.co/600x400?text=Keyboard'),
      ('Wireless Mouse', 'Ergonomic wireless mouse.', 29.99, 35, 'https://placehold.co/600x400?text=Mouse');
    `);

    console.log('Database setup completed.');
    console.log('Customer: customer@example.com / Password123!');
    console.log('Admin: admin@example.com / Admin123!');
  } catch (error) {
    console.error('Database setup failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setupDatabase();
