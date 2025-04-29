import React , {useEffect} from 'react'
import { CiHeart, CiUser } from 'react-icons/ci'
import { IoBagOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

// import { useCart } from '../../context/CartContext'

export default function NavIcons() {

  const { totalItems } = useCart();
  return (
    <div className='navbar_icons'>
      <NavLink to="/profile"><CiUser/></NavLink>
      <NavLink to="/wishlist"><CiHeart/></NavLink>
      
      {/* <div ClassName="ShoppingCart"> */}
      <div className='ShoppingCart'>
        <NavLink to="/cart">
      <IoBagOutline ClassName="cart"/>
      </NavLink>
      {totalItems > 0 && <div className='number'>{totalItems}</div>}
      </div>
      {/* </div> */}
    </div>
  )
}
