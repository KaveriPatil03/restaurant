import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li>
            <Link to="/" className="navbar-brand fw-bold me-auto">LOGO</Link>
                {/* <Login />
                <SignUp /> */}
                {/* <Cart /> */}
              </li>
            </ul>

            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" aria-current="page">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/products" className="nav-link text-white">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">About</Link>
              </li> */}
              <li className="nav-item">
                <Link to="/orders" className="nav-link text-white">Track Order</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;