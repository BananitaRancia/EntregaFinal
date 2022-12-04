import { createContext , useState } from "react";
export const cartContext = createContext([]);



const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addToCart = (prodcut, quantity) =>{
        setCart ([...cart, {prodcut, quantity}]);
    };
return(
    <cartContext.Provider value= {{cart, addToCart}}>
{children}
    </cartContext.Provider>
)
};

export default CartProvider;