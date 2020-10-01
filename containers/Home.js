import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Link, useParams } from 'react-router-dom';

function Home(){
    const [select, setSelect] = useState("tortas");
    const {id} = useParams();

    return(
        <>
            <div className="hero">
                <div className="filter-hero"></div>
                <h2>#QuedateEnCasa</h2>
            </div>
            <div className="searcher container">
                <div className="select">
                    <select name="category" id="category" onChange = {e => setSelect(e.target.value)}>
                        <option value="todos" selected>Todos</option>
                        <option value="tortas">Tortas</option>
                        <option value="cupcakes">Cupcakes</option>
                        <option value="tartas">Tartas</option>
                    </select>
                </div>
                <Link to={`/category/${select}`} className="btn-search">Buscar</Link> 
            </div>
            <ItemList filter = {id}/>
        </>
    )
}

export default Home;