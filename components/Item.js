import React from 'react';
import { Link } from 'react-router-dom'

function Item({ product }){

    return(
        <div className="product-container">
            <div className="img-product">
                <img src={product.img_url} alt="product"/>
            </div>
            <div className="data-product">
                <h4>{product.title}</h4>
                <div className="price-cart">
                    <span className="price">${product.price}</span>
                </div>
            </div>
            <Link to={`/item/${product.id}`} className="btn btn-view-product">Ver Producto</Link>   
        </div> 
    )
}

export default Item;    