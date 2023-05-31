import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    const totalCantidad = cart.reduce((total, producto)=> total + producto.cantidad, 0);
    console.log(totalCantidad)
    
    const cartImg = "../assets/img/cartwhite-removebg-preview.png"
    return (

        <Link to={'/cart'}>
            <img className='cartImg' src={cartImg} alt="cart" />
            {
                totalCantidad > 0 && <strong> {totalCantidad} </strong>
            }
        </Link>
  )
}

export default CartWidget
