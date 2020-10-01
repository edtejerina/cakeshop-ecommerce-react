import React from 'react';
import {Link} from 'react-router-dom';

function Logo({title}){
    return(
        <Link to={'/'}><h1 className="logo">Cake Shop</h1></Link>
    )
}

export default Logo;