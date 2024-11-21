import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <div className="container-fluid border-top" style={{paddingLeft: '0'}}>
        <div className="bg-dark text-white" style={{ height:'100vh', overflow: 'hidden' }}>
          <div className="py-2 pt-4 text-center">
          <h4>Dashboard</h4>
          </div>
          <hr />
          <ul class="nav flex-column fw-bold">
            <li class="nav-item">
              <Link to={"/dashboard"} class="nav-link text-white py-3 " style={{padding: '0'}}>
            <i class="fa fa-tachometer pt-2 px-2" aria-hidden="true"></i>
            Dashboard
              </Link>
            </li>
            <hr />
            <li class="nav-item">
              <Link to={"/product-details"} class="nav-link text-white py-3" style={{padding: '0'}}>
            <i class="fa fa-shopping-basket pt-2 px-2" aria-hidden="true"></i>
              Product Details</Link>
            </li>
            <hr />
            <li class="nav-item">
              <Link to={"/order-details"} class="nav-link text-white py-3" style={{padding: '0'}}>
            <i class="fa fa-area-chart pt-2 px-2" aria-hidden="true"></i>
              Order Details</Link>
            </li>
            <hr />
            <li class="nav-item">
              <Link to={"/user-details"} class="nav-link text-white py-3" style={{padding: '0'}}>
            <i class="fa fa-users pt-2 px-2" aria-hidden="true"></i>
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
