import './styles/itemdetail.css'
import ItemCount from "./ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ productDetail }) => {

  const { addItem } = useContext(CartContext)
  const [counter, setCounter] = useState(0);
  const [messageStock, setMessageStock] = useState(false)
  
  
  return (
    <li className="li-item">
        <h3 className="title-detail">{productDetail.title}</h3>
        <div className="container-detail">
          <img className="img-item" src={`/img/${productDetail.pictureUrl}`} alt={`img ${productDetail.pictureUrl}`}/>
          <div className="container-detail-no-img">
            <p>{productDetail.description}</p>
            <div>
              <span className="price">{`Precio: ${productDetail.price} USD`}</span>
              <ItemCount 
                stockDetail={productDetail.stock} 
                counter={counter} 
                setCounter={setCounter}
                setMessageStock={setMessageStock}
              />
            </div>
            <span className="message-stock">
              {messageStock ? `Lo sentimos, la cantidad máxima de ítems disponibles es de ${productDetail.stock}` : ' '}
            </span>
            <button className="addToCart" onClick={() => addItem(productDetail, counter)}>Agregar al carrito</button>
          </div>
        </div>
        <Link to="/cart">
          <button className='goToCart'> Ir al carrito </button>
        </Link>
  
    </li>
  );
};

export default ItemDetail;
