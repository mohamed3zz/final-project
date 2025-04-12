import React, { Fragment, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import HomePage from './pages/HomePage/HomePage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './pages/Register/Login'
import SignUp from './pages/Register/SignUp'
import AboutUsPage from './pages/AboutUs/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'
import Loader from './components/Loader/Loader'
import FaqsPage from './pages/FaqsPage/FaqsPage'
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage'
import { CartProvider } from './context/CartContext'
import WishlistPage from './pages/WishlistPage/WishlistPage'
import { WishlistProvider } from './context/WishlistContext'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import { Toaster } from 'react-hot-toast'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { AuthProvider } from './context/AuthContext'
import BlogsPage from './pages/BlogsPage/BlogsPage'



export default function App() {
  const queryClient = new QueryClient()
  defaultoptions:{
    queries: { refetchOnWindowFocus: false }
  }
  const Routes = createBrowserRouter([
    {path: "/", element: <LayOut/>, children: [
      {index: true, element: <HomePage/>},
      {path:"/:id", element: <SingleProductPage/>},
      {path: "*", element: <div>404</div>},
      {path: "/login", element: <Login/>},
      {path: "/SignUp", element: <SignUp/>},
      {path: "/aboutus", element: <AboutUsPage/>},
      {path: "/contactus", element: <ContactUsPage/>},
      {path: "/faqs" , element: <FaqsPage/>},
      {path: "/blogs" , element: <BlogsPage/>},
      {path: "/cart" , element: <ShoppingCartPage/>},
      {path: "/cart/:id" , element: <SingleProductPage/>},
      {path: "/wishlist" , element: <WishlistPage/>},
      {path:"/wishlist/:id" , element: <SingleProductPage/>},
      {path:"/productspage" , element: <ProductsPage/>},
      {path:"/productspage/:id" , element: <SingleProductPage/>},
      {path:"/profile" , element: <ProfilePage/>},

      ]},
  ])
  return (
    <Fragment>
     <CartProvider>
      <WishlistProvider>
  <QueryClientProvider client={queryClient}>
    <Toaster/>
    {/* {isLoading && <Loader/>} */}
     <RouterProvider router={Routes} />
    </QueryClientProvider>
      </WishlistProvider>
    </CartProvider>
    </Fragment>
  )
  
}
