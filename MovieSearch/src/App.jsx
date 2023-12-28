
import React, { useState } from 'react'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage.jsx'

 const Api_Key="8f4bfe6";

function App() {
  const [movieList,setMovieList]=useState([]);
  const [searchString,setSearchString]=useState("Hello");
   const dataFetch=(searchString)=>{
    
      const url =`https://www.omdbapi.com/?s=${searchString}&apikey=${Api_Key}`;
    
      const rsp = fetch(url).then((res)=>{
 
      return res.json()
      }
        ).then((movies)=>{
       setMovieList(movies.Search);
        // console.log(movies.Search);
      }
      ).catch((err)=>{
        console.log(err)
      });


   }
  
  const dataSearching=(e)=>{
  const query=e.target.value;
    dataFetch(query);
    setSearchString(query);
  }

  const router=createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Layout inputSearch={searchString} onNavChange={dataSearching}  />} >
          
 <Route  path='' element={<Home movies={movieList} />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishlist' element={<Wishlist />} />
     
        <Route path='/:imdbID' element={<MovieDetailPage/>} />
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
