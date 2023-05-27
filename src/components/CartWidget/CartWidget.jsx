
import './CartWidget.css'

const CartWidget = () => {
    const cartImg = "../assets/img/cartwhite-removebg-preview.png"
    return (
        <div className='m-2 p-2 justify-content-center d-flex'>
            <img className='cart m-0 p-0' src={cartImg} alt="cart" />
            <p>10</p>
        </div>
  )
}

export default CartWidget
