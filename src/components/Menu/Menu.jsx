import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {

  return (
    <div className='navbar_menu'>
      <ul>
        <li>
        <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li className='shops'>
        <NavLink>SHOPS</NavLink>
        </li>
        <li>
        <NavLink>PRODUCTS</NavLink>
        </li>
        <li>
        <NavLink>BLOG</NavLink>
        </li>
        <li>
        <NavLink>PAGES</NavLink>
        </li>
      </ul>
    </div>
  )
}
