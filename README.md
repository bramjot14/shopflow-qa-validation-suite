````markdown
# ShopFlow QA Validation Suite

**Live Demo:** https://your-frontend-link.onrender.com  

ShopFlow QA Validation Suite is a full-stack e-commerce QA portfolio project built to demonstrate practical software testing skills for **Junior QA Engineer, QA Tester, Software Tester, Manual QA Tester, Software QA Engineer, and Junior QA Automation Engineer** roles.

The project includes a real e-commerce demo application with a **React frontend**, **Node.js/Express backend**, **PostgreSQL database**, **JWT authentication**, customer workflows, and admin order-management workflows. It is tested through **manual test cases, Postman API testing, SQL validation queries, pytest API automation, bug reports, smoke testing, regression testing, and release validation notes**.

---

## Project Highlights

- Built and tested a real e-commerce workflow: registration, login, products, product details, cart, checkout, order history, and admin order status.
- Created QA documentation including test plan, test scenarios, test cases, bug reports, smoke checklist, regression checklist, and release notes.
- Validated REST APIs using Postman with environment variables and Bearer Token authentication.
- Verified backend data using PostgreSQL SQL queries across users, products, carts, cart_items, orders, and order_items tables.
- Added pytest API automation for repeatable checks such as health check, login, products, cart, checkout, unauthorized access, and admin status update.
- Organized the project using Git/GitHub-friendly structure for portfolio and interview demonstration.

---

## Tech Stack

| Area             | Technologies                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------- |
| Frontend         | React, React Router, Axios, Bootstrap, Vite                                              |
| Backend          | Node.js, Express.js, JWT, bcryptjs, cors, dotenv, pg                                     |
| Database         | PostgreSQL, SQL                                                                          |
| API Testing      | Postman                                                                                  |
| Automation       | Python, pytest, requests                                                                 |
| QA Documentation | Test Plan, Test Cases, Bug Reports, Smoke Checklist, Regression Checklist, Release Notes |
| Version Control  | Git, GitHub                                                                              |

---

## Application Under Test

ShopFlow is a small e-commerce demo application with customer and admin workflows.

### Customer Features

- Register
- Login
- View products
- View product details
- Add products to cart
- Update cart quantity
- Remove cart items
- Checkout
- View order history

### Admin Features

- Admin login
- View all customer orders
- Update order status

### Backend API Features

- Authentication APIs
- Product APIs
- Cart APIs
- Order APIs
- Admin APIs
- Health check API

---

## QA Work Completed

This project demonstrates end-to-end QA work across UI, API, database, and automation layers.

| QA Area             | What Was Covered                                                               |
| ------------------- | ------------------------------------------------------------------------------ |
| Manual Testing      | Test scenarios and test cases for customer/admin workflows                     |
| Functional Testing  | Login, products, cart, checkout, orders, admin status update                   |
| API Testing         | Auth, products, cart, orders, and admin endpoints using Postman                |
| Database Validation | SQL checks for users, products, cart items, orders, and order_items            |
| Negative Testing    | Invalid login, missing fields, invalid product ID, unauthorized access         |
| Smoke Testing       | Critical build checks before deeper testing                                    |
| Regression Testing  | Retesting core workflows after changes                                         |
| Bug Reporting       | Defects documented with steps, expected/actual results, severity, and priority |
| Automation          | pytest API tests for repeatable validation                                     |

---

## Features Tested by QA Suite

- User registration
- User login
- Invalid login
- Unauthorized cart access
- Product list
- Product details
- Invalid product ID
- Add product to cart
- Update cart quantity
- Delete cart item
- Checkout/order creation
- Order history
- Admin order list
- Admin order status update
- Customer access to admin route blocked
- Database validation for cart and order records

---

## Screenshots

Screenshots can be added here to make the project more visual for recruiters.

Suggested screenshots:

- Home page
- Products page
- Product details page
- Cart page
- Checkout page
- Order history page
- Admin orders page
- Postman test results
- pytest test results
- SQL validation output

Example:

