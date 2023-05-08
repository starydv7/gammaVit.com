import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

import "./navbar.css";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">My Logo</Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaCartPlus />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
