import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductoPorCategoria } from '../../asyncmock.js';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {idCategoria} = useParams()

  useEffect(()=>{

    const funcionProductos = idCategoria ? getProductoPorCategoria : getProducts;

    funcionProductos(idCategoria)
    .then(res => setProducts(res))
    .catch(error => console.log (error))
    
  }, [idCategoria]);

  return (
    <div className='vinos text-center'>
    <h2>Wines</h2>
    <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
