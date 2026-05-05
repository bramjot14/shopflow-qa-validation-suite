import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api.js';

export default function Cart() {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [error, setError] = useState('');

  async function loadCart() {
    try {
      const response = await api.get('/cart');
      setCart(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not load cart');
    }
  }

  useEffect(() => { loadCart(); }, []);

  async function updateQuantity(itemId, quantity) {
    try {
      const response = await api.put(`/cart/${itemId}`, { quantity: Number(quantity) });
      setCart(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not update cart');
    }
  }

  async function deleteItem(itemId) {
    try {
      const response = await api.delete(`/cart/${itemId}`);
      setCart(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not remove item');
    }
  }

  return (
    <div className="card p-4">
      <h2 className="page-title">Cart</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {cart.items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <table className="table align-middle">
            <thead>
              <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Line Total</th><th></th></tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.cart_item_id}>
                  <td>{item.name}</td>
                  <td>${Number(item.price).toFixed(2)}</td>
                  <td>
                    <input type="number" min="1" className="form-control" style={{ maxWidth: '90px' }} value={item.quantity} onChange={(e) => updateQuantity(item.cart_item_id, e.target.value)} />
                  </td>
                  <td>${Number(item.line_total).toFixed(2)}</td>
                  <td><button className="btn btn-sm btn-outline-danger" onClick={() => deleteItem(item.cart_item_id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: ${Number(cart.total).toFixed(2)}</h4>
          <Link to="/checkout" className="btn btn-success">Checkout</Link>
        </>
      )}
    </div>
  );
}
