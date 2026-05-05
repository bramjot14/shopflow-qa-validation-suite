import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api.js';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Could not load products');
      }
    }
    loadProducts();
  }, []);

  return (
    <>
      <h2 className="page-title">Products</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image_url} className="card-img-top product-img" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">${Number(product.price).toFixed(2)} · Stock: {product.stock}</p>
                <Link className="btn btn-primary mt-auto" to={`/products/${product.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
