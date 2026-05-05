# Test Scenarios - ShopFlow QA Validation Suite

| ID | Module | Scenario | Type | Priority |
|---|---|---|---|---|
| TS-001 | Health | Verify `GET /api/health` returns API running message. | API / Smoke | High |
| TS-002 | Authentication | Verify new customer can register with valid name, email, and password. | Functional | High |
| TS-003 | Authentication | Verify customer can log in and receive a JWT token. | Functional / API | High |
| TS-004 | Authentication | Verify invalid login returns `401 Unauthorized`. | Negative | High |
| TS-005 | Products | Verify product list loads on frontend and through `GET /api/products`. | UI / API | High |
| TS-006 | Products | Verify product details page loads for a valid product ID. | UI / API | High |
| TS-007 | Products | Verify invalid product ID returns `404 Product not found`. | Negative / API | Medium |
| TS-008 | Cart | Verify customer can add product to cart. | Functional / API | High |
| TS-009 | Cart | Verify customer can update cart item quantity. | Functional / API | High |
| TS-010 | Cart | Verify customer can delete item from cart. | Functional / API | Medium |
| TS-011 | Cart | Verify unauthenticated user cannot access cart. | Security / Negative | High |
| TS-012 | Checkout | Verify customer can checkout with valid cart and shipping details. | End-to-End | High |
| TS-013 | Orders | Verify order appears in customer order history after checkout. | Integration | High |
| TS-014 | Database | Verify checkout creates matching `orders` and `order_items` records. | SQL Validation | High |
| TS-015 | Admin | Verify admin can view all orders. | Functional / API | High |
| TS-016 | Admin | Verify admin can update order status. | Functional / API | High |
| TS-017 | Admin | Verify customer cannot access admin order APIs. | Security / Negative | High |
| TS-018 | Regression | Verify login, products, cart, checkout, order history, and admin status still work after code changes. | Regression | High |
| TS-019 | Smoke | Verify app launch, API health, login, products, cart, and checkout basics pass after setup. | Smoke | High |
| TS-020 | Data | Verify product price and stock values are valid in database. | SQL Validation | Medium |

## Top 5 interview-ready scenarios

1. Customer logs in, adds product to cart, checks out, and sees order in order history.
2. Postman validates auth, products, cart, orders, and admin APIs using customer/admin tokens.
3. SQL confirms checkout creates correct `orders` and `order_items` records.
4. Negative tests confirm invalid login, missing fields, invalid product ID, and unauthorized access are handled.
5. Admin updates order status and SQL confirms the status is saved in PostgreSQL.
