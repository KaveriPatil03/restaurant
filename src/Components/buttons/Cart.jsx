import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {
  const state = useSelector((state) => state.addItems);
  return (
    <>
        <Link to="/cart" className="btn btn-outline-dark ms-2">
          <span className='fa fa-shopping-cart me-1'></span>Cart({state.length})
        </Link>
    </>
  )
}

export default Cart;