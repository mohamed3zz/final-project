import React from 'react'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import NavIcons from '../NavIcons/NavIcons'
// import { CartProvider } from '../../context/CartContext'

export default function Navbar() {
  return (
   
   <nav className='navbar'>
<Menu/>
<Logo/>
<NavIcons/>
   </nav>
  
  )
}
