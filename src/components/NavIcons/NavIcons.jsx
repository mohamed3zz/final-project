import React from 'react'
import { CiHeart, CiUser } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { IoBagOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

export default function NavIcons() {
  return (
    <div className='navbar_icons'>
      <IoIosSearch/>
      <NavLink to="/login"><CiUser/></NavLink>
      
      <CiHeart/>
      <IoBagOutline/>
    </div>
  )
}
