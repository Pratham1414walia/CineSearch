import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound';


const Api_Key="8f4bfe6";
// import CardPage from '../CardPage/CardPage'
function MovieDetailPage() {
    const {imdbID}=useParams();
   const [searchedData,setSearchData]=useState([]);
 

     const dataFetch=(queryId)=>{
        const url=`https://www.omdbapi.com/?i=${queryId}&apikey=${Api_Key}`
        const rsp=fetch(url).then((res)=>res.json()).then((res)=>{return setSearchData(res)}).catch((err)=>{
            console.log(err);
        })

     }

dataFetch(imdbID);
  return (
     <> 
    {searchedData ? (
           
<div className="flex flex-col">
  <div className="basis-1/4">
<img src="https://t2.gstatic.com/images?q=tbn:ANd9GcTik5ljoCLmd2OfanxaFvxHdMM_AAJmpkkDVtZc9Xwt-iwsEPYqU-5gL-CfQX2GYpm2jHW02w" alt=""  />

  </div>
  <div className="basis-1/4"></div>
  <p>Title : {searchedData.Title}  </p>
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
  
    ) : (
    <>
   < NoMoviesFound/>
   </>
    )}

     
     </>
  )
}

export default MovieDetailPage