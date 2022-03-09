import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="links">
          <h1 className="head">Bookstore CMS</h1>
          <Link to="/">Home</Link>
          <Link to="/catagories">Catagories</Link>
        </div>
        <div className="oval"><ImUser className="icon" /></div>
      </nav>
    </header>
  );
}
