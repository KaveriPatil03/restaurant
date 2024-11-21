import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state } = useLocation();
  const { product, formData } = state;
  const navigate = useNavigate();

  const handlePayment = () => {
    console.log('Payment made for product:', product, 'User data:', formData);
    navigate('/order-success');
  };

  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: '30rem' }}>
        <div className="card-header">
          <h3 className="mb-0">Payment Page</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">Product: {product.title}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <div className="mb-3">
            <label htmlFor="upiId" className="form-label">
              Enter UPI ID
            </label>
            <input type="text" className="form-control" id="upiId" />
          </div>
          <button className="btn btn-success w-100" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
