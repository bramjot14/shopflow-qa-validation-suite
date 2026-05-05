from utils.api_client import APIClient, login_customer, first_product_id


def test_unauthorized_cart_access_returns_401():
    response = APIClient().get('/cart')
    assert response.status_code == 401


def test_add_product_to_cart():
    client = login_customer()
    product_id = first_product_id()
    response = client.post('/cart', {'productId': product_id, 'quantity': 1})
    assert response.status_code in [200, 201]
    assert len(response.json()['items']) > 0


def test_update_cart_item_quantity():
    client = login_customer()
    product_id = first_product_id()
    add_response = client.post('/cart', {'productId': product_id, 'quantity': 1})
    assert add_response.status_code in [200, 201]
    item_id = add_response.json()['items'][0]['cart_item_id']

    update_response = client.put(f'/cart/{item_id}', {'quantity': 2})
    assert update_response.status_code == 200
    assert update_response.json()['items'][0]['quantity'] >= 1


def test_delete_cart_item():
    client = login_customer()
    product_id = first_product_id()
    add_response = client.post('/cart', {'productId': product_id, 'quantity': 1})
    assert add_response.status_code in [200, 201]
    item_id = add_response.json()['items'][0]['cart_item_id']

    delete_response = client.delete(f'/cart/{item_id}')
    assert delete_response.status_code == 200
