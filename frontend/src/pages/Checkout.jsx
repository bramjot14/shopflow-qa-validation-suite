import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';

export default function Checkout() {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState('123 Test Street, Toronto, ON');
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const [error, setError] = useState('');

  async function placeOrder(e) {
    e.preventDefault();
    setError('');
    try {
      await api.post('/orders', { shippingAddress, paymentMethod });
      navigate('/orders');
    } catch (err) {
      setError(err.response?.data?.message || 'Checkout failed');
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card p-4">
          <h2 className="page-title">Checkout</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={placeOrder}>
            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea className="form-control" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select className="form-select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option>Cash on Delivery</option>
                <option>Test Credit Card</option>
              </select>
            </div>
            <button className="btn btn-success w-100">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}
