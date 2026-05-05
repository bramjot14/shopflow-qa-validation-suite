import os
import uuid
import requests
from dotenv import load_dotenv

load_dotenv('sample_config.env')

BASE_URL = os.getenv('BASE_URL', 'http://localhost:5000/api').rstrip('/')
CUSTOMER_EMAIL = os.getenv('CUSTOMER_EMAIL', 'customer@example.com')
CUSTOMER_PASSWORD = os.getenv('CUSTOMER_PASSWORD', 'Password123!')
ADMIN_EMAIL = os.getenv('ADMIN_EMAIL', 'admin@example.com')
ADMIN_PASSWORD = os.getenv('ADMIN_PASSWORD', 'Admin123!')


class APIClient:
    def __init__(self, token=None):
        self.token = token

    def headers(self):
        headers = {'Content-Type': 'application/json'}
        if self.token:
            headers['Authorization'] = f'Bearer {self.token}'
        return headers

    def get(self, path):
        return requests.get(f'{BASE_URL}{path}', headers=self.headers(), timeout=10)

    def post(self, path, payload=None):
        return requests.post(f'{BASE_URL}{path}', json=payload or {}, headers=self.headers(), timeout=10)

    def put(self, path, payload=None):
        return requests.put(f'{BASE_URL}{path}', json=payload or {}, headers=self.headers(), timeout=10)

    def patch(self, path, payload=None):
        return requests.patch(f'{BASE_URL}{path}', json=payload or {}, headers=self.headers(), timeout=10)

    def delete(self, path):
        return requests.delete(f'{BASE_URL}{path}', headers=self.headers(), timeout=10)


def unique_email():
    return f'pytest_{uuid.uuid4().hex[:10]}@example.com'


def login_customer():
    response = APIClient().post('/auth/login', {
        'email': CUSTOMER_EMAIL,
        'password': CUSTOMER_PASSWORD
    })
    assert response.status_code == 200, response.text
    return APIClient(response.json()['token'])


def login_admin():
    response = APIClient().post('/auth/login', {
        'email': ADMIN_EMAIL,
        'password': ADMIN_PASSWORD
    })
    assert response.status_code == 200, response.text
    return APIClient(response.json()['token'])


def first_product_id():
    response = APIClient().get('/products')
    assert response.status_code == 200, response.text
    products = response.json()
    assert len(products) > 0
    return products[0]['id']


def create_order_for_admin_test():
    customer = login_customer()
    product_id = first_product_id()
    add_response = customer.post('/cart', {'productId': product_id, 'quantity': 1})
    assert add_response.status_code in [200, 201], add_response.text
    order_response = customer.post('/orders', {
        'shippingAddress': '123 Test Street, Toronto, ON',
        'paymentMethod': 'Cash on Delivery'
    })
    assert order_response.status_code == 201, order_response.text
    return order_response.json()['order']['id']
