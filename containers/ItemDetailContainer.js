import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import Loading from '../components/Loading';
import { getFirestore } from '../firebase';

function ItemDetailContainer(){
    const { id } = useParams();

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection('items');
      const item = itemCollection.doc(id);
      item.get().then(doc => {
        setItem({id: doc.id, ...doc.data()});
        setLoading(false);
      });
    }, [id]);
    return(
      <div class="container">
        { loading ? <Loading/> : <ItemDetail product={item}/> }        
      </div>
    )
}

export default ItemDetailContainer;