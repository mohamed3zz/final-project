import React, { useEffect , useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa6";

export default function Menu() {

  useEffect(() => {
    const pages = document.querySelector(".pages");
    const pagesmenu = document.querySelector(".pagesmenu");
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
})
useEffect(() => {
  const pages = document.querySelector(".pages");
  const mobilemenu = document.querySelector(".mobilemenu");
  const pagesmenumobile = document.querySelector(".pagesmenumobile");
  const desktopmenu = document.querySelector(".desktopmenu");
pages.addEventListener("click", () => {
  pagesmenumobile.classList.toggle("activepagesmenumobile");
})
   mobilemenu.addEventListener("click", () => {
      desktopmenu.classList.toggle("activemobilemenu");
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
        <NavLink to={"/blogs"}>BLOG</NavLink>
        </li>
        <li className='pages'>
        <NavLink>PAGES</NavLink>
        </li>
        <li>
        <FaMotorcycle 
        className='motorcycle-icon'
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
// import React, { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";
// import { FaMotorcycle } from "react-icons/fa6";

// export default function Menu() {
//   const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   const pagesMenuRef = useRef(null);

//   // إغلاق القائمة عند الضغط خارجها
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (pagesMenuRef.current && !pagesMenuRef.current.contains(event.target)) {
//         setIsPagesMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="navbar_menu">
//       <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative" }}>
//         {/* زر الموبايل */}
//         <li className="mobilemenu" style={{ fontSize: "1.2em" }} onClick={() => setIsMobileMenuOpen(prev => !prev)}>
//           <IoMdMenu />
//         </li>
//         <li>
//           <NavLink to={"/"}>HOME</NavLink>
//         </li>

//         <div className={`desktopmenu ${isMobileMenuOpen ? "activemobilemenu" : ""}`}>
//           <li>
//             <NavLink to={"/productspage"}>PRODUCTS</NavLink>
//           </li>
//           <li>
//             <NavLink>BLOG</NavLink>
//           </li>

//           {/* زر PAGES اللي عند الضغط عليه بتظهر القائمة الفرعية */}
//           <li className="pages" onClick={() => setIsPagesMenuOpen(prev => !prev)}>
//             <NavLink>PAGES</NavLink>

//             {/* القائمة الفرعية pagesmenu */}
//             {isPagesMenuOpen && (
//               <div ref={pagesMenuRef} className="pagesmenu">
//                 <ul>
//                   <li><NavLink to="/aboutus">About Us</NavLink></li>
//                   <li><NavLink to="/contactus">Contact Us</NavLink></li>
//                   <li><NavLink to="/faqs">FAQs</NavLink></li>
//                 </ul>
//               </div>
//             )}
//           </li>

//           <li>
//             <FaMotorcycle className="motorcycle-icon" />
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// }