import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../services/api.js';
import { useAuth } from '../context/AuthContext.jsx';

export default function ProductDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Product not found');
      }
    }
    loadProduct();
  }, [id]);

  async function addToCart() {
    setError('');
    setMessage('');
    try {
      await api.post('/cart', { productId: product.id, quantity: Number(quantity) });
      setMessage('Product added to cart successfully.');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not add product to cart');
    }
  }

  if (error && !product) return <div className="alert alert-danger">{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="card p-4">
      <div className="row">
        <div className="col-md-5">
          <img src={product.image_url} className="img-fluid rounded" alt={product.name} />
        </div>
        <div className="col-md-7">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4>${Number(product.price).toFixed(2)}</h4>
          <p>Stock: {product.stock}</p>
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          {user ? (
            <div className="d-flex gap-2 align-items-center">
              <input type="number" min="1" className="form-control" style={{ maxWidth: '120px' }} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
              <Link className="btn btn-outline-secondary" to="/cart">Go to Cart</Link>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">Login to Add to Cart</Link>
          )}
        </div>
      </div>
    </div>
  );
}
