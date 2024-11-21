import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/slider-2.jpg';


const About = () => {
  return (
    <>
     {/* Breadcrumb start */}
     <section className="header-section">
                <div className="center">
                    <h1 className="font">ABOUT US</h1>

                    <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">ABOUT US</li>
                        </ol>
                    </nav>
                </div>


            </section>
            {/* Breadcrumb Ends  */}

      <div className="container py-5 my-5">
        <div className="row about-us">
          <div className="col-md-6">
            <h1 className='text-dark fw-bold mb-4'>About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam possimus ratione
              earum ea? Eum nam numquam repellat aspernatur soluta doloribus possimus, quis consequatur,
              fuga aut mollitia unde consequuntur sunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam possimus ratione
              earum ea? Eum nam numquam repellat aspernatur soluta doloribus possimus, quis consequatur,
              fuga aut mollitia unde consequuntur sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam possimus ratione
              earum ea? Eum nam numquam repellat aspernatur soluta doloribus possimus, quis consequatur,
              fuga aut mollitia unde consequuntur sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam possimus ratione
              earum ea? Eum nam numquam repellat aspernatur soluta doloribus possimus, quis consequatur,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum ea aspernatur rerum.
            </p>
            <Link to="/contact" className="btn btn-outline-dark px-3">Contact Us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center about-img pt-5 mt-5">
            {/* <img src={img1} alt="img" height={'400px'} width={'400px'} /> */}
            <img src={img1} alt="iPhone" width={'580px'} height={'420px'}/>

          </div>
        </div>
      </div>
    </>
  )
}

export default About