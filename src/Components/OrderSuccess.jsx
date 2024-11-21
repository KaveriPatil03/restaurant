import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSuccess = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-success text-white">
      <div className="card text-center" style={{ maxWidth: '400px', width: '90%' }}>
        <div className="card-body">
          <h1 className="card-title display-5">🎉 Order Placed Successfully! 🎉</h1>
          <p className="card-text mt-3">
            Thank you for your purchase! Your order is being processed and will be shipped soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
