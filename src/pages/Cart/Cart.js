import { useContext, useState, useEffect } from "react"
import { cartContext } from "../../context/CartProvider"
import { collection, addDoc, getFirestore } from "firebase/firestore";
import './Cart.css'

const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  const getTotalPrice = () => {
    setTotal(cart.reduce((acc, producto) => acc + producto.price * producto.quantity, 0))
  };

  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db, 'order');
    const neworder ={
      buyer:{
        name:'Juan',
        phone:'1111111111',
        email:'email@email.com',
      },
      items: cart,
      total: total,
    };
    addDoc(query, neworder)
    .then((response) => alert (`Orden creada con el id ${response.id}`))
    .catch ((error) => console.log(error));
    

  };

  useEffect (() => {
    getTotalPrice()
  }, [cart]);
  
  return (
    
    
    <div className="cartPrincipal"> 
      {cart.map((producto) => {
        return (
        
        
        <div key={producto.id} className="cart" >
                    
          <div className="subCart">
          <img alt={producto.title} src={`/images/${producto.image}`} width={'300px'} />
          
          <h2>{producto.title}</h2>
          <h2>{producto.price}</h2>
          <h2>{producto.description}</h2>
          <h2>{producto.quantity}</h2>
          </div>
        
        </div>
      )

      })}
      
      <div className="totalCart">
      <h1>Total: {total} </h1>
      <button onClick={createOrder}>Crear orden</button>
      </div>


    </div>
  )
}

export default Cart