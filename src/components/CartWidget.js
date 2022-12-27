import { AiOutlineShoppingCart } from 'react-icons/ai';
import './styles/cartwidget.css'

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <AiOutlineShoppingCart className="shopping-cart" />
        <div className="counter">
            10
        </div>
    </div>
  )
}

export default CartWidget