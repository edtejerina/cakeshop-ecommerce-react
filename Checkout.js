import React, { useState } from 'react';
import { useCartContext } from './context/CartContext';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from './firebase';



function Order({id}){
    return(
        <div className="order">
            <h3>Gracias por tu compra!</h3>
            <p>Tu numero de compra es: {id}</p>
            <a className="btn btn-comprar" href="/">Volver a inicio</a>
        </div>
    )
}
function Checkout(){

    const {cart, totalPrice} = useCartContext();
    const [buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState(null);

    const getData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    }

    function createOrder(){
        const db = getFirestore();
        const orders = db.collection('orders');
        const newOrder = {
            buyer: buyer,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice
        }
        orders.add(newOrder).then(({id}) => {
            setOrderId(id); //SUCCESSS
        }).catch(error => {
            console.log(error);
        })
    }


    return(
        <div className="container">
        { orderId ? <Order id={orderId}/> : 
            <div className="checkout-container">
                <div className="buyer">
                    <h3 className="title">Datos de contacto</h3>
                    <form className="form-buyer">
                        <div className="form-input">
                            <label for="name">Nombre</label>
                            <input type="text" id="name" name="name" required onChange={getData}/>
                        </div>
                        <div className="form-input">
                            <label for="tel">Telefono</label>
                            <input type="tel" id="tel" name="phone" required onChange={getData}/>
                        </div>
                        <div className="form-input">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required onChange={getData}/>
                        </div>
                    </form>
                </div>
                
                <div className="summary-container">
                    <h3 className="title">Resumen de compra</h3>
                    <div className="summary">
                    {cart.map(item => (
                        <div className="item-summary">
                            <h3>{item.title}</h3>
                            <span>{item.quantity}</span>
                        </div>
                    ))}
                    <button className="btn btn-comprar" onClick={createOrder}>Finalizar compra</button>
                    </div>
                    <section class="spikes"></section>
                </div>
            </div>
        }
        </div>
    )
}

export default Checkout;