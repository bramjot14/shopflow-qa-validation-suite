# pytest API Automation - ShopFlow QA Validation Suite

The `automation/pytest_api/` folder contains real pytest tests designed to run against the Express backend.

## Automated coverage

- Health check
- Register unique customer
- Login customer
- Negative login
- Get products
- Get product details
- Invalid product ID
- Unauthorized cart access
- Add product to cart
- Update cart item
- Create order
- Order history
- Unauthorized order access
- Admin login
- Admin get orders
- Admin update order status
- Customer blocked from admin API

## How to run

Start backend first:

```bash
cd backend
npm run dev
```

Then run pytest:

```bash
cd automation/pytest_api
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
pytest
```

For macOS/Linux:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pytest
```

## Why these tests are useful

These tests support regression testing because they quickly confirm that key APIs still work after backend, database, or authentication changes.

## Interview explanation

“I automated stable API checks using pytest, such as health check, login, product list, add to cart, checkout, order history, unauthorized access, and admin order status update. Manual testing was still used for full UI workflow validation, while pytest helped repeat backend validation faster.”
