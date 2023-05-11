import './ItemDetail.css'
import Hooks from '../Hooks/Hooks'

const ItemDetail = ({img, name, desc}) => {
  return (
    <div className="contenedorItem container align-items-center">
      <h2>{name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis aliquam aperiam, voluptate voluptas voluptates expedita nostrum mollitia quia deleniti possimus ipsam vitae illo odio dicta. Magnam quam perferendis tempore.</p>
      <img src={img} alt={name} />
      <h3>${desc}</h3>
      <Hooks />
    </div>
  )
}

export default ItemDetail
