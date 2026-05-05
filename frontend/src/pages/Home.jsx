import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="card p-4">
      <h1 className="page-title">ShopFlow QA Demo</h1>
      <p className="lead">
        A small e-commerce application built to support manual testing, API testing,
        SQL validation, bug reporting, smoke/regression testing, and pytest automation.
      </p>
      <div className="d-flex gap-2 flex-wrap">
        <Link to="/products" className="btn btn-primary">View Products</Link>
        <Link to="/login" className="btn btn-outline-secondary">Login</Link>
      </div>
    </div>
  );
}
