# ShopFlow QA Validation Suite

**Live Demo:** https://shopflow-qa-frontend.onrender.com  
**Backend Health Check:** https://shopflow-qa-backend.onrender.com/api/health  
**Products API:** https://shopflow-qa-backend.onrender.com/api/products  

ShopFlow QA Validation Suite is a full-stack e-commerce QA portfolio project built to demonstrate practical software testing skills for **Junior QA Engineer, QA Tester, Software Tester, Manual QA Tester, Software QA Engineer, and Junior QA Automation Engineer** roles.

The project includes a real e-commerce demo application with a **React frontend**, **Node.js/Express backend**, **PostgreSQL database**, **JWT authentication**, customer workflows, and admin order-management workflows. It is tested through **manual test cases, Postman API testing, SQL validation queries, pytest API automation, bug reports, smoke testing, regression testing, and release validation notes**.

---

## Project Highlights

- Built and tested a real e-commerce workflow: registration, login, products, product details, cart, checkout, order history, and admin order status.
- Created QA documentation including test plan, test scenarios, test cases, bug reports, smoke checklist, regression checklist, and release notes.
- Validated REST APIs using Postman with environment variables and Bearer Token authentication.
- Verified backend data using PostgreSQL SQL queries across users, products, carts, cart items, orders, and order items.
- Added pytest API automation for repeatable checks such as health check, login, products, cart, checkout, unauthorized access, and admin status update.
- Organized the project using a GitHub-friendly structure for portfolio and interview demonstration.

---

## Deployment

| Service | Link |
|---|---|
| Frontend Live Demo | https://shopflow-qa-frontend.onrender.com |
| Backend Health Check | https://shopflow-qa-backend.onrender.com/api/health |
| Products API | https://shopflow-qa-backend.onrender.com/api/products |

The frontend is deployed as a **Render Static Site**.  
The backend is deployed as a **Render Web Service** connected to a **Render PostgreSQL database**.

---

## Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React, React Router, Axios, Bootstrap, Vite |
| Backend | Node.js, Express.js, JWT, bcryptjs, cors, dotenv, pg |
| Database | PostgreSQL, SQL |
| API Testing | Postman |
| Automation | Python, pytest, requests |
| QA Documentation | Test Plan, Test Cases, Bug Reports, Smoke Checklist, Regression Checklist, Release Notes |
| Version Control | Git, GitHub |
| Deployment | Render |

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

| QA Area | What Was Covered |
|---|---|
| Manual Testing | Test scenarios and test cases for customer/admin workflows |
| Functional Testing | Login, products, cart, checkout, orders, admin status update |
| API Testing | Auth, products, cart, orders, and admin endpoints using Postman |
| Database Validation | SQL checks for users, products, cart items, orders, and order items |
| Negative Testing | Invalid login, missing fields, invalid product ID, unauthorized access |
| Smoke Testing | Critical build checks before deeper testing |
| Regression Testing | Retesting core workflows after changes |
| Bug Reporting | Defects documented with steps, expected/actual results, severity, and priority |
| Automation | pytest API tests for repeatable validation |

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

### Home Page

<img width="1918" height="367" alt="home-page" src="https://github.com/user-attachments/assets/0775c80a-b43f-4855-bea3-0902e4337403" />

---

### Products Page

<img width="1918" height="912" alt="products-page" src="https://github.com/user-attachments/assets/e4c46131-b514-48f1-9e7a-fcff3badd35f" />

---

### Product Details Page

<img width="1918" height="587" alt="product-detail-page" src="https://github.com/user-attachments/assets/d90ba1ca-16a4-4d5a-a54a-e2ac29af946c" />

---

### Cart Page

<img width="1918" height="392" alt="cart-page" src="https://github.com/user-attachments/assets/c859c10b-575a-48a7-aa1a-729ba9c4af85" />

---

### Checkout Page

<img width="1918" height="431" alt="checkout-page" src="https://github.com/user-attachments/assets/ec646b3b-7f2c-4d14-878b-236a4115c9a0" />

---

### Order History Page

<img width="1918" height="342" alt="order-history-page" src="https://github.com/user-attachments/assets/9687700f-7285-4b27-b697-5cc0f4e9f7e5" />

---

### Admin Orders Page

<img width="1918" height="460" alt="admin-orders-page" src="https://github.com/user-attachments/assets/894bd235-f757-456a-962b-a4b3481f442c" />

---

### Postman API Test Results

<img width="1888" height="968" alt="postman-api-results" src="https://github.com/user-attachments/assets/8cdc91c3-6c7a-43aa-9ed8-ae6dc312c86c" />

---

### QA Automation Results in VS Code

<img width="1500" height="895" alt="qa-automation-results-vscode" src="https://github.com/user-attachments/assets/95461fea-c011-4797-8f32-e85658c03555" />

---

### SQL Database Validation

<img width="1048" height="792" alt="sql-database-validation" src="https://github.com/user-attachments/assets/65fd0711-a117-4212-b374-315472dceb13" />

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
│   ├── public/
│   │   └── images/
│   │       └── products/
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

