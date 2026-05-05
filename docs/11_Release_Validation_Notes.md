# Release Validation Notes - ShopFlow QA Validation Suite

## Release candidate

| Field | Details |
|---|---|
| Project | ShopFlow QA Validation Suite |
| Build | v1.0 Local QA Candidate |
| Frontend | React app on `http://localhost:5173` |
| Backend | Express API on `http://localhost:5000/api` |
| Database | PostgreSQL `shopflow_qa` |
| Tested By | Bramjot Singh |

## Testing summary

| Area | Status | Notes |
|---|---|---|
| Smoke Testing | Completed / Pending | Health, login, products, cart, checkout, order history, admin status |
| Manual Testing | Completed / Pending | Core customer and admin workflows |
| API Testing | Completed / Pending | Auth, products, cart, orders, admin, negative tests |
| SQL Validation | Completed / Pending | users, products, cart_items, orders, order_items |
| pytest Automation | Completed / Pending | API regression tests |
| Regression Testing | Completed / Pending | Existing workflows after changes |

## Release decision template

**Release Status:** Pass / Conditional Pass / Fail

Recommended decision:

- **Pass** if login, products, cart, checkout, order history, and admin status update work.
- **Conditional Pass** if only low-severity UI issues remain.
- **Fail** if checkout, order creation, authentication, or admin status update is broken.

## Open defect examples

| Bug ID | Title | Severity | Status |
|---|---|---|---|
| BUG-001 | Cart total does not update after quantity change | High | Example |
| BUG-003 | Checkout API allows empty cart order | Critical | Example |
| BUG-005 | Admin status update not saved in database | High | Example |

## Final QA recommendation

The build is release-ready only when all critical customer workflows pass and SQL validation confirms correct data persistence for cart, checkout, orders, order_items, and admin status updates.
