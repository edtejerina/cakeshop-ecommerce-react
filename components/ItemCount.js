import React from 'react';

function ItemCount({count, sum, subtract, onAdd}){

  return(
    <>
      <div className="quantity view-product">
        <input type="submit" className="btn-quantity" value="-" onClick = { subtract }/>
        <input type="tel" className="value-quantity" value = { count }/>
        <input type="submit" className="btn-quantity" value="+" onClick = { sum }/>
      </div>
      <button className="btn btn-add-cart" onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}


export default ItemCount;