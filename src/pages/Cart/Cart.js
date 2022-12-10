import './Cart.css'
import { useContext, useState, useEffect } from "react"
import { cartContext } from "../../context/CartProvider"
import { collection, addDoc, getFirestore, doc , updateDoc } from "firebase/firestore";
import moment from 'moment';

const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const getTotalPrice = () => {
    setTotal(cart.reduce((acc, producto) => acc + producto.price * producto.quantity, 0))
  };

  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db, 'order');
    const neworder ={
      buyer:{
        name: formValues.name,
        phone: formValues.phone,
        email: formValues.email,
      },
      date: moment().format('DD/MM/YYYY'),
      items: cart,
      total: total,
    };
    addDoc(query, neworder)
    .then((response) => {alert (`Orden creada con el id ${response.id}`)
    return response;
    })
    .then((res) => {
      cart.forEach((producto) => {
        const query = doc(db, 'items', producto.id);
        updateDoc(query, {
        stock: producto.stock - producto.quantity,
        })
      })
      // const orderDoc = doc(db, 'items', res.id);
    })
    .catch ((error) => console.log(error));
    

  };

  useEffect (() => {
    getTotalPrice()
  }, [cart]);
  
  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name] : event.target.value,
    })
  };
  return (
    
    
    <div className="cartPrincipal"> 
      {cart.map((producto) => 
         (
            
        <div key={producto.id} className="cart" >
                    
          <div className="subCart">
          <img alt={producto.title} src={`/images/${producto.image}`} width={'300px'} />
          
            <h2>{producto.title}</h2>
            <h2>${producto.price}</h2>
            <h2>{producto.description}</h2>
            <h2>Cantidad: {producto.quantity}</h2>
           </div>
               
        </div>
      )

      )}
      
      
      
      <p className='formularioTitulo'>FORMULARIO DE COMPRA</p>

      <div className='formulario'>
      <input className='miniForm' name='name' type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange} />
      <input className='miniForm' name='phone' type="text" placeholder="Telefono" value={formValues.phone} onChange={handleInputChange} />
      <input className='miniForm' name='email' type="text" placeholder="Email" value={formValues.email} onChange={handleInputChange} />
      </div>
      
      <div className="totalCart">
      <h1>Total: {total} </h1>
      <button onClick={createOrder}>Crear Orden De Compra</button>
      </div>
    </div>
  )
}

export default Cart