import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* <!-- FOOTER --> */}
      <section className="footer bg-dark text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
            <div className="col-lg-8 col-sm-12 pe-5">
                <h5>LOGO</h5>
                <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo cumque ipsa totam impedit saepe illum numquam debitis, animi voluptatem facilis reprehenderit consectetur distinctio, mollitia, provident aliquid culpa quo veniam sed!</p>
              </div>
              <div className="col-lg-2 col-sm-12 ps-5 ms-5">
                <h5>Useful Links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="/orders" className="nav-link p-0 text-muted">Track Order</Link></li>
                  {/* <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0 text-muted">Products</Link></li> */}
                  {/* <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About Us</Link></li> */}
                </ul>
              </div>           
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p>© 2024 All rights reserved.</p>
            </div>
          </footer>

        </div>
      </section>
      {/* <!-- END OF FOOTER --> */}
    </>
  )
}

export default Footer