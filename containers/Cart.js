import React from 'react';
import Title from '../components/Title';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart(){
    
    const { cart, totalPrice } = useCartContext();
    
    async function createOrder(){
        const order = { 
            buyer: { name: 'edgar', phone: '2233333', email: 'edtejerina.work@gmail.com' },
            items: [{ id: 1, title: 'Torta tres leches', price: 600, quantity: 1 }],
            total: 600
        }
    }
    return(
    <>
        <div className="cart container">
            <Title title="Mi carrito"/>
            <div className="products-cart">
                {cart.length > 0 ? cart.map(product => <CartItem product = {product}/>) : <h4 className="alert">😨 Upss! No tienes productos en el carrito <Link to={'/'}>ir a inicio</Link></h4>}
            </div>
        </div>
        <div className="total-price">
            <div className="container">
                <div className="total">
                    <h3>Total:</h3>
                    <span className="price">${ totalPrice }</span>
                </div>
                <Link to={'/checkout'}><button className="btn btn-comprar" onClick = {createOrder}>Finalizar Compra</button></Link>
                
            </div>
        </div>
    </>
    )
}



export default Cart;