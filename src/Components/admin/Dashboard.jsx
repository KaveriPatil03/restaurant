import React, { useState, useEffect } from "react";
import PieChart from "./charts/PieChart";
import BarGraph from "./charts/BarGraph";
import axios from "axios";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    productSales: [],
    customerSpendings: [],
  });

  useEffect(() => {
    // Fetch analytics data using axios
   const getAnalyticsData = async() => {
    try{
      const response = axios.get("/analytics");
      const data = response.data || {};
      setDashboardData({
        productSales: data.productSales || [],
        customerSpendings: data.customerSpendings || [],
      });
    }catch(err){
      console.log(err);
    }
    getAnalyticsData();
   }
  }, []);

  return (
    <>
      <div className="container-fluid px-4">
        <div>
          <h2>Admin Dashboard</h2>
        </div>
        <div className="row gx-5">
          <div className="col-sm-12 col-md-3 col-lg-3 bg-info bg-opacity-10 m-3 p-3 rounded-3 border border-info border-opacity-10 border-2">
            <div className="d-flex justify-content-between">
              <h5 className="">Total Orders</h5>
              <span className="fa fa-shopping-cart fa-2x"></span>
            </div>
            <p className="fw-bold">{dashboardData.totalOrders}</p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 bg-warning bg-opacity-25 m-3 p-3 rounded-3 border border-warning border-opacity-25 border-2">
            <div className="d-flex justify-content-between">
              <h5 className="">Total Products</h5>
              <span className="fa fa-cutlery fa-2x"></span>
            </div>
            <p className="fw-bold">{dashboardData.totalProducts}</p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 bg-danger bg-opacity-10 m-3 p-3 rounded-3 border border-danger border-opacity-10 border-2">
            <div className="d-flex justify-content-between">
              <h5 className="">Total Users</h5>
              <span className="fa fa-users fa-2x"></span>
            </div>
            <p className="fw-bold">{dashboardData.totalUsers}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
          <PieChart data={dashboardData.productSales} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
          <BarGraph data={dashboardData.customerSpendings} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
