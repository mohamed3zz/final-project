import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ListMenu from '../ListMenu/ListMenu'

export default function LayOut() {
  return (
    <Fragment>
        <Navbar/>
        {/* <ListMenu/> */}
        <Outlet/>
        <Footer/>
    </Fragment>
  )
}
