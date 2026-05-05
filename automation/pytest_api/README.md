# pytest API Automation - ShopFlow QA Validation Suite

These tests run against the real ShopFlow Express backend.

## Prerequisites

1. PostgreSQL database is created.
2. Backend `.env` is configured.
3. `cd backend && npm install && npm run db:setup` has been completed.
4. Backend is running on `http://localhost:5000`.

## Setup

```bash
cd automation/pytest_api
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

For macOS/Linux:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Run tests

```bash
pytest
```

## Coverage

- Health check
- Register/login
- Negative login
- Product list
- Product details
- Invalid product ID
- Unauthorized cart/order access
- Add to cart
- Checkout/order creation
- Order history
- Admin get orders
- Admin status update
- Customer blocked from admin API