```text
screenshots/
├── home-page.png
├── products-page.png
├── cart-page.png
├── checkout-page.png
├── admin-orders-page.png
├── postman-results.png
├── pytest-results.png
└── sql-validation.png
```
````

---

## Final Folder Structure

```text
shopflow-qa-validation-suite/
├── README.md
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   ├── .env.example
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── services/
│       │   └── api.js
│       ├── context/
│       │   └── AuthContext.jsx
│       ├── components/
│       │   └── Navbar.jsx
│       └── pages/
│           ├── Home.jsx
│           ├── Register.jsx
│           ├── Login.jsx
│           ├── Products.jsx
│           ├── ProductDetails.jsx
│           ├── Cart.jsx
│           ├── Checkout.jsx
│           ├── OrderHistory.jsx
│           └── AdminOrders.jsx
├── backend/
│   ├── package.json
│   ├── .env.example
│   ├── server.js
│   ├── scripts/
│   │   └── setupDatabase.js
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       ├── middleware/
│       ├── routes/
│       └── utils/
├── database/
│   ├── schema.sql
│   ├── sample_data.sql
│   └── validation_queries.sql
├── docs/
│   ├── 01_QA_Test_Plan.md
│   ├── 02_Test_Scenarios.md
│   ├── 03_Test_Cases.md
│   ├── 04_Bug_Reports.md
│   ├── 05_Smoke_Test_Checklist.md
│   ├── 06_Regression_Checklist.md
│   ├── 07_API_Testing_Examples.md
│   ├── 08_SQL_Database_Validation.md
│   ├── 09_Postman_Collection_Guide.md
│   ├── 10_Pytest_Automation_Ideas.md
│   ├── 11_Release_Validation_Notes.md
│   └── 12_Resume_Portfolio_Content.md
├── postman/
│   ├── ShopFlow_QA.postman_collection.json
│   └── ShopFlow_QA.postman_environment.json
├── automation/
│   └── pytest_api/
│       ├── README.md
│       ├── pytest.ini
│       ├── requirements.txt
│       ├── sample_config.env
│       ├── utils/
│       │   └── api_client.py
│       └── tests/
│           ├── test_auth_api.py
│           ├── test_products_api.py
│           ├── test_cart_api.py
│           ├── test_orders_api.py
│           └── test_admin_api.py
├── checklists/
├── issue-tracker/
└── .github/
    └── ISSUE_TEMPLATE/
```

---

## Test Credentials

After running the database setup script, use these accounts.

### Customer Account

```text
Email: testcustomer@example.com
Password: Password123!
```

### Admin Account

```text
Email: admin@example.com
Password: Admin123!
```

---

## Local Setup Instructions

### Prerequisites

Install these before running the project:

```text
Node.js
PostgreSQL
Python
VS Code
Postman
```

Check installations:

```bash
node -v
npm -v
python --version
```

---

## How to Run PostgreSQL Database

### Step 1: Create Database

Open pgAdmin or PostgreSQL terminal and create a database:

```sql
CREATE DATABASE shopflow_qa;
```

### Step 2: Configure Backend Environment

Go to the backend folder:

```bash
cd backend
```

Copy `.env.example` to `.env`.

Windows:

```bash
copy .env.example .env
```

macOS/Linux:

```bash
cp .env.example .env
```

