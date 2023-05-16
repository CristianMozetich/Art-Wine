import './ItemDetail.css'
import Hooks from '../Hooks/HooksCounter'

const ItemDetail = ({img, name, price, desc}) => {
  return (
    <div className="contenedorItem align-items-center d-flex m-5 p-5 flex-wrap">
      <h2 className='m-2'>{name}</h2>
      <h5 className='m-2'>{desc}</h5>
      <img src={img} alt={name} />
      <h2 className='m-4 p-4'>${price}</h2>
      <Hooks />
    </div>
  )
}

export default ItemDetail
