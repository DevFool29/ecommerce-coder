import { useState } from "react";
import { CartContext } from "./cartContext";

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    let newCart;
    let product = cart.find(prod => prod.id === item.id);
    if(product){
      if(product.quantity + quantity > product.stock){
        alert('No hay stock disponible')
        return
      }else{
        product.quantity = product.quantity + quantity;
      }
      newCart = [...cart];
    }else{
      product = {
        id: item.id,
        title: item.title,
        brand: item.brand,
        description: item.description,
        price: item.price,
        pictureUrl: item.pictureUrl,
        stock: item.stock,
        quantity: quantity 
      };
      newCart = [...cart, product]
    }
    setCart(newCart);
  }

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id))
  };

  const clear = () => {
    //limpiamos el carrito
    setCart([]);
  };
  
  // No usaremos esta función
  // const isInCart = (id) => {
  //   return cart.some((item) => item.id === id)
  // };

  return (
    <CartContext.Provider value = {{cart, addItem, removeItem, clear}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider