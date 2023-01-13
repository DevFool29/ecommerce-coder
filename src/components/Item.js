import ItemCount from "./ItemCount"
import './styles/item.css'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

  return (
    <li className="li-item">
        <Link to="/item">
          <h3 className="title">{product.title}</h3>
        </Link>
        <img className="img-item" src={product.pictureUrl}/>
        <div className="price-counter">
          <span className="price">{`Price: ${product.price} USD`}</span>
          <ItemCount />
        </div>
        <button className="addToCart">
          Add to Cart
        </button>
    </li>
  )
}

export default Item