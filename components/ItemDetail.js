import React, { useState, useEffect } from "react";
import ItemCount from '../components/ItemCount';
import { useCartContext } from "../context/CartContext";

function ItemDetail({ product }){

  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(product.stock);
  const { cart, addProductToCart } = useCartContext();

  useEffect(() => {
    const c = cart.find(p => p.id == product.id);
    console.log(c);
    if(c){
      setStock(product.stock - c.quantity);
      console.log(stock);
    }
  }, [cart]);

  function sum(){
    if(count < stock){
      setCount(count + 1);
    }
  }
  function subtract(){
    if(count > stock){
      setCount(count - 1);
    }
  }
  const onAdd = () => {
    addProductToCart({id: product.id, title: product.title, price: product.price, img_url: product.img_url, quantity: count});
  };
  return (
    <div className="product">
      <div className="product-flex">
        <div className="img-product">
          <img src={ product.img_url } alt="#"/>
        </div>  
        <div className="info-product" id={stock == 0 ? 'out-stock': ''}>
          <h4>{ product.title }</h4>
          <span className="price">${ product.price }</span>
          <button className="btn btn-comprar">Comprar</button>
          <ItemCount count = { count } sum = { sum } subtract = { subtract } onAdd = { onAdd }/>
        </div>
        </div>
        <div className="details">
          <h3>Detalles</h3>
          <p>{ product.description }</p>
        </div>
    </div>
  )
}

export default ItemDetail;