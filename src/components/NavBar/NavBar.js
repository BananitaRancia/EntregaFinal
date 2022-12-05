//import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import steam_verde from '../../assets/steam_verde.png'

const NavBar = () => {
    return (
        <div className='navbar-container'>
         
        <div>
            <img className='logo_header' alt={steam_verde} src = {steam_verde}/>
        </div>
        
        <h1 className='titulo-nav'>Steam Verde</h1> 
        
        <ul className='menu-items'>
            <li className='nav-items'>
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li className='nav-items'>
                <NavLink to="/category/Fps">Fps</NavLink>
            </li>
            <li className='nav-items'>
                <NavLink to="/category/Batleroyale">Batleroyale</NavLink>
            </li>
            <li className='nav-items'>
                <NavLink to="/category/Mundo Abierto">Mundo Abierto</NavLink>
            </li>
        </ul>

        
        <div>
            <Link to="/cart"><CartWidget></CartWidget></Link>
            </div>
        </div>
    )
}

export default NavBar