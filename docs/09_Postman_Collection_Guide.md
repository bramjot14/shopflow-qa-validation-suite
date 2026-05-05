# Postman Collection Guide - ShopFlow QA Validation Suite

## Files

Import both files into Postman:

```text
postman/ShopFlow_QA.postman_collection.json
postman/ShopFlow_QA.postman_environment.json
```

## Environment variables

| Variable | Purpose |
|---|---|
| `base_url` | API base URL, default `http://localhost:5000/api` |
| `token` | Customer JWT token |
| `admin_token` | Admin JWT token |
| `product_id` | Product used for product/cart/order tests |
| `cart_item_id` | Cart item used for update/delete tests |
| `order_id` | Order used for order/admin tests |

## Recommended request order

1. Health Check
2. Register Customer With Unique Email
3. Login Customer
4. Get Products
5. Get Product Details
6. Invalid Product ID Negative Test
7. Add Product to Cart
8. Get Cart
9. Update Cart Item
10. Checkout Create Order
11. Get Order History
12. Login Admin
13. Admin Get Orders
14. Admin Update Order Status
15. Negative Login
16. Missing Required Fields
17. Unauthorized Cart Access
18. Customer Access Admin Negative Test

## What the collection validates

- Status codes
- JSON response body
- Token generation
- Product schema
- Cart item creation
- Order creation
- Admin authorization
- Negative login behavior
- Missing field validation
- Unauthorized access handling

## Example Postman test scripts

### Save customer token

```javascript
const data = pm.response.json();
pm.collectionVariables.set("token", data.token);
```

### Validate product array

```javascript
pm.test("Products response is an array", function () {
    pm.expect(pm.response.json()).to.be.an("array");
});
```

### Save order ID

```javascript
const data = pm.response.json();
pm.collectionVariables.set("order_id", data.order.id);
```
