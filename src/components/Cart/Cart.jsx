import './Cart.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalCantidad = cart.reduce((total, producto) => total + producto.cantidad, 0);

  const total = cart.reduce((total, producto)=> total + (producto.item.price * producto.cantidad), 0)



  if (totalCantidad === 0){
    return (
      <div className='carritoVacio m-3 text-center'>
        <h2>Cart is Empty</h2>
        <Link to='/'> HOME </Link>
      </div>
    )
  }


  return (
    <div className='carrito table m-2 d-flex row'>
      {
        cart.map((producto) => <CartItem key={producto.item.id} producto={producto.item}  {...producto} />)
      }
      <td><h3>Total Products: {totalCantidad} </h3></td>
      <td><h3>Total $ {total} </h3></td>
      <td><button className='btn btn-success m-2'>Pay</button></td>
      <td><button className='btn btn-warning m-2' onClick={()=>clearCart()}>Delete</button></td>
    </div>
  )
}

export default Cart
