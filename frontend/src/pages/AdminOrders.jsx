import { useEffect, useState } from 'react';
import api from '../services/api.js';

const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function loadOrders() {
    try {
      const response = await api.get('/admin/orders');
      setOrders(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not load admin orders');
    }
  }

  useEffect(() => { loadOrders(); }, []);

  async function updateStatus(orderId, status) {
    setError('');
    setMessage('');
    try {
      await api.patch(`/admin/orders/${orderId}/status`, { status });
      setMessage(`Order #${orderId} updated to ${status}.`);
      await loadOrders();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not update status');
    }
  }

  return (
    <div className="card p-4">
      <h2 className="page-title">Admin Order Status</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {orders.length === 0 ? <p>No orders found.</p> : (
        <table className="table align-middle">
          <thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th><th>Update</th></tr></thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.customer_name}<br /><small className="text-muted">{order.customer_email}</small></td>
                <td>${Number(order.total_amount).toFixed(2)}</td>
                <td><span className="badge bg-secondary">{order.status}</span></td>
                <td>
                  <select className="form-select" value={order.status} onChange={(e) => updateStatus(order.id, e.target.value)}>
                    {statuses.map((status) => <option key={status}>{status}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
