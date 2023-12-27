
import React, { useState } from 'react'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

 const Api_Key="8f4bfe6";

function App() {
  const [searchString,setSearchString]=useState("Hello");
   const dataFetch= async (searchString)=>{
      
     try {
      const url = `https://www.omdbapi.com/?t=${searchString}&apikey=${Api_Key}`;
      const response= await fetch(url);
      console.log(searchString);
      console.log(response);
     } catch (error) {
      console.log(err);
     }
  
   }
  
  const dataSearching=(e)=>{
  const query=e.target.value;
    dataFetch(query);
    setSearchString(query);
  }

  const router=createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Layout inputSearch={searchString} onNavChange={dataSearching}  />} >
          
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/home' element={<Home />} />
      
       </Route>
  
    )
   )
  

  return (
   <>
     <RouterProvider router={router} />
  </>
  )
}

export default App
