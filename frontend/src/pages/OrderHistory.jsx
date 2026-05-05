import { useEffect, useState } from 'react';
import api from '../services/api.js';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await api.get('/orders');
        setOrders(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Could not load orders');
      }
    }
    loadOrders();
  }, []);

  return (
    <div className="card p-4">
      <h2 className="page-title">Order History</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {orders.length === 0 ? <p>No orders found.</p> : (
        <table className="table">
          <thead><tr><th>Order ID</th><th>Total</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>${Number(order.total_amount).toFixed(2)}</td>
                <td><span className="badge bg-secondary badge-status">{order.status}</span></td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
