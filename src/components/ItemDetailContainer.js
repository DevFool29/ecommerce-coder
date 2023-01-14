import { useState, useEffect } from "react";
import { getProducts } from "../mock/FakeApi";
import ItemDetail from "./ItemDetail";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    getProducts
      .then((response) => {
        const [product] = response.filter((item) => item.id === parseInt(idItem));
        if (product) {
          setProductDetail(product);
        }
      })
      .catch((error) => console.log(error));
  }, [idItem]);

  if (productDetail?.id) {
    return (
      <div>
        <ItemDetail productDetail={productDetail} />
      </div>
    );
  }

  return <ErrorPage />;
};

export default ItemDetailContainer;
