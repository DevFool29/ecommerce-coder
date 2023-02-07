import { AiOutlineShoppingCart } from 'react-icons/ai';
import './styles/cartwidget.css'
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cartContext';

const CartWidget = () => {

  const { cart } = useContext(CartContext)
  const [ total, setTotal] = useState(0);

  useEffect(() => {
    const totalProducts = cart?.reduce((prev, curr) => {
      console.log(prev, curr)
      return prev + curr.quantity;
    }, 0)
    setTotal(totalProducts)
  }, [cart])

  return (
    <div className="cart-widget">
        <AiOutlineShoppingCart className="shopping-cart" />
        <div className="counter">
            {total}
        </div>
    </div>
  )
}

export default CartWidget