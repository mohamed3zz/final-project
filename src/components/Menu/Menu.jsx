import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  // const pages = document.querySelector(".pages");
  // const pagesmenu = document.querySelector(".pagesmenu");

  // pages.addEventListener("mouseover", () => {
  //   pagesmenu.classList.add("activepagesmenu");
  // });
  // pages.addEventListener("mouseout", () => {
  //   pagesmenu.classList.remove("activepagesmenu");
  // });
 
  

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
        <li className='pages' 
        onmouse={() => {
          pagesmenu.classList.add("activepagesmenu");
        }}
        onmouseleave={() => {
          pagesmenu.classList.remove("activepagesmenu");
        }
      }
        
        >
        <NavLink>PAGES</NavLink>
        </li>
      </ul>
      <div className='pagesmenu'>
        <ul>
          <li><NavLink to="/aboutus">AboutUs</NavLink></li>
          <li><NavLink to="/contactus">ContactUs</NavLink></li>
          <li><NavLink to="/faqs">FAQS</NavLink></li>
        </ul>

      </div>
    </div>
  )
}
