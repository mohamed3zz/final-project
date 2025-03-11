import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ListMenu from '../ListMenu/ListMenu'
import Loader from '../Loader/Loader'



export default function LayOut() {
  return (
    <Fragment>
      <Loader/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </Fragment>
  )
}
