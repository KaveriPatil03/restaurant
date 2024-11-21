import React from "react";

const OrderDetails = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container text-center">
          <h2>Order Details</h2>
          <hr />
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Ordred Item</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>mark@gmail.com</td>
              <td>12345678</td>
              <td>Pizza</td>
              <td>200</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>mark@gmail.com</td>
              <td>12345678</td>
              <td>Pizza</td>
              <td>200</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>mark@gmail.com</td>
              <td>12345678</td>
              <td>Pizza</td>
              <td>200</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderDetails;