Update your PostgreSQL credentials inside `backend/.env`:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
JWT_SECRET=shopflow_local_secret_key
DB_HOST=localhost
DB_PORT=5432
DB_NAME=shopflow_qa
DB_USER=postgres
DB_PASSWORD=your_postgres_password
```

Important: Do not upload your real `.env` file to GitHub. Only upload `.env.example`.

---

## How to Run Backend

From the `backend/` folder:

```bash
npm install
npm run db:setup
npm run dev
```

Backend should run at:

```text
http://localhost:5000
```

Health check:

```text
http://localhost:5000/api/health
```

Expected response:

```json
{
  "status": "ok",
  "message": "ShopFlow API is running"
}
```

---

## How to Run Frontend

Open a new VS Code terminal:

```bash
cd frontend
npm install
```

Copy `.env.example` to `.env`.

Windows:

```bash
copy .env.example .env
```

macOS/Linux:

```bash
cp .env.example .env
```

Make sure `frontend/.env` contains:

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

Frontend should run at:

```text
http://localhost:5173
```

---

## How to Import Postman Collection

1. Open Postman.
2. Click **Import**.
3. Import these files:

```text
postman/ShopFlow_QA.postman_collection.json
postman/ShopFlow_QA.postman_environment.json
```

4. Select the environment:

```text
ShopFlow Local Environment
```

5. Start backend first:

```bash
cd backend
npm run dev
```

6. Run requests in this order:

```text
Health Check
Register Customer
Login Customer
Get Products
Get Product Details
Add Product to Cart
Update Cart Item
Delete Cart Item
Add Product Again Before Checkout
Checkout / Create Order
Get Order History
Login Admin
Admin Get Orders
Admin Update Order Status
Negative Login
Missing Required Fields
Invalid Product ID
Unauthorized Cart Access
Customer Access Admin Negative Test
```

---

## Postman Environment Variables

The Postman environment uses these variables:

| Variable     | Purpose                     |
| ------------ | --------------------------- |
| base_url     | Stores local API URL        |
| token        | Stores customer login token |
| admin_token  | Stores admin login token    |
| product_id   | Stores selected product ID  |
| cart_item_id | Stores cart item ID         |
| order_id     | Stores created order ID     |

Example:

```text
base_url = http://localhost:5000/api
```

For protected customer requests, use:

```text
Authorization > Bearer Token > {{token}}
```

For admin requests, use:

```text
Authorization > Bearer Token > {{admin_token}}
```

---

## How to Run pytest API Automation

Start the backend first. Then open a new terminal:

```bash
cd automation/pytest_api
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
pytest
```

For macOS/Linux:

```bash
cd automation/pytest_api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pytest
```

Default backend URL:

```text
http://localhost:5000
```

The pytest suite covers:

- Health check
- Register/login
- Negative login
- Product list
- Product details
- Add to cart
- Checkout/order creation
- Order history
- Unauthorized cart/order access
- Admin order status update

---

## SQL Database Validation

SQL validation queries are stored in:

```text
database/validation_queries.sql
```

Examples of validations included:

- Confirm registered user exists.
- Confirm product prices and stock are valid.
- Confirm cart item is saved correctly.
- Confirm order and order_items records match after checkout.
- Confirm admin order status update is saved.
- Compare order total with calculated order item total.

Example query:

```sql
SELECT o.id,
       o.total_amount,
       SUM(oi.quantity * oi.unit_price) AS calculated_total
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id, o.total_amount
HAVING o.total_amount <> SUM(oi.quantity * oi.unit_price);
```

Expected result:

```text
Zero rows returned
```

If rows are returned, it means the order total does not match the order item total.

---

## QA Documentation

Detailed QA documentation is available in the `docs/` folder.

| File                                | Purpose                       |
| ----------------------------------- | ----------------------------- |
| docs/01_QA_Test_Plan.md             | Overall QA test plan          |
| docs/02_Test_Scenarios.md           | High-level testing scenarios  |
| docs/03_Test_Cases.md               | Manual test cases             |
| docs/04_Bug_Reports.md              | Sample bug reports            |
| docs/05_Smoke_Test_Checklist.md     | Smoke testing checklist       |
| docs/06_Regression_Checklist.md     | Regression testing checklist  |
| docs/07_API_Testing_Examples.md     | API testing examples          |
| docs/08_SQL_Database_Validation.md  | SQL validation examples       |
| docs/09_Postman_Collection_Guide.md | Postman guide                 |
| docs/10_Pytest_Automation_Ideas.md  | pytest automation explanation |
| docs/11_Release_Validation_Notes.md | Release validation notes      |
| docs/12_Resume_Portfolio_Content.md | Resume and interview content  |

---

## Sample Bug Reports Documented

The project includes realistic bug report examples such as:

- Cart total does not update after increasing product quantity.
- Duplicate email registration creates unclear error message.
- Checkout button remains enabled when cart is empty.
- Order history does not show the latest order after successful checkout.
- API returns success response while order_items records are missing in the database.

Each bug report includes:

- Bug title
- Module
- Severity
- Priority
- Environment
- Steps to reproduce
- Expected result
- Actual result
- Impact

---

**Technologies:** React, Node.js, Express.js, PostgreSQL, SQL, Postman, pytest, Python, Manual Testing, API Testing, Git/GitHub

- Built and tested a full-stack e-commerce demo application covering registration, login, products, cart, checkout, order history, and admin order-status workflows.
- Created manual test cases, smoke/regression checklists, negative tests, API tests, SQL validation queries, bug reports, and release validation notes using SDLC/STLC practices.
- Validated REST APIs with Postman and verified backend data using PostgreSQL queries across users, carts, orders, and order_items tables.
- Added pytest API automation for health check, authentication, products, cart, orders, unauthorized access, and admin status-update validation.

---

## Interview Summary

This project can be explained in interviews like this:

“ShopFlow QA Validation Suite is a full-stack e-commerce QA project I created to practice real-world testing. The app includes a React frontend, Node.js/Express backend, and PostgreSQL database. I tested workflows like registration, login, product browsing, cart, checkout, order history, and admin order-status updates. I created manual test cases, smoke and regression checklists, Postman API tests, SQL validation queries, bug reports, release notes, and pytest automation for repeatable API checks.”

---

## Interview Talking Points

### What application did you test?

I tested a small e-commerce demo application called ShopFlow. It has customer workflows such as registration, login, product browsing, cart, checkout, and order history, plus an admin workflow to view orders and update order status.

### What types of testing did you perform?

I performed manual testing, functional testing, UI testing, API testing, SQL/database validation, smoke testing, regression testing, negative testing, and basic pytest API automation.

### How did you use Postman?

I used Postman to test backend APIs such as authentication, products, cart, orders, and admin order status. I also used environment variables for base URL, customer token, admin token, product ID, cart item ID, and order ID.

### How did you validate data using SQL?

I used SQL queries to confirm that user registration, cart items, order creation, order_items, and admin status updates were correctly saved in PostgreSQL.

### What did you automate using pytest?

I automated repeatable API checks such as health check, login, product list, product details, add to cart, checkout, order history, unauthorized access, and admin status update.

### What bugs did you document?

I documented realistic bugs such as cart total mismatch, unclear duplicate email error, checkout allowed with empty cart, order history not refreshing, and API success response while order_items were missing in the database.

### Why is this project relevant to QA roles?

This project is relevant because it shows the full QA process across a real app: understanding requirements, writing test cases, executing UI/API/database tests, reporting bugs clearly, running regression checks, and adding basic automation.

---

## Common Troubleshooting

### Backend database connection error

Check that PostgreSQL is running and `.env` has the correct database password.

```env
DB_NAME=shopflow_qa
DB_USER=postgres
DB_PASSWORD=your_postgres_password
```

### Port already in use

If port `5000` is already being used, update `PORT` in `backend/.env`.

### Frontend cannot connect to backend

Check that backend is running and frontend `.env` has:

```env
VITE_API_URL=http://localhost:5000/api
```

### Postman variables not working

Make sure the environment file is imported and selected:

```text
ShopFlow Local Environment
```

### pytest import error

Run pytest from this folder:

```bash
cd automation/pytest_api
python -m pytest
```

---

## GitHub Portfolio Description

ShopFlow QA Validation Suite is a full-stack QA portfolio project built around a realistic e-commerce demo app. It includes a React frontend, Express/PostgreSQL backend, Postman collection, SQL validation queries, manual test cases, bug reports, smoke/regression checklists, release validation notes, and pytest API automation for junior QA roles.

---

## Project Status

```text
Status: Completed for local QA portfolio use
Purpose: Resume, GitHub portfolio, and interview demonstration
Target Roles: Junior QA Engineer, QA Tester, Software Tester, Manual QA Tester, Software QA Engineer, Junior QA Automation Engineer
```

```

```
