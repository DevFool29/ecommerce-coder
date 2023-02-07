import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../mock/FakeApi";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const[products, setProducts] = useState([]);
  const[filteredProducts, setFilteredProducts] = useState([]);
  const { brand } = useParams();

  useEffect(() => {
    getProducts.then(response => {
      console.log({response});
      setProducts(response);
    })
    .catch(error => console.log(error))
  }, [])

  useEffect(() =>{
    const filterProduct = products.filter(product => product.brand === brand)
    setFilteredProducts(filterProduct)
    
  }, [brand])
  
  return (
    <div className="total-list-container">
      <ItemList products={brand ? filteredProducts : products}/>
    </div>
  )
}

export default ItemListContainer