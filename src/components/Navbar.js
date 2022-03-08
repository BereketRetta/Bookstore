import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Book Store</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/catagories">Catagories</Link>
      </div>
    </nav>
  );
}
