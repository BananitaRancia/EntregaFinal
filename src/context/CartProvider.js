import { createContext , useState } from "react";
export const cartContext = createContext([]);


const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);
    const isInCart = (id) =>{
        return cart.some((producto) => producto.id === id);
    };
    
    const addToCart = (producto, quantity) =>{
        if(isInCart(producto.id)) {
            alert('El juego ya se encuentra en el carrito')
        }
        else{
            setCart ([...cart, {...producto, quantity }]);
        }
    };

        


const clearCart = () => {setCart([]); };

// const removeProduct = (id) => cart.filter(producto => producto.id !== id);

return(
    <cartContext.Provider value= {{cart, addToCart, clearCart  }}>
        {children}
    </cartContext.Provider>
)
};

export default CartProvider;