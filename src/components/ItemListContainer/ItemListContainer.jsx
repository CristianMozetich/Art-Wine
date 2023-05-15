import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductoPorCategoria } from '../../asyncmock.js';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {idCategotia} = useParams()

  useEffect(()=>{

    const funcionProductos = idCategotia ? getProductoPorCategoria : getProducts;

    funcionProductos(idCategotia)
    .then(res => setProducts(res))
    .catch(error => console.log (error))
    
  }, [idCategotia]);

  return (
    <ItemList products={products} />
  )
}

export default ItemListContainer
