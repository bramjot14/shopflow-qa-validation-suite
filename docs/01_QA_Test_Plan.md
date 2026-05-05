# QA Test Plan - ShopFlow QA Validation Suite

## 1. Project overview

ShopFlow is a real full-stack e-commerce demo application built with React, Node.js, Express, and PostgreSQL. This QA project validates the application through manual testing, API testing, SQL/database validation, smoke testing, regression testing, negative testing, and pytest API automation.

## 2. Application under test

| Area | Details |
|---|---|
| Frontend | React, Bootstrap, Axios, React Router |
| Backend | Node.js, Express.js, JWT authentication, bcryptjs password hashing |
| Database | PostgreSQL |
| API Base URL | `http://localhost:5000/api` |
| Frontend URL | `http://localhost:5173` |

## 3. In-scope features

- Register customer account
- Login as customer and admin
- View products
- View product details
- Add product to cart
- Update cart quantity
- Delete cart item
- Checkout and create order
- View customer order history
- Admin view all orders
- Admin update order status
- Health check endpoint
- Unauthorized access validation
- SQL validation for users, cart, orders, and order_items

## 4. Out-of-scope features

- Real payment gateway
- Real shipping carrier integration
- Production-level security testing
- Performance/load testing
- Mobile app testing

## 5. Test objectives

- Confirm key customer workflows work from frontend to backend database.
- Validate REST API responses, status codes, required fields, and negative cases.
- Confirm checkout creates records in `orders` and `order_items` tables.
- Confirm admin status updates are saved in PostgreSQL.
- Document defects with clear reproduction steps and expected vs. actual results.
- Create repeatable smoke, regression, and pytest automation checks.

## 6. Test types

| Test Type | Purpose |
|---|---|
| Manual Testing | Validate UI and user workflows manually |
| Functional Testing | Confirm features match expected behavior |
| API Testing | Validate backend endpoints using Postman |
| SQL Validation | Verify frontend/API actions are saved correctly in database |
| Smoke Testing | Confirm build is stable enough for deeper testing |
| Regression Testing | Confirm existing features still work after changes |
| Negative Testing | Confirm invalid inputs and unauthorized access are handled |
| Automation Testing | Use pytest for repeatable API validation |

## 7. Test environment

| Item | Value |
|---|---|
| Browser | Chrome / Edge |
| Frontend | React app on `http://localhost:5173` |
| Backend | Express API on `http://localhost:5000/api` |
| Database | PostgreSQL database `shopflow_qa` |
| API Tool | Postman |
| Automation | Python, pytest, requests |
| OS | Windows 11 / Linux Ubuntu basics |

## 8. Test data

| Role | Email | Password |
|---|---|---|
| Customer | customer@example.com | Password123! |
| Admin | admin@example.com | Admin123! |

## 9. Entry criteria

Testing can begin when:

- PostgreSQL database is created.
- Backend `.env` is configured.
- `npm run db:setup` has completed successfully.
- Backend is running on port 5000.
- Frontend is running on port 5173.
- Postman environment points to `http://localhost:5000/api`.

## 10. Exit criteria

Testing can close when:

- All critical smoke tests pass.
- High-priority manual test cases are executed.
- API tests for auth, products, cart, orders, and admin pass.
- SQL validation confirms correct data persistence.
- Critical/high defects are fixed or documented as known issues.
- Regression checklist is completed.

## 11. Deliverables

- QA test plan
- Test scenarios
- Manual test cases
- Bug report examples
- Smoke checklist
- Regression checklist
- Postman collection and environment
- SQL validation queries
- pytest API automation
- Release validation notes
- Resume and interview project summary
