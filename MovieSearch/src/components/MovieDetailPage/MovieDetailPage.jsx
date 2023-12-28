import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound';


const Api_Key="8f4bfe6";

function MovieDetailPage() {
    const {imdbID}=useParams();
   const [searchedData,setSearchData]=useState([]);
 

//useEffect    to synchronize with some external system
     useEffect(() => {
        const url=`https://www.omdbapi.com/?i=${imdbID}&apikey=${Api_Key}`
        const rsp=fetch(url).then((res)=>res.json()).then((res)=>{return setSearchData(res)}).catch((err)=>{
            console.log(err);
        })
      }, [imdbID]);

  return (
     <> 
    {searchedData ? (
           
<div className="flex flex-row">
  <div className="p-6">
<img src={searchedData.Poster} alt=""  />

  </div>
  <div className="pt-5">
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