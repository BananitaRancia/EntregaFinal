//import React from 'react'
import logo from '../../assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu_navbar_logo'>
        <img className='menu_navbar_img' src={logo} alt="cart widget"></img>
    </div>

  )
}

export default CartWidget