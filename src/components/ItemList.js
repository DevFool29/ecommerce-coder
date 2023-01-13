import Item from "./Item";
import './styles/itemlist.css';


const ItemList = ({ products }) => {
  return (
    <ul className="list-container">
      {products.map(product => (
          <Item key={product.id} product={product} />
        ))}
    </ul>
  )
}

export default ItemList