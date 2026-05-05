from utils.api_client import login_admin, login_customer, create_order_for_admin_test


def test_admin_can_get_all_orders():
    admin = login_admin()
    response = admin.get('/admin/orders')
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_admin_can_update_order_status():
    order_id = create_order_for_admin_test()
    admin = login_admin()
    response = admin.patch(f'/admin/orders/{order_id}/status', {'status': 'Shipped'})
    assert response.status_code == 200
    assert response.json()['order']['status'] == 'Shipped'


def test_customer_cannot_access_admin_orders():
    customer = login_customer()
    response = customer.get('/admin/orders')
    assert response.status_code == 403
