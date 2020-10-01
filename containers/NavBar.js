import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import CartIcon from '../components/CartIcon';

function NavBar() {
  return (
    <div className="header grid-header container">
      <div></div>
      <Logo title='MiTiendaOnline'/>
      <div className="menu">
        <Menu/>
        <CartIcon/>
      </div>
    </div>
  );
}

export default NavBar;
