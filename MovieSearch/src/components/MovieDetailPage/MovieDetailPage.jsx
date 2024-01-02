import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound';


import CardContext from '../../context/CardContext';
import "./MovieDetailPage.css"
const Api_Key="8f4bfe6";

function MovieDetailPage() {
    const {imdbID}=useParams();
   const [searchedData,setSearchData]=useState([]);
   const [btnVisible,setBtnVisible]=useState(true);   
  
   const {addItem}=useContext(CardContext);
   const handleEvent=(e)=>{
    e.preventDefault();
    setBtnVisible(false);
  addItem(searchedData);
   }

     useEffect(() => {
        const url=`https://www.omdbapi.com/?i=${imdbID}&apikey=${Api_Key}`
        const rsp=fetch(url).then((res)=>res.json()).then((res)=>{return setSearchData(res)}).catch((err)=>{
            console.log(err);
        })
      }, [imdbID]);

  return (
     <> 
    {searchedData ? (
           
<div className="dabba flex flex-row">
  <div className="ImgDiv">
<img className="MovieImg" src={searchedData.Poster} alt=""  />

  </div>
  <div className="detail">
  <h1>{searchedData.Title}</h1>
  <p>Year :{searchedData.Year} </p>
    <p> Rated:{searchedData.Rated} </p>
    <p> Released Date :{searchedData.Released}</p>
    <p> Director :{searchedData.Director}</p>
    <p> Plot :{searchedData.Plot}</p>
    <p>Writer :{searchedData.Writer}</p>
    <p> Language :{searchedData.Language}</p>
    <p> Runtime :{searchedData.Runtime}</p>
     <p> Imdb Rating :{searchedData.imdbRating}</p> 
     <p> Awards :{searchedData.Awards}</p>
     <p>Box Office Collection :{searchedData.BoxOffice}</p>

     {btnVisible && (
 <button type="submit" 
 onClick={handleEvent}
 className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add to Favourites</button>

     )}
    
     </div>
     </div>
  
    ) : (
    <>
   < NoMoviesFound/>
   </>
    )}

     
     </>
  )
}

export default MovieDetailPage