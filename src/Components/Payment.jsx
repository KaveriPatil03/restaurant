import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state } = useLocation();
  const { product, formData } = state;
  const navigate = useNavigate();

  const handlePayment = () => {
    console.log('Payment made for product:', product, 'User data:', formData);
    navigate('/order-success')
  };

  return (
    <div className="container">
      <h1>Payment Page</h1>
      <h3>Product: {product.title}</h3>
      <p>Price: ${product.price}</p>
      <div className="mb-3">
        <label htmlFor="upiId" className="form-label">
          Enter UPI ID
        </label>
        <input type="text" className="form-control" id="upiId" />
      </div>
      <button className="btn btn-success" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
