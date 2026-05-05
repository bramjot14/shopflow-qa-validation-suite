# Bug Report Examples - ShopFlow QA Validation Suite

These are realistic sample defects that can be discussed in interviews. They are written in a format similar to Jira/GitHub Issues.

## 5 sample bug report titles

1. Cart total does not update after quantity is changed from 1 to 2.
2. Duplicate email registration shows unclear error message.
3. Checkout API allows order creation when cart is empty.
4. Order history does not display latest order immediately after checkout.
5. Admin order status update returns success but database status remains unchanged.

---

## BUG-001 - Cart total does not update after quantity is changed from 1 to 2

| Field | Details |
|---|---|
| Module | Cart |
| Severity | High |
| Priority | High |
| Environment | Chrome, Windows 11, Frontend localhost:5173, API localhost:5000 |
| Related Test Case | TC-008 |

### Steps to reproduce

1. Login as `customer@example.com`.
2. Add Wireless Headphones to cart.
3. Open Cart page.
4. Change quantity from 1 to 2.

### Expected result

Cart quantity and total should update correctly.

### Actual result

Quantity updates but total remains unchanged.

### Impact

Customer may see incorrect pricing before checkout.

---

## BUG-002 - Duplicate email registration shows unclear error message

| Field | Details |
|---|---|
| Module | Authentication |
| Severity | Medium |
| Priority | High |
| Related Test Case | TC-002 |

### Steps to reproduce

1. Register using an existing email.
2. Submit the form.

### Expected result

Message should say: `Email already exists. Please log in or use a different email.`

### Actual result

Generic error message appears.

### Impact

User does not understand how to fix the problem.

---

## BUG-003 - Checkout API allows order creation when cart is empty

| Field | Details |
|---|---|
| Module | Checkout / API |
| Severity | Critical |
| Priority | High |
| Related Test Case | TC-010 |

### Steps to reproduce

1. Login as customer.
2. Make sure cart is empty.
3. Send `POST /api/orders` with valid shipping and payment details.

### Expected result

API should return `400 Cart is empty`.

### Actual result

API returns `201 Created`.

### Impact

Invalid orders may be created without products.

---

## BUG-004 - Order history does not display latest order immediately after checkout

| Field | Details |
|---|---|
| Module | Orders |
| Severity | High |
| Priority | Medium |
| Related Test Case | TC-011 |

### Steps to reproduce

1. Login as customer.
2. Add product to cart.
3. Complete checkout.
4. Open Order History page.

### Expected result

Latest order should appear immediately.

### Actual result

Order appears only after page refresh.

### Impact

Customer may think the order was not saved.

---

## BUG-005 - Admin order status update returns success but database status remains unchanged

| Field | Details |
|---|---|
| Module | Admin / Database |
| Severity | High |
| Priority | High |
| Related Test Case | TC-012 |

### Steps to reproduce

1. Login as admin.
2. Update an order status to `Shipped`.
3. Run SQL query: `SELECT id, status FROM orders WHERE id = <order_id>;`

### Expected result

Database status should be `Shipped`.

### Actual result

API shows success, but database still shows `Pending`.

### Impact

Admin and customer may see inconsistent order status.
