
import './CartWidget.css'

const CartWidget = () => {
    const cartImg = "./assets/img/cart.png"
    return (
        <div className='d-flex'>
            <img className='cart m-2' src={cartImg} alt="cart" />
            <p>10</p>
        </div>
  )
}

export default CartWidget
