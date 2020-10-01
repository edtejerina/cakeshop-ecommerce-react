import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../cartIcon.svg'
import { useCartContext } from '../context/CartContext';

function CartIcon(){
    const { quantity } = useCartContext();

    return(
        <Link to={'/cart'} className="cart-icon">
            <img src={cartIcon} alt="cart"/>
            <span>{ quantity }</span>
        </Link>
    )
}

export default CartIcon;