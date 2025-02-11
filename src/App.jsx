import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import HomePage from './pages/HomePage/HomePage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  const queryClient = new QueryClient()
  const Routes = createBrowserRouter([
    {path: "/", element: <LayOut/>, children: [
      {index: true, element: <HomePage/>},
      {path:"/:id", element: <SingleProductPage/>},
      
    ]},
  ])
  return  <QueryClientProvider client={queryClient}>
   <RouterProvider router={Routes} />
   </QueryClientProvider>
}