## How to Run PostgreSQL Database Locally

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

## How to Run Backend Locally

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

## How to Run Frontend Locally

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

## How to Import and Run Postman Collection

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

5. For deployed Render testing, set:

```text
base_url = https://shopflow-qa-backend.onrender.com/api
```

6. Run requests in this order:

```text
Health Check
Register Customer With Unique Email
Login Customer
Get Products
Get Product Details
Invalid Product ID Negative Test
Add Product to Cart
Get Cart
Update Cart Item
Delete Cart Item
Add Product Again Before Checkout
Checkout Create Order
Get Order History
Login Admin
Admin Get Orders
Admin Update Order Status
Negative Login Wrong Password
Missing Required Fields Register
Unauthorized Cart Access
Customer Access Admin Negative Test
```

---

## Postman Environment Variables

| Variable | Purpose |
|---|---|
| base_url | Stores API base URL |
| token | Stores customer login token |
| admin_token | Stores admin login token |
| product_id | Stores selected product ID |
| cart_item_id | Stores cart item ID |
| order_id | Stores created order ID |

For protected customer requests:

```text
Authorization > Bearer Token > {{token}}
```

For admin requests:

```text
Authorization > Bearer Token > {{admin_token}}
```

---

## How to Run pytest API Automation

Start the backend first if testing locally.

### Local Backend

```bash
cd automation/pytest_api
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
set BASE_URL=http://localhost:5000/api
python -m pytest
```

### Deployed Render Backend

```bash
cd automation/pytest_api
venv\Scripts\activate
set BASE_URL=https://shopflow-qa-backend.onrender.com/api
python -m pytest
```

For macOS/Linux:

```bash
cd automation/pytest_api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
export BASE_URL=https://shopflow-qa-backend.onrender.com/api
python -m pytest
```

The pytest suite covers:

- Health check
- Register/login
- Negative login
- Product list
- Product details
- Add to cart
- Update cart item
- Delete cart item
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
- Confirm order and order items match after checkout.
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

| File | Purpose |
|---|---|
| docs/01_QA_Test_Plan.md | Overall QA test plan |
| docs/02_Test_Scenarios.md | High-level testing scenarios |
| docs/03_Test_Cases.md | Manual test cases |
| docs/04_Bug_Reports.md | Sample bug reports |
| docs/05_Smoke_Test_Checklist.md | Smoke testing checklist |
| docs/06_Regression_Checklist.md | Regression testing checklist |
| docs/07_API_Testing_Examples.md | API testing examples |
| docs/08_SQL_Database_Validation.md | SQL validation examples |
| docs/09_Postman_Collection_Guide.md | Postman guide |
| docs/10_Pytest_Automation_Ideas.md | pytest automation explanation |
| docs/11_Release_Validation_Notes.md | Release validation notes |
| docs/12_Resume_Portfolio_Content.md | Resume and interview content |

---

## Sample Bug Reports Documented

The project includes realistic bug report examples such as:

- Cart total does not update after increasing product quantity.
- Duplicate email registration creates unclear error message.
- Checkout button remains enabled when cart is empty.
- Order history does not show the latest order after successful checkout.
- API returns success response while order items are missing in the database.

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

## Resume-Ready Project Section

**ShopFlow QA Validation Suite**  
**Technologies:** React, Node.js, Express.js, PostgreSQL, SQL, Postman, pytest, Python, Manual Testing, API Testing, Git/GitHub

- Built and tested a full-stack e-commerce demo application covering registration, login, products, cart, checkout, order history, and admin order-status workflows.
- Created manual test cases, smoke/regression checklists, negative tests, API tests, SQL validation queries, bug reports, and release validation notes using SDLC/STLC practices.
- Validated REST APIs with Postman and verified backend data using PostgreSQL queries across users, carts, orders, and order items.
- Added pytest API automation for health check, authentication, products, cart, orders, unauthorized access, and admin status-update validation.

---

## Interview Summary

ShopFlow QA Validation Suite is a full-stack e-commerce QA project created to practice real-world testing. The app includes a React frontend, Node.js/Express backend, and PostgreSQL database. The tested workflows include registration, login, product browsing, cart, checkout, order history, and admin order-status updates.

The project demonstrates manual testing, API testing, SQL validation, bug reporting, smoke testing, regression testing, and pytest API automation. It shows the ability to understand requirements, design test cases, validate backend data, test protected APIs, document defects, and support regression testing with automation.

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

Make sure the environment file is imported and selected.

```text
ShopFlow Local Environment
```

### pytest route not found error

Make sure `BASE_URL` includes `/api`.

Correct:

```text
https://shopflow-qa-backend.onrender.com/api
```

Wrong:

```text
https://shopflow-qa-backend.onrender.com
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
Status: Completed and deployed
Purpose: Resume, GitHub portfolio, and interview demonstration
Target Roles: Junior QA Engineer, QA Tester, Software Tester, Manual QA Tester, Software QA Engineer, Junior QA Automation Engineer
```
````
