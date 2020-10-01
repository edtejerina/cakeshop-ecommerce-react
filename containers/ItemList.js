import React, { useState, useEffect } from 'react';
import Item from '../components/Item';
import Title from '../components/Title';
import Loading from '../components/Loading';
import { getFirestore } from '../firebase/index';

function ItemList({ filter }){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const db = getFirestore();
    const itemCollection = db.collection('items');
  
    useEffect(() => {
      if(filter == undefined || filter == 'todos'){
        itemCollection.get().then(querySnaphot => {
          if(querySnaphot.size === 0){
            console.log('sin resultados');
          }
          setProducts(querySnaphot.docs.map(doc => {
            const data = {id: doc.id, ...doc.data()};
            return data;
          }));
          setLoading(false);
        });
      }else{
        const item = itemCollection.where('categoryId', '==', filter);
        item.get().then(querySnaphot => {
          if(querySnaphot.size === 0){
            console.log('sin resultados');
          }
          setProducts(querySnaphot.docs.map(doc => {
            const data = {id: doc.id, ...doc.data()};
            return data;
          }));
          setLoading(false);
        });
      }
      console.log('test');

      return ()=>{
        setLoading(true);
        setProducts([]);
      }
    }, [filter]);

    return(
      <div className="container">
        <Title title={filter ? `Resultado: ${filter}` : 'Nuestros Productos'}/>
        <div className="products-list">
          { loading && <Loading/> }
          { products.map(product => <Item product = {product} />) }
        </div>
      </div>
    )
    
}

export default ItemList;