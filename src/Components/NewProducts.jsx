import React, { useEffect, useState } from 'react';
import Data from '../Data';
import { useSnackbar } from 'react-simple-snackbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const options = {
  position: 'bottom-right',
  style: {
    backgroundColor: 'green',
    border: '1px solid green',
    borderRadius: '2px',
    color: 'white',
    fontSize: '20px',
    textAlign: 'center',
  },
  closeStyle: {
    color: 'lightcoral',
    fontSize: '16px',
  },
};

const formData = {
  name: '',
  email: '',
  num: '',
  price: '',
  city: '',
  upiId: ''
};

const NewProducts = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderFormData, setOrderFormData] = useState(formData);
  const [products, setProducts] = useState([]);
  const [openSnackbar] = useSnackbar(options);
  const navigate = useNavigate();

  const handleFormData = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (!orderFormData.name || !orderFormData.email || !orderFormData.num || !orderFormData.city) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      // Simulate a GET request to check the stock for the selected item
      const stockResponse = await axios.get(`/api/check-stock/${selectedItem.id}`);

      // Check if the stock is available
      if (stockResponse.data.inStock) {
        // Simulate a POST request to a dummy API endpoint for the order
        const response = await axios.post('/api/dummy-order', orderFormData);

        // Reset the form data after submission
        setOrderFormData(formData);

        // Navigate to the payment page
        navigate('/payment', { state: { product: selectedItem, formData: orderFormData } });
      } else {
        // If stock is not available, navigate to the "Out of Stock" page
        navigate('/out-of-stock');
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting order:", error);
      openSnackbar('Failed to place the order. Please try again.');
    }
  };

  const handleOrderClick = (item) => {
    setSelectedItem(item);
  };

  const cardItem = (item) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 products-card" key={item.id}>
        <div className="card my-3" style={{ width: "22rem" }}>

          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">${item.price}</p>
            <p>{item.desc}</p>
            {/* Order button triggers the modal */}
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleOrderClick(item)}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Page Header */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Menu Items</h1>
            <hr />
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container">
        <div className="row">
          {Data.map(cardItem)}
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {selectedItem?.title || "Product Details"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName"
                    name="name"
                    value={orderFormData.name}  
                    onChange={(e) => setOrderFormData({ ...orderFormData, name: e.target.value })}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail" class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail"
                    name="email"
                    value={orderFormData.email}  
                    onChange={(e) => setOrderFormData({ ...orderFormData, email: e.target.value })}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputNum" class="form-label">Mobile No.</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputNum"
                    name="num"
                    value={orderFormData.num}  
                    onChange={(e) => setOrderFormData({ ...orderFormData, num: e.target.value })}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputCity" class="form-label">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputCity"
                    name="city"
                    value={orderFormData.city}  
                    onChange={(e) => setOrderFormData({ ...orderFormData, city: e.target.value })}
                  />
                </div>

                {/* Price Information */}
                {selectedItem ? (
                  <>
                    <div class="mb-3">
                      <label for="examplePrice" class="form-label">Price</label>
                      <input
                        type="text"
                        value={selectedItem.price}
                        class="form-control readOnly disabled"
                        id="exampleInputPrice"
                        readOnly
                      />
                    </div>
                  </>
                ) : (
                  <p>No product selected.</p>
                )}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={handleFormData} className="btn btn-dark">
                Place your order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
