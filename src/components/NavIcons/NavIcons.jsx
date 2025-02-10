import React from 'react'
import { CiHeart, CiUser } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { IoBagOutline } from 'react-icons/io5'

export default function NavIcons() {
  return (
    <div className='navbar_icons'>
      <IoIosSearch/>
      <CiUser/>
      <CiHeart/>
      <IoBagOutline/>
    </div>
  )
}
