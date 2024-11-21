import React, { useState } from "react";

const AdminProductDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container text-center">
          <h2>Product Details</h2>
          <hr />
        </div>
        <button className="btn btn-primary" onClick={handleOpenModal}>
          Add Product
        </button>

        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Price</th>
              <th scope="col">Description</th>
              <th scope="col">Stock</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Product</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                    <label>Stock</label>
                    <input type="number" className="form-control" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminProductDetails;
