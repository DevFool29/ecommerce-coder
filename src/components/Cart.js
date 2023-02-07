import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import './styles/cart.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { collection, addDoc, getFirestore, doc, updateDoc} from 'firebase/firestore';
import FormCart from "./FormCart";
import swal from "sweetalert";
import ButtonToItems from "./ButtonToItems";

const Cart = () => {

  const { cart, clear, removeItem } = useContext(CartContext);
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const [ order, setOrder ] = useState({});
  const db = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: '',
        phone: '',
        email: ''
      },
      items: cart.map((product) => {
        return {
          title: product.title,
          price: product.price,
          id: product.id
        }
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    })   
  }, [cart])
  
  const createOrder = (event) => {
    event.preventDefault();
    const querySnapshot = collection(db, 'orders');

    const currentOrder = {
      ...order,
      buyer: formValue,
    };

    addDoc(querySnapshot, currentOrder)
      .then(response => {
        console.log(response.id);
        updateStockProducts();
        swal({
          title: '¡Felicidades!',
          text: `Tu orgen fue generada con ID: ${response.id}`,
          icon: 'success',
          button: 'Aceptar'
        })
      })
      .catch(error => console.log(error))
  }

  const updateStockProducts = () =>{
    cart.forEach((product) => {
      const querySnapshot = doc(db, 'products', product.id);
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() =>{
          console.log("Actualizado el stock correctamente")
        })
        .catch(error => console.log(error))
    })
    clear();
  };

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  if(cart.length === 0){
    return (<>
        <h2 className="empty-cart"> No tienes productos en tu carrito </h2>
        <ButtonToItems />
      </>
    )
  }

  return (
    <>
      <h2 className="title-cart">Productos en tu carrito </h2>
      <div className="table-cart">
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <img alt={product.title} src={`/img/${product.pictureUrl}`} className="img-cart"/>
                    </td>
                    <td>{product.title}</td>
                    <td>{`${product.price} USD`}</td>
                    <td>{product.quantity}</td>
                    <td>{`${product.quantity * product.price} USD`}</td>
                    <td> <AiOutlineCloseCircle color="red" fontSize="25px" className="close-circle" onClick={() => removeItem(product.id)} /></td>
                  </tr>
              )})
            }
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total"><span className="total-text">Total</span>: {cart.reduce((acc, curr) => {
                    return acc + curr.quantity * curr.price
                  },0)}USD
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="clear-order" onClick={clear}>Vaciar Carrito</button>
      <FormCart formValue={formValue} handleInput={handleInput} createOrder={createOrder}/>
    </>
  )
}

export default Cart