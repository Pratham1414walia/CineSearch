import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout/>} >
        
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/home' element={<Home />} />
    
     </Route>

  )
 )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <App/> */}
  <RouterProvider router={router} />
  </React.StrictMode>,
)
