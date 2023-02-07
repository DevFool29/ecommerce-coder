import Item from "./Item";
import './styles/itemlist.css';


const ItemList = ({ products }) => {
  console.log(products);
  return (
    <ul className="list-container">
      {products.map(product => (
          <Item key={product.id} product={product} />
        ))}
    </ul>
  )
}

export default ItemList