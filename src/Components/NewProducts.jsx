import React, { useEffect, useState } from 'react';
import Data from '../Data';
import { useSnackbar } from 'react-simple-snackbar';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

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
}

const formData = {
  name: '',
  email: '',
  num: '',
  price: '',
  city: '',
  upiId: ''
}
const NewProducts = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderFormData, setOrderFormData] = useState(formData);
  const [products, setProducts] = useState([]);
  const [openSnackbar] = useSnackbar(options);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    // setLoading(true);
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
      console.log(response)  
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  },[])

  const handleFormData = (e) => {
    e.preventDefault();
    // api
    console.log("Form Data Submitted:", orderFormData);
    // openSnackbar('Order placed successfully!');
    setOrderFormData(formData);
    navigate('/payment', { state: { product: selectedItem, formData: orderFormData } });
  }

  const handleOrderClick = (item) => {
    setSelectedItem(item); 
    // setIsModelOpen(true);
  };

  // const handleConfirmOrder = () => {
  //   navigate('/payment', { state: { product: selectedItem, formData: orderFormData } });
  // };

  console.log(selectedItem)
  const cardItem = (item) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 products-card" key={item.id}>
        <div className="card my-3" style={{ width: "22rem" }}>
          <div className="card-img-top item-product">
            {/* Add an image placeholder or use item.image if available */}
          </div>
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
                  <input type="email"
                    class="form-control"
                    id="exampleInputName"
                    name='name'
                    value={formData.name}
                    onChange={(e) => setOrderFormData({ ...orderFormData, name: e.target.value })} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail" class="form-label">Email address</label>
                  <input type="email"
                    class="form-control"
                    id="exampleInputEmail"
                    name='email'
                    value={formData.email}
                    onChange={(e) => setOrderFormData({ ...orderFormData, email: e.target.value })} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputNum" class="form-label">Mobile No.</label>
                  <input type="email"
                    class="form-control"
                    id="exampleInputNum"
                    name='num'
                    value={formData.num}
                    onChange={(e) => setOrderFormData({ ...orderFormData, num: e.target.value })} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputNum" class="form-label">City</label>
                  <input type="email"
                    class="form-control"
                    id="exampleInputNum"
                    name='num'
                    value={formData.city}
                    onChange={(e) => setOrderFormData({ ...orderFormData, city: e.target.value })} />
                </div>
                {/* <div class="mb-3">
                  <label for="exampleInputNum" class="form-label">UPI ID</label>
                  <input type="email"
                    class="form-control"
                    id="exampleInputNum"
                    name='num'
                    value={formData.upiId}
                    onChange={(e) => setOrderFormData({ ...orderFormData, upiId: e.target.value })} />
                </div> */}

                {selectedItem ? (
                  <>
                    <div class="mb-3">
                      <label for="examplePrice" class="form-label ">Price</label>
                      <input type="email" value={selectedItem.price} class="form-control readOnly disabled" id="exampleInputPrice" />
                    </div>
                    {/* <p><strong>Price:</strong> ${selectedItem.price}</p>
                  <p><strong>Description:</strong> {selectedItem.desc}</p> */}
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
