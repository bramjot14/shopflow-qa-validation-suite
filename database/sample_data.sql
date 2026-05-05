-- ShopFlow QA sample data
-- Recommended: run backend/scripts/setupDatabase.js because it creates fresh bcrypt password hashes.
-- These records match the real app's customer/admin roles and sample product catalog.

-- Test credentials after running npm run db:setup:
-- Customer: customer@example.com / Password123!
-- Admin: admin@example.com / Admin123!

INSERT INTO users (name, email, password_hash, role)
VALUES
('QA Customer', 'customer@example.com', 'created_by_backend_setup_script', 'customer'),
('QA Admin', 'admin@example.com', 'created_by_backend_setup_script', 'admin');

INSERT INTO products (name, description, price, stock, image_url)
VALUES
('Wireless Headphones', 'Bluetooth headphones for everyday testing workflow.', 79.99, 25, 'https://placehold.co/600x400?text=Headphones'),
('USB-C Charger', 'Fast charging USB-C wall charger.', 24.99, 50, 'https://placehold.co/600x400?text=Charger'),
('Laptop Stand', 'Adjustable aluminum laptop stand.', 39.99, 15, 'https://placehold.co/600x400?text=Laptop+Stand'),
('Mechanical Keyboard', 'Compact mechanical keyboard for developers.', 89.99, 20, 'https://placehold.co/600x400?text=Keyboard'),
('Wireless Mouse', 'Ergonomic wireless mouse.', 29.99, 35, 'https://placehold.co/600x400?text=Mouse');
