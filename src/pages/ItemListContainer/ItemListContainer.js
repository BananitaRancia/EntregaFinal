import { useState, useEffect } from 'react'
// import { getProducts } from '../../data/data';
import ItemList  from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const  {categoryName} = useParams();
  
const getProducts = () => {
  const db = getFirestore();
  const querySnapshot = collection(db, "items");
  if(categoryName){
    const queryFilter = query(querySnapshot, where("categoryId", "==", categoryName))
    getDocs(queryFilter)
  .then((response) => {
    const data = response.docs.map((item) => {
      console.log(item.data());
      console.log(item.id);
      return {id: item.id, ...item.data()}
    });
    console.log(data);
    setItems(data);
  })
  .catch((error) => {
    console.log(error);
  });
    
}else{
  getDocs(querySnapshot)
  .then((response) => {
    const data = response.docs.map((item) => {
      console.log(item.data());
      console.log(item.id);
      return {id: item.id, ...item.data()}
    });
    console.log(data);
    setItems(data);
  })
  .catch((error) => {
    console.log(error);
  });
  }
  
};   


useEffect(() =>{
  getProducts();
}, [categoryName]);
  
    return (
  <div className='principal'>
       <ItemList products={items}></ItemList>
  </div>
      
    );
  }

export default ItemListContainer





