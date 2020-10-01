import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './containers/NavBar';
import Home from './containers/Home';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './containers/Cart';
import Checkout from './Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    
    <BrowserRouter>
      <CartProvider>
        <header>
          <NavBar/>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/category/:id">
              <Home/>
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route exact path="/checkout">
              <Checkout/>
            </Route>
          </Switch>
        </main>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;   