-- ShopFlow QA Validation Suite - SQL validation queries
-- Use these after testing UI/API workflows.

-- SQL-001: Confirm seeded customer and admin users exist
SELECT id, name, email, role, created_at
FROM users
WHERE email IN ('customer@example.com', 'admin@example.com')
ORDER BY role;

-- SQL-002: Confirm product data is valid
SELECT id, name, price, stock
FROM products
WHERE price <= 0 OR stock < 0;

-- Expected: zero rows.

-- SQL-003: Confirm products loaded in catalog
SELECT id, name, price, stock
FROM products
ORDER BY id;

-- SQL-004: Confirm cart items for customer
SELECT u.email, c.id AS cart_id, ci.id AS cart_item_id, p.name, ci.quantity, p.price,
       (ci.quantity * p.price) AS expected_line_total
FROM users u
JOIN carts c ON u.id = c.user_id
JOIN cart_items ci ON c.id = ci.cart_id
JOIN products p ON ci.product_id = p.id
WHERE u.email = 'customer@example.com';

-- SQL-005: Confirm latest order is saved with order_items
SELECT o.id AS order_id, u.email, o.status, o.total_amount, p.name,
       oi.quantity, oi.unit_price, (oi.quantity * oi.unit_price) AS calculated_line_total
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE u.email = 'customer@example.com'
ORDER BY o.created_at DESC;

-- SQL-006: Verify order total matches sum of order item totals
SELECT o.id AS order_id,
       o.total_amount,
       SUM(oi.quantity * oi.unit_price) AS calculated_total
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id, o.total_amount
HAVING o.total_amount <> SUM(oi.quantity * oi.unit_price);

-- Expected: zero rows.

-- SQL-007: Confirm admin order status update
SELECT id, status, updated_at
FROM orders
ORDER BY updated_at DESC;

-- SQL-008: Confirm cart is cleared after checkout
SELECT u.email, COUNT(ci.id) AS remaining_cart_items
FROM users u
LEFT JOIN carts c ON u.id = c.user_id
LEFT JOIN cart_items ci ON c.id = ci.cart_id
WHERE u.email = 'customer@example.com'
GROUP BY u.email;

-- Expected after checkout: remaining_cart_items = 0.
