import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncmock.js';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts()
    .then(res=>{ setProducts(res) },[])
  })
  return (
    <ItemList products={products} />
  )
}

export default ItemListContainer
