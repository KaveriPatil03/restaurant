import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OutOfStock = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-white">
      <div className="card text-center" style={{ maxWidth: '400px', width: '90%' }}>
        <div className="card-body">
          <h1 className="card-title display-5">Order Out Of Stock</h1>
          <p className="card-text mt-3">
            Please try again later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutOfStock;
