from utils.api_client import APIClient, unique_email


def test_health_check_returns_ok():
    response = APIClient().get('/health')
    assert response.status_code == 200
    assert response.json()['status'] == 'ok'


def test_register_customer_with_unique_email():
    payload = {
        'name': 'Pytest User',
        'email': unique_email(),
        'password': 'Password123!'
    }
    response = APIClient().post('/auth/register', payload)
    assert response.status_code == 201
    body = response.json()
    assert 'token' in body
    assert body['user']['email'] == payload['email']


def test_login_customer_returns_token():
    response = APIClient().post('/auth/login', {
        'email': 'customer@example.com',
        'password': 'Password123!'
    })
    assert response.status_code == 200
    assert response.json()['token']


def test_negative_login_wrong_password_returns_401():
    response = APIClient().post('/auth/login', {
        'email': 'customer@example.com',
        'password': 'WrongPassword123'
    })
    assert response.status_code == 401


def test_register_missing_required_fields_returns_400():
    response = APIClient().post('/auth/register', {'name': 'Missing Email'})
    assert response.status_code == 400
