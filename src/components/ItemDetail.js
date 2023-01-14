import './styles/itemdetail.css'
import ItemCount from "./ItemCount";

const ItemDetail = ({ productDetail }) => {
  return (
    <li className="li-item">
      
        <h3 className="title-detail">{productDetail.title}</h3>
        <div className="container-detail">
          <img className="img-item" src={productDetail.pictureUrl} />
          <div className="container-detail-no-img">
            <p>{productDetail.description}</p>
            <div>
              <span className="price">{`Price: ${productDetail.price} USD`}</span>
              <ItemCount />
            </div>
            <button className="addToCart">Add to Cart</button>
          </div>
        </div>
  
    </li>
  );
};

export default ItemDetail;
