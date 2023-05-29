import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({producto, cantidad}) => {
    const { deleteProd } = useContext(CartContext)

  return (
    <div>
      <h4> {producto.name} </h4>
      <img src={producto.img} alt={producto.name} />
      <p> Quantity : {cantidad} </p>
      <p> Price: $ {producto.price * cantidad} </p>
      <button onClick={()=> deleteProd(producto.id)}> Delete Prod </button>
    </div>
  )
}

export default CartItem
