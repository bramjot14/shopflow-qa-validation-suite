from utils.api_client import APIClient, login_customer, first_product_id


def test_unauthorized_order_history_returns_401():
    response = APIClient().get('/orders')
    assert response.status_code == 401


def test_create_order_after_adding_to_cart():
    client = login_customer()
    product_id = first_product_id()
    add_response = client.post('/cart', {'productId': product_id, 'quantity': 1})
    assert add_response.status_code in [200, 201]

    order_response = client.post('/orders', {
        'shippingAddress': '123 Test Street, Toronto, ON',
        'paymentMethod': 'Cash on Delivery'
    })
    assert order_response.status_code == 201
    assert 'order' in order_response.json()
    assert order_response.json()['order']['id']


def test_order_history_returns_list():
    client = login_customer()
    response = client.get('/orders')
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_checkout_with_empty_cart_is_blocked():
    client = login_customer()
    # Empty current cart before checking empty-cart behavior
    cart_response = client.get('/cart')
    if cart_response.status_code == 200:
        for item in cart_response.json().get('items', []):
            client.delete(f"/cart/{item['cart_item_id']}")

    order_response = client.post('/orders', {
        'shippingAddress': '123 Test Street, Toronto, ON',
        'paymentMethod': 'Cash on Delivery'
    })
    assert order_response.status_code == 400
