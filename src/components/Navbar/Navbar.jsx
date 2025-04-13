import React, { useEffect, useState } from 'react'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import NavIcons from '../NavIcons/NavIcons'
// import { CartProvider } from '../../context/CartContext'

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // نازل لتحت
        setShow(false);
      } else {
        // طالع لفوق
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
   
   <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
<Menu/>
<Logo/>
<NavIcons/>
   </nav>
  
  )
}
