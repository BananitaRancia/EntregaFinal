import { useState, useEffect } from 'react'
import {data} from '../../data/data'
import ItemList  from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

// const ItemListContainer = () => {
//   const [productList, setProductList] = useState([]);
//   const {parametros} = useParams ();

//   const getProducts = new Promise ((res, rej)=> {
//     setTimeout(()=>{
//       res(data)
//     },3000)

//   })
  
//   useEffect(()=>{
//     getProducts.then(respuesta => {
//       setProductList(respuesta)
//     });
//     setTimeout(() => {
//     },4000);
//   },[productList]);


//   return <div className='principal'> 
//     <ItemList productList={productList}></ItemList> 
//   </div>
// };

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const  {categoryName} = useParams();
  console.log(categoryName)

  const getProducts = new Promise ((res, rej) => {
    setTimeout (() => {
      if (categoryName) {
        const filteredData = data.filter((producto) => {
          return producto.category === categoryName
        });
        res(filteredData);
      } else {
      res(data);
    }
    }, 1200);
  })
  useEffect (() => {
    getProducts
    .then((res) => setItems(res))
    .catch((error) => console.log(error));
  }, [categoryName]);
  return (
     <div className='principal'>
       <ItemList products={items}></ItemList>
     </div>
  )
}

export default ItemListContainer