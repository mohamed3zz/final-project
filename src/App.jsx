import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import HomePage from './pages/HomePage/HomePage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'

export default function App() {
  const Routes = createBrowserRouter([
    {path: "/", element: <LayOut/>, children: [
      {index: true, element: <HomePage/>},
      {path: "/SingleProductPage", element: <SingleProductPage/>},
      
    ]},
  ])
  return  <RouterProvider router={Routes} />
}
