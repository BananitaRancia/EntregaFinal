import { useState, useEffect } from 'react'
import { getProducts } from '../../data/data';
import ItemList  from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const  {categoryName} = useParams();
  console.log(categoryName)

  useEffect(() => {
  getProducts (categoryName)
  
  .then(respuesta => {
      setItems(respuesta);
  });
  }, [categoryName]);
    return (
  <div className='principal'>
       <ItemList products={items}></ItemList>
  </div>
      
    );
  }

export default ItemListContainer



