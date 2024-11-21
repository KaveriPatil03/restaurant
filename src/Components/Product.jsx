import React from 'react'
import Data from '../Data';
import { Link } from 'react-router-dom';
import Home from './Home';
import NewProducts from './NewProducts';

const Product = () => {
    
  return (
    <>
     {/* Breadcrumb start */}
     <section className="header-section">
                <div className="center">
                    <h1 className="font">PRODUCTS</h1>

                    <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">PRODUCTS</li>
                        </ol>
                    </nav>
                </div>


            </section>
            {/* Breadcrumb Ends  */}
      <NewProducts />

    </>
  )
  }

export default Product;