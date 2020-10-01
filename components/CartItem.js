import React from 'react';
import { useCartContext } from '../context/CartContext';

function CartItem({ product }){
    const {removeProductFromCart} = useCartContext();
    
    return(
        <div className="product-cart">
            <div className="img-product img-product-cart">
                <img src={product.img_url} alt="product"/>
            </div>  
            <div>
                <h4>{ product.title }</h4>
                <span className="price">${ product.price }</span>
            </div>
            <div className="quantity quantity-cart">
                <input type="tel" className="value-quantity" value={ product.quantity } id="quantity-cant"/>
            </div>
            <button className="btn btn-remove" onClick={()=>removeProductFromCart(product)}>Eliminar</button>
        </div>
    )
}

export default CartItem;