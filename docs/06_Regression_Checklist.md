# Regression Testing Checklist

Run this after bug fixes, route changes, database changes, authentication changes, or UI changes.

| ID | Module | Regression Check | Priority | Status |
|---|---|---|---|---|
| REG-001 | Auth | Register new customer with valid data | High | Not Run |
| REG-002 | Auth | Login customer with valid credentials | High | Not Run |
| REG-003 | Auth | Invalid login returns error | High | Not Run |
| REG-004 | Auth | Duplicate email is blocked | Medium | Not Run |
| REG-005 | Products | Product list loads from API | High | Not Run |
| REG-006 | Products | Product details load for valid ID | High | Not Run |
| REG-007 | Products | Invalid product ID returns 404 | Medium | Not Run |
| REG-008 | Cart | Add product to cart | High | Not Run |
| REG-009 | Cart | Update cart quantity | High | Not Run |
| REG-010 | Cart | Delete cart item | Medium | Not Run |
| REG-011 | Cart | Unauthorized cart access returns 401 | High | Not Run |
| REG-012 | Checkout | Checkout creates order with order_items | High | Not Run |
| REG-013 | Checkout | Empty cart checkout is blocked | High | Not Run |
| REG-014 | Orders | Customer order history loads | High | Not Run |
| REG-015 | Admin | Admin can view all orders | High | Not Run |
| REG-016 | Admin | Admin can update order status | High | Not Run |
| REG-017 | Admin | Customer cannot access admin route | High | Not Run |
| REG-018 | Database | Order total matches item totals | High | Not Run |

## Suggested regression trigger points

- Authentication route changes
- Cart logic changes
- Checkout/order changes
- Database schema updates
- Admin status update changes
- API response structure changes
