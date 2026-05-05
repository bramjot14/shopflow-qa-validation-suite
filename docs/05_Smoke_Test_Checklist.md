# Smoke Testing Checklist

Run this after setting up the project or before deeper regression testing.

| ID | Area | Check | Expected Result | Status |
|---|---|---|---|---|
| SM-001 | Backend | Open `GET /api/health` | API returns `status: ok` | Not Run |
| SM-002 | Frontend | Open `http://localhost:5173` | Home page loads | Not Run |
| SM-003 | Login | Login with customer credentials | Customer reaches Products page | Not Run |
| SM-004 | Products | Open Products page | Product cards display | Not Run |
| SM-005 | Product Details | Open valid product details | Details page loads | Not Run |
| SM-006 | Cart | Add product to cart | Product appears in cart | Not Run |
| SM-007 | Checkout | Place valid order | Order is created | Not Run |
| SM-008 | Orders | Open Order History | Latest order appears | Not Run |
| SM-009 | Admin | Login as admin | Admin order page opens | Not Run |
| SM-010 | Admin | Update order status | Status updates successfully | Not Run |

## Smoke pass rule

Pass only if API health, login, product list, cart, checkout, and admin order status update are working.
