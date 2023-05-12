import './ItemDetail.css'
import Hooks from '../Hooks/HooksCounter'

const ItemDetail = ({img, name, desc}) => {
  return (
    <div className="contenedorItem align-items-center d-flex m-4 p-4 flex-wrap">
      <h2 className='m-2'>{name}</h2>
      <p className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis aliquam aperiam, voluptate voluptas voluptates expedita nostrum mollitia.</p>
      <img src={img} alt={name} />
      <h2 className='m-4 p-4'>${desc}</h2>
      <Hooks />
    </div>
  )
}

export default ItemDetail
