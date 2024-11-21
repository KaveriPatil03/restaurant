import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/neck1.jpg';

const Contact = () => {
  return (
    <>
      {/* Breadcrumb start */}
      <section className="header-section">
                <div className="center">
                    <h1 className="font">CONTACT US</h1>

                    <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">CONTACT US</li>
                        </ol>
                    </nav>
                </div>


            </section>
            {/* Breadcrumb Ends  */}
      <div className="container-fluid mb-5 px-4">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6 pt-3 contact-img">
              <img src={img1} alt="contact" height={400} width={620}/>
            </div>
            <div className="col-md-6 mt-3">
              <form>
                <div className="mb-3">
                  <label for="exampleFullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleFullName" placeholder="John Smith" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-dark">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact