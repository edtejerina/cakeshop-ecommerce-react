import React from 'react';
import {Link} from 'react-router-dom';

function Menu(){
    return (
        <nav className="navigation">
            <Link to={'/'}>Home</Link>
            <a href="#">Productos</a>
            <a href="#">Preguntas</a>
            <a href="#">Sobre Nosotros</a>
        </nav>
    )
}

export default Menu;