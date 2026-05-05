# Manual Test Cases - ShopFlow QA Validation Suite

## TC-001 - Health check API

| Field | Details |
|---|---|
| Module | Health |
| Preconditions | Backend is running |
| Steps | 1. Open `http://localhost:5000/api/health` |
| Expected Result | API returns `status: ok` and message `ShopFlow API is running` |
| Priority | High |

## TC-002 - Register customer with valid details

| Field | Details |
|---|---|
| Module | Authentication |
| Preconditions | Frontend and backend are running |
| Test Data | Name: Test User, Email: unique email, Password: Password123! |
| Steps | 1. Open Register page<br>2. Enter valid details<br>3. Click Create Account |
| Expected Result | User is registered, token is saved, and user is redirected to Products page |
| Priority | High |

## TC-003 - Login customer with valid credentials

| Field | Details |
|---|---|
| Module | Authentication |
| Preconditions | Seed customer exists |
| Test Data | customer@example.com / Password123! |
| Steps | 1. Open Login page<br>2. Enter valid credentials<br>3. Click Login |
| Expected Result | Customer logs in and Products page opens |
| Priority | High |

## TC-004 - Login with invalid password

| Field | Details |
|---|---|
| Module | Authentication |
| Test Data | customer@example.com / WrongPassword123 |
| Steps | 1. Open Login page<br>2. Enter invalid password<br>3. Click Login |
| Expected Result | Login fails and clear error message appears |
| Priority | High |

## TC-005 - View product list

| Field | Details |
|---|---|
| Module | Products |
| Preconditions | Products exist in database |
| Steps | 1. Open Products page |
| Expected Result | Product cards display name, price, stock, and View Details button |
| Priority | High |

## TC-006 - View product details

| Field | Details |
|---|---|
| Module | Products |
| Preconditions | Product ID exists |
| Steps | 1. Open Products page<br>2. Click View Details |
| Expected Result | Product details page displays name, description, price, stock, quantity field, and Add to Cart button |
| Priority | High |

## TC-007 - Add product to cart

| Field | Details |
|---|---|
| Module | Cart |
| Preconditions | Customer is logged in |
| Test Data | Product: Wireless Headphones, Quantity: 1 |
| Steps | 1. Open product details<br>2. Enter quantity 1<br>3. Click Add to Cart<br>4. Open Cart page |
| Expected Result | Product appears in cart with correct price, quantity, and line total |
| Priority | High |

## TC-008 - Update cart quantity

| Field | Details |
|---|---|
| Module | Cart |
| Preconditions | Cart contains product |
| Test Data | Quantity: 2 |
| Steps | 1. Open Cart page<br>2. Change quantity to 2 |
| Expected Result | Quantity and total update correctly |
| Priority | High |

## TC-009 - Delete cart item

| Field | Details |
|---|---|
| Module | Cart |
| Preconditions | Cart contains product |
| Steps | 1. Open Cart page<br>2. Click Remove |
| Expected Result | Item is removed from cart and total is recalculated |
| Priority | Medium |

## TC-010 - Checkout with valid details

| Field | Details |
|---|---|
| Module | Checkout |
| Preconditions | Customer is logged in and cart has at least one item |
| Test Data | Shipping: 123 Test Street, Payment: Cash on Delivery |
| Steps | 1. Open Cart<br>2. Click Checkout<br>3. Enter shipping/payment details<br>4. Click Place Order |
| Expected Result | Order is created and customer is redirected to Order History |
| Priority | High |

## TC-011 - Verify order history

| Field | Details |
|---|---|
| Module | Orders |
| Preconditions | Customer placed an order |
| Steps | 1. Open Order History page |
| Expected Result | Latest order appears with order ID, total, status, and date |
| Priority | High |

## TC-012 - Admin updates order status

| Field | Details |
|---|---|
| Module | Admin |
| Preconditions | Admin is logged in and at least one order exists |
| Test Data | Status: Shipped |
| Steps | 1. Login as admin<br>2. Open Admin Orders page<br>3. Change order status to Shipped |
| Expected Result | Status updates successfully and success message appears |
| Priority | High |

## TC-013 - Unauthorized cart access

| Field | Details |
|---|---|
| Module | Cart / Security |
| Preconditions | User is logged out |
| Steps | 1. Try to call `GET /api/cart` without token |
| Expected Result | API returns `401 Not authorized` |
| Priority | High |

## TC-014 - Customer cannot access admin orders

| Field | Details |
|---|---|
| Module | Admin / Security |
| Preconditions | Customer token is available |
| Steps | 1. Call `GET /api/admin/orders` using customer token |
| Expected Result | API returns `403 Admin access required` |
| Priority | High |
