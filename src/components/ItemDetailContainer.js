import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ErrorPage from './ErrorPage';
import { ScaleLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loadingDetail, setLoadingDetail] = useState(true);
  const [error, setError] = useState(false)
  const { idItem } = useParams();


  const getProduct = () => {

    const db = getFirestore();
    const querySnapshot = doc(db, "products", idItem);

    getDoc(querySnapshot)
    .then(response => {
      
      if(response.data()){
        setProductDetail({id: response.id, ...response.data()})
        setLoadingDetail(false);
      }else{
        console.log("El id no fue encontrado")
        setLoadingDetail(false);
        setError(true)
      }
      
    }).catch(error => console.log(error));

    
  }

  useEffect(() => {
    getProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loadingDetail){
    return <div style={{display: "flex", justifyContent: "center", paddingTop:"250px"}}> 
      <ScaleLoader color="#d4e169"
      height={75}
      width={12}
      />
    </div> 
  }

  return (
    <div>
      {error ? <ErrorPage /> : <ItemDetail productDetail={productDetail} />}
    </div>
  );
  
};

export default ItemDetailContainer;
