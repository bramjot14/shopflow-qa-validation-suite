from utils.api_client import APIClient, first_product_id


def test_get_products_returns_list():
    response = APIClient().get('/products')
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert len(response.json()) > 0


def test_product_has_required_fields():
    response = APIClient().get('/products')
    product = response.json()[0]
    assert 'id' in product
    assert 'name' in product
    assert 'price' in product
    assert 'stock' in product


def test_get_product_details_returns_product():
    product_id = first_product_id()
    response = APIClient().get(f'/products/{product_id}')
    assert response.status_code == 200
    assert response.json()['id'] == product_id


def test_invalid_product_id_returns_404():
    response = APIClient().get('/products/999999')
    assert response.status_code == 404


def test_product_price_and_stock_are_valid():
    response = APIClient().get('/products')
    for product in response.json():
        assert float(product['price']) > 0
        assert product['stock'] >= 0
