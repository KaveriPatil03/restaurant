import React from 'react';
import slider1 from '../img/slider1.webp';
import NewProducts from './NewProducts';

const Home = () => {
    return (
        <>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active position-relative">
                            {/* Background Image */}
                            <img 
                                src={slider1} 
                                alt="Delicious Food" 
                                className="d-block w-100" 
                                style={{
                                    height: "500px", 
                                    objectFit: "cover", 
                                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                                }} 
                            />
                            {/* Overlay Content */}
                            <div 
                                className="carousel-caption d-md-block position-absolute top-50 start-45 ps-5 translate-middle"
                            >
                                <h2 className="text-white fw-bold">
                                    Experience Exquisite Cuisine
                                </h2>
                                <p className="text-white">
                                    Discover the finest flavors crafted by our expert chefs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <NewProducts />
            </div>
        </>
    );
};

export default Home;
