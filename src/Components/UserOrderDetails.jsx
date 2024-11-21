import React from 'react'

const UserOrderDetails = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="py-4 text-center">
        <h2>Order Details</h2>
        <hr />
      </div>
    <div className='container pb-4'>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Ordred Item</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>12345678</td>
            <td>Pizza</td>
            <td>200</td>
            <td>Pending</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>12345678</td>
            <td>Pizza</td>
            <td>200</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>12345678</td>
            <td>Pizza</td>
            <td>200</td>
            <td>Delivered</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
  </>
  )
}

export default UserOrderDetails