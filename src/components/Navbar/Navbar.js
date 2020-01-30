import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">Library</Link>

          <ul className="right">
            <li><Link to="/">Books</Link></li>
            <li><Link to="/cart">libraries</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
