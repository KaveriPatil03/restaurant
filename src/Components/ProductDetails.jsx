import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index';

const ProductDetails = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");

    const proId = useParams();
    const proDetail = Data.filter(x => x.id == proId.id);
    const product = proDetail[0];
    console.log(product); 

    // we need to store useDispatch in a variable
    const dispatch = useDispatch();

    const handleCart = (prod) => {
        if(cartBtn === "Add to Cart"){
            dispatch(addItem(prod));
            setCartBtn("Remove from Cart");
        }else{
            dispatch(delItem(prod));
            setCartBtn("Add to Cart");
        }
    }

  return (
    <>
        <div className="container py-5 my-4">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title} height={'400px'}/>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className='display-5 fw-bold'>{product.title}</h1>
                    <hr />
                    <h2 className='my-4'>{product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                    <button onClick={() => handleCart(product)} className='btn btn-outline-dark my-5'>{cartBtn}</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetails