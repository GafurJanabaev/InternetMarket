import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="Navbar__box">
        <h1>InterMarket</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="Navbar__box__btn">
          <button className="menu-btn"><i className='bx bx-menu'></i></button>
          <Link to='/register' className="btn1" ><i className="bx bx-registered"></i>
            Register
          </Link>
          <Link to='/login' className="btn1"><i className="bx bx-log-in"></i> 
            Login
          </Link>
          <Link to='/cart' className="btn1">
            <i className="bx bx-cart-add"></i> Cart(0)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
