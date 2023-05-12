import {useState, useEffect} from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [productos, setproductos] = useState(null);

    useEffect(()=>{
        getUnProducto(2)
        .then(res => setproductos(res))
    },[])
  return (
    <div className='container'>
      <ItemDetail {...productos} />
    </div>
  )
}

export default ItemDetailContainer
