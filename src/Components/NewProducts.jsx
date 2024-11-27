import React, { useEffect, useState } from "react";
import Data from "../Data";
import { useSnackbar } from "react-simple-snackbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const options = {
  position: "bottom-right",
  style: {
    backgroundColor: "green",
    border: "1px solid green",
    borderRadius: "2px",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  },
  closeStyle: {
    color: "lightcoral",
    fontSize: "16px",
  },
};

const formData = {
  customerName: "",
  address: "",
  city: "",
  email: "",
  phone: "",
  UPI: "",
  productId: "",
};

const NewProducts = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderFormData, setOrderFormData] = useState(formData);
  const [products, setProducts] = useState([]);
  const [openSnackbar] = useSnackbar(options);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://8082/products');
        console.log(response)
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [])

  const handleFormData = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (
      !orderFormData.customerName ||
      !orderFormData.email ||
      !orderFormData.phone ||
      !orderFormData.address ||
      !orderFormData.city
    ) {
      alert("Please fill in all the fields.");
      return;
    }
    console.log('orderFormData', orderFormData);
    try {
      const response = await axios.post(
        "http://localhost:8080/orders",
        orderFormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );

      // Handle the response message
      if (response.data === "Move to Payment") {
        navigate("/payment", {
          state: { product: selectedItem, formData: orderFormData },
        });
      } else if (response.data === "Out of Stock") {
        navigate("/out-of-stock");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      openSnackbar("Failed to place the order. Please try again.");
    }

    setOrderFormData({
      customerName: "",
      address: "",
      city: "",
      email: "",
      phone: "",
      UPI: "",
      productId: ""
    })
  };

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setOrderFormData((prev) => ({
      ...prev,
      productId: item.id,
    }));
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
        <div className="row">{products.map(cardItem)}</div>
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
                <div className="mb-3">
                  <input
                    type="hidden"
                    className="form-control"
                    id="exampleInputCity"
                    name="productId"
                    value={selectedItem?.id}
                    readOnly
                  />
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    name="customerName"
                    value={orderFormData.customerName}
                    onChange={(e) =>
                      setOrderFormData({
                        ...orderFormData,
                        customerName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    name="email"
                    value={orderFormData.email}
                    onChange={(e) =>
                      setOrderFormData({
                        ...orderFormData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputNum" className="form-label">
                    Mobile No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputNum"
                    name="phone"
                    value={orderFormData.phone}
                    onChange={(e) =>
                      setOrderFormData({
                        ...orderFormData,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputCity" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCity"
                    name="address"
                    value={orderFormData.address}
                    onChange={(e) =>
                      setOrderFormData({
                        ...orderFormData,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCity"
                    name="city"
                    value={orderFormData.city}
                    onChange={(e) =>
                      setOrderFormData({
                        ...orderFormData,
                        city: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Price Information */}
                {selectedItem ? (
                  <>
                    <div className="mb-3">
                      <label htmlFor="examplePrice" className="form-label">
                        Price
                      </label>
                      <input
                        type="text"
                        value={selectedItem?.price}
                        className="form-control readOnly disabled"
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
              <button
                type="button"
                onClick={handleFormData}
                className="btn btn-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
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
