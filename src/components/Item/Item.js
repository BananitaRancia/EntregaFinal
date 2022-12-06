import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({producto}) => {
  return (
  <Link className='link' to={`item/${producto.id}`}>  
    <div className='caja-juegos'>
        
      <div className="productos">
        <img className='imagen-juegos' alt={producto.title} src={`images/${producto.image}`} />
        <h2>{producto.title}</h2>
        <h3>Caterogíra: {producto.category}</h3>
        <h3>Precio: {producto.price}</h3>
        <h3>Stock: {producto.stock}</h3>
       
      </div>
  
    </div>
  </Link>    
  )
};

export default Item