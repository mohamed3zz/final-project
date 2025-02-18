import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import HomePage from './pages/HomePage/HomePage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './pages/Register/Login'
import SignUp from './pages/Register/SignUp'
import AboutUsPage from './pages/AboutUs/AboutUsPage'

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
      ]},
  ])
  return  <QueryClientProvider client={queryClient}>
   <RouterProvider router={Routes} />
   </QueryClientProvider>
}
