import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderFailed = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-white">
      <div className="card text-center" style={{ maxWidth: '400px', width: '90%' }}>
        <div className="card-body">
          <h1 className="card-title display-5">Order Failed ❌</h1>
          <p className="card-text mt-3">
            Unfortunately, your order could not be processed. Please try again later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderFailed;
