import './styles/item.css'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <li className="li-item">
        <Link to={`/item/${product.id}`}>
          <h3 className="title">{product.title}</h3>
        </Link>
        <img className="img-item" src={`/img/${product.pictureUrl}`} alt={`img ${product.pictureUrl}`}/>
        <div className='price-stock'>
          <div className="price">
            <span>{`Precio: ${product.price} USD`}</span>
          </div>
          <div className="stock">
            <span>{`Stock: ${product.stock}`}</span>
          </div>
        </div>
    </li>
  )
}

export default Item