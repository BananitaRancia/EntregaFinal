import './ItemDetail.css';
import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ productSelected }) => {

  const [count, setCount] = useState(1);
  const {cart, addToCart} = useContext (cartContext);
  console.log(cart)
  return (
    <div className='ItemDetail'>
      
      <div className='CajaIzquierda'>  
        <img className="img" alt={productSelected.title} src={`/images/${productSelected.image}`} />
      </div>  
      
      <div className='CajaDerecha'>
        <h1>{productSelected.title}</h1>
        <h1>{productSelected.category}</h1>
        <h1>{productSelected.price}</h1>
        <h2> Cantidad de Juegos en el Carrito: </h2>
        <h2>{count} </h2>
        
        <ItemCount setCount={setCount} />
        
        <button onClick={() => addToCart(productSelected, count)}>Agregar al carrito</button>

      </div>
    </div>
  )
}

export default ItemDetail;

