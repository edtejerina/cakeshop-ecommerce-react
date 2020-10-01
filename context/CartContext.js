import React, { useState, useContext, createContext } from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ value = [], children}) {
  const [cart, setCart] = useState(value);

  // TODO - Check if user exists
  function addProductToCart(product) {
    const productExists = cart.find(p => p.id == product.id);
    if(productExists){
      productExists.quantity = productExists.quantity + product.quantity;
      const oldProducts = cart.filter(p => p.id !== product.id);
      const products = [...oldProducts, productExists];
      setCart(products);
    }else{
      const products = [...cart, product];
      setCart(products);
    }
  };
  //checkeamos si el el producto ya existe en el carrito
  //si existe, lo indentificamos y le cambiamos el quantity
  //si no existe, agregamos el producto al carrito

  function removeProductFromCart(product){
    const products = cart.filter(p => p.id !== product.id);
    setCart(products);
  }

  function getCartTotal(cart) {
    let total = 0;
    cart.map(i => total += i.quantity);
    return total;
  }

  function getCartTotalPrice(cart) {
    let total = 0;
    cart.map(i => total += i.price * i.quantity);
    return total;
  }

  
  return(
    <CartContext.Provider value={{cart, quantity: getCartTotal(cart), totalPrice: getCartTotalPrice(cart), addProductToCart, removeProductFromCart}}>
        { children }
    </CartContext.Provider>
  )
};
