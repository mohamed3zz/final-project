import React, { useEffect , useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa6";
// import { useCart } from '../../context/CartContext';

export default function Menu() {
  const [isMoving, setIsMoving] = useState(false);

  const handleClick = () => {
    setIsMoving(true);
    setTimeout(() => {
      setIsMoving(false);
    }, 2000);
  };
  useEffect(() => {
    const pages = document.querySelector(".pages");
    const pagesmenu = document.querySelector(".pagesmenu");
    const mobilemenu = document.querySelector(".mobilemenu");
    const desktopmenu = document.querySelector(".desktopmenu");
 
    pages.addEventListener("mouseover", () => {
      pagesmenu.classList.add("activepagesmenu");
    });
    pages.addEventListener("mouseout", () => {
      pagesmenu.classList.remove("activepagesmenu");
    });
    pagesmenu.addEventListener("mouseover", () => {
      pagesmenu.classList.add("activepagesmenu");
    })
    pagesmenu.addEventListener("mouseout", () => {
      pagesmenu.classList.remove("activepagesmenu");
    })
 
    mobilemenu.addEventListener("click", () => {
      desktopmenu.classList.toggle("activemobilemenu");
    });
    

   
    },[])
    useEffect(() => {
      const pages = document.querySelector(".pages");
      const pagesmenumobile = document.querySelector(".pagesmenumobile");
      pages.addEventListener("click", () => {
        pagesmenumobile.classList.toggle("activepagesmenumobile");
      });

      },[])
     

  

  return (
    <div className='navbar_menu'>
      <ul style={{display: "flex", justifyContent: "space-between", alignItems: "center" , width: "100%", position: "relative"}}>
        <li className='mobilemenu' style={{fontSize: "1.2em"}}>
        <IoMdMenu />
        </li>
        <li>
        <NavLink to={"/"}>HOME</NavLink>
        </li>
        <div className='desktopmenu' >
        <li onClick={()=> document.querySelector(".desktopmenu").classList.remove("activemobilemenu")}>
        <NavLink to={"/productspage"}>PRODUCTS</NavLink>
        </li>
        <li onClick={()=> document.querySelector(".desktopmenu").classList.remove("activemobilemenu")}>
        <NavLink>BLOG</NavLink>
        </li>
        <li className='pages'>
        <NavLink>PAGES</NavLink>
        </li>
        <li>
        <FaMotorcycle 
        className='motorcycle-icon'
          // className={`motorcycle-icon ${isMoving ? "move" : ""}`}
          // onClick={handleClick}
        />
        </li>
        </div>
        
      </ul>
      <div className='pagesmenu'>
        <ul>
          <li><NavLink to="/aboutus">AboutUs</NavLink></li>
          <li><NavLink to="/contactus">ContactUs</NavLink></li>
          <li><NavLink to="/faqs">FAQS</NavLink></li>
        </ul>

      </div>
      <div className='pagesmenumobile '>
        <ul>
          <li onClick={() => {document.querySelector(".pagesmenumobile").classList.remove("activepagesmenumobile");
          document.querySelector(".desktopmenu").classList.remove("activemobilemenu");
          }}><NavLink to="/aboutus">AboutUs</NavLink></li>
          <li onClick={() => {document.querySelector(".pagesmenumobile").classList.remove("activepagesmenumobile");
          document.querySelector(".desktopmenu").classList.remove("activemobilemenu");
          }} ><NavLink to="/contactus">ContactUs</NavLink></li>
          <li onClick={() => {document.querySelector(".pagesmenumobile").classList.remove("activepagesmenumobile");
          document.querySelector(".desktopmenu").classList.remove("activemobilemenu");
          }} ><NavLink to="/faqs">FAQS</NavLink></li>
        </ul>

      </div>
      
    </div>
  )
}
