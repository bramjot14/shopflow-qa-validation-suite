# SQL / Database Validation - ShopFlow QA Validation Suite

Database validation confirms that UI and API actions are correctly saved in PostgreSQL.

## Database tables

- `users`
- `products`
- `carts`
- `cart_items`
- `orders`
- `order_items`

## 5 SQL validation examples

### SQL-001 - Confirm test users exist

```sql
SELECT id, name, email, role, created_at
FROM users
WHERE email IN ('customer@example.com', 'admin@example.com')
ORDER BY role;
```

Expected:

- Customer and admin users exist.
- Roles are correct.

### SQL-002 - Confirm product data is valid

```sql
SELECT id, name, price, stock
FROM products
WHERE price <= 0 OR stock < 0;
```

Expected:

- Zero rows returned.

### SQL-003 - Confirm cart item after Add to Cart

```sql
SELECT u.email, c.id AS cart_id, ci.id AS cart_item_id, p.name, ci.quantity, p.price,
       (ci.quantity * p.price) AS expected_line_total
FROM users u
JOIN carts c ON u.id = c.user_id
JOIN cart_items ci ON c.id = ci.cart_id
JOIN products p ON ci.product_id = p.id
WHERE u.email = 'customer@example.com';
```

Expected:

- Added product appears in cart.
- Quantity and line total are correct.

### SQL-004 - Confirm order and order_items after checkout

```sql
SELECT o.id AS order_id, u.email, o.status, o.total_amount, p.name,
       oi.quantity, oi.unit_price, (oi.quantity * oi.unit_price) AS calculated_line_total
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE u.email = 'customer@example.com'
ORDER BY o.created_at DESC;
```

Expected:

- Latest order exists.
- Purchased products exist in `order_items`.

### SQL-005 - Confirm order total matches item totals

```sql
SELECT o.id AS order_id,
       o.total_amount,
       SUM(oi.quantity * oi.unit_price) AS calculated_total
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id, o.total_amount
HAVING o.total_amount <> SUM(oi.quantity * oi.unit_price);
```

Expected:

- Zero rows returned.
- Any result means order total mismatch.

## Admin status validation

```sql
SELECT id, status, updated_at
FROM orders
ORDER BY updated_at DESC;
```

Expected:

- Status changes after admin update.
- `updated_at` timestamp changes.

## Cart cleared after checkout

```sql
SELECT u.email, COUNT(ci.id) AS remaining_cart_items
FROM users u
LEFT JOIN carts c ON u.id = c.user_id
LEFT JOIN cart_items ci ON c.id = ci.cart_id
WHERE u.email = 'customer@example.com'
GROUP BY u.email;
```

Expected after checkout:

- `remaining_cart_items = 0`
