# API Testing Examples - ShopFlow QA Validation Suite

Base URL:

```text
http://localhost:5000/api
```

## 5 key API examples

| ID | Request | Goal | Expected Result |
|---|---|---|---|
| API-001 | `GET /health` | Confirm API is running | 200 OK |
| API-002 | `POST /auth/login` | Login customer and save token | 200 OK with token |
| API-003 | `GET /products` | Get product catalog | 200 OK with product array |
| API-004 | `POST /cart` | Add product to cart | 201 Created with cart items |
| API-005 | `POST /orders` | Create checkout order | 201 Created with order ID |

## Full API coverage

### Health check

`GET /api/health`

Expected:

- Status: 200
- Body contains `status: ok`

### Register

`POST /api/auth/register`

```json
{
  "name": "Test User",
  "email": "testuser_unique@example.com",
  "password": "Password123!"
}
```

Expected:

- Status: 201
- Body contains user and token

### Login

`POST /api/auth/login`

```json
{
  "email": "customer@example.com",
  "password": "Password123!"
}
```

Expected:

- Status: 200
- Body contains token

### Product list

`GET /api/products`

Expected:

- Status: 200
- Body is array
- Each product includes `id`, `name`, `price`, and `stock`

### Product details

`GET /api/products/1`

Expected:

- Status: 200
- Product details are returned

### Add to cart

`POST /api/cart`

Requires customer token.

```json
{
  "productId": 1,
  "quantity": 1
}
```

Expected:

- Status: 201
- Response contains cart items and total

### Update cart item

`PUT /api/cart/:itemId`

```json
{
  "quantity": 2
}
```

Expected:

- Status: 200
- Cart item quantity updates

### Delete cart item

`DELETE /api/cart/:itemId`

Expected:

- Status: 200
- Item is removed

### Create order

`POST /api/orders`

```json
{
  "shippingAddress": "123 Test Street, Toronto, ON",
  "paymentMethod": "Cash on Delivery"
}
```

Expected:

- Status: 201
- Order is created
- Cart is cleared

### Admin update order status

`PATCH /api/admin/orders/:id/status`

Requires admin token.

```json
{
  "status": "Shipped"
}
```

Expected:

- Status: 200
- Order status updates

## Negative API tests

| Request | Expected Result |
|---|---|
| `POST /auth/login` with wrong password | 401 Unauthorized |
| `POST /auth/register` with missing email | 400 Bad Request |
| `GET /products/99999` | 404 Product not found |
| `GET /cart` without token | 401 Unauthorized |
| `GET /admin/orders` with customer token | 403 Admin access required |
| `POST /orders` with empty cart | 400 Cart is empty |
