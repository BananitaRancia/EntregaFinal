import './ItemDetail.css';
import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productSelected }) => {

  const [count, setCount] = useState(0);
  const {cart, addToCart} = useContext (cartContext);

  return (
    <div className='ItemDetail'>
      
      <div className='CajaIzquierda'>  
        <img className="img" alt={productSelected.title} src={`/images/${productSelected.imagen}.jpeg`} />
      </div>  
      
      <div className='CajaDerecha'>
        <h1>{productSelected.title}</h1>
        <h1>{productSelected.category}</h1>
        <h1>{productSelected.price}</h1>
        <ItemCount setCount={setCount} />
      <button onClick={() => addToCart (productSelected, count)}>Agregar al carrito</button>
      <h3> Cantidad de Juegos en el Carrito: {cart && cart.length} </h3>
      </div>
    </div>
  )
}

export default ItemDetail;