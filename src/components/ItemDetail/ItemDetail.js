import './ItemDetail.css';
import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productSelected }) => {

  const [count, setCount] = useState(1);
  const {cart, addToCart} = useContext (cartContext);

  return (
    <div className='ItemDetail'>
        <h1>{productSelected.id}</h1>
        <h1>{productSelected.title}</h1>
        <h1>{productSelected.category}</h1>
        <h1>{productSelected.price}</h1>
        <ItemCount setCount={setCount} />
      <button onClick={() => addToCart (productSelected, count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail