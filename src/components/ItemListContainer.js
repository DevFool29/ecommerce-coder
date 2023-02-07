import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore"
import { ScaleLoader } from "react-spinners";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { brand } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "products");

    if(brand){
      const newConfiguration = query(querySnapshot, where("brand", "==", brand));
      getDocs(newConfiguration).then(response => {
        const data = response.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        })
        console.log(data)
        setProducts(data);
        setLoading(false);
      }).catch(error => console.log(error))
    }else{
      getDocs(querySnapshot).then(response => {
        const data = response.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        })
        console.log(data)
        setProducts(data);
        setLoading(false);
      }).catch(error => console.log(error))
      };

    
  }

  useEffect(() => {
    getProducts();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand])
  
  if(loading){
    return <div style={{display: "flex", justifyContent: "center", paddingTop:"250px"}}> 
      <ScaleLoader color="#d4e169"
      height={75}
      width={12}
      />
    </div> 
  }

  return (
    <div className="total-list-container">
     {<ItemList products={products}/>}
    </div>
  )
}

export default ItemListContainer