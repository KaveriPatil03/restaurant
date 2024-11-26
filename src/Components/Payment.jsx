import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const { state } = useLocation();
  const { product, formData } = state;
  const navigate = useNavigate();

  const [upiId, setUpiId] = useState('');

  const handlePayment = async () => {
    if (!upiId) {
      console.error('UPI ID is required');
      alert('Please enter UPI ID');
      return; // Prevent the request if UPI ID is empty
    }

    console.log('Payment made for product:', product, 'User data:', formData);

    // Payload
    const payload = {
      productId: product.id,
      user: formData,
      upiId: upiId,
    };

    // Simulate a POST request with axios
    try {
      const response = await axios.post('/http://localhost:80/orders/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.message === "Order Success") {
        console.log('Payment processed successfully:', response.data);
        navigate('/order-success');
      } else if (response.data.message === "Order not successful") {
        console.error('Payment failed:', response.status);
        navigate('/despatch-failed');
      }
    } catch (error) {
      console.error('Error making payment:', error);
      // Handle network errors (e.g., show an alert or error message)
    }
  };

  const handleCancel = async () => {
    setUpiId(''); // Reset the UPI ID field

    // Payload for the cancel request
    const cancelPayload = {
      productId: product.id,
      productTitle: product.title,
      price: product.price,
      user: formData,
      upiId: '', // Send empty UPI ID
    };

    try {
      // Make a POST request when canceling with empty UPI ID
      const response = await axios.post('/http://localhost:80/orders/', cancelPayload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.message === "Order not successful") {
        console.log('Payment canceled successfully:', response.data);
        navigate('/order-failed');
      } else {
        console.error('Payment cancel failed:', response.status);
      }
    } catch (error) {
      console.error('Error making cancel payment request:', error);
    }

    navigate('/order-failed');
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
            <input
              type="text"
              className="form-control"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100 mb-2" onClick={handlePayment}>
            Pay Now
          </button>
          <button className="btn btn-secondary w-100" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
