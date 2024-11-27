import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <div className="container-fluid border-top" style={{ paddingLeft: '0' }}>
        <div className="bg-dark text-white" style={{ height: '100vh', overflow: 'hidden' }}>
          <div className="py-2 pt-4 text-center">
            <h4>Dashboard</h4>
          </div>
          <hr />
          <ul className="nav flex-column fw-bold">
            <li className="nav-item">
              <Link to={"/dashboard"} className="nav-link text-white py-3 " style={{ padding: '0' }}>
                <i className="fa fa-tachometer pt-2 px-2" aria-hidden="true"></i>
                Dashboard
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link to={"/product-details"} className="nav-link text-white py-3" style={{ padding: '0' }}>
                <i className="fa fa-shopping-basket pt-2 px-2" aria-hidden="true"></i>
                Product Details</Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link to={"/order-details"} className="nav-link text-white py-3" style={{ padding: '0' }}>
                <i className="fa fa-area-chart pt-2 px-2" aria-hidden="true"></i>
                Order Details</Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link to={"/user-details"} className="nav-link text-white py-3" style={{ padding: '0' }}>
                <i className="fa fa-users pt-2 px-2" aria-hidden="true"></i>
                User Details</Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
