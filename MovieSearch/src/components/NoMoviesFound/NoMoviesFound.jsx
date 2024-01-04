import React from 'react'
import "./NoMoviesFound.css"

function NoMoviesFound() {
  return (
    <>
    <div className="NoMovieContainer flex flex-col">

    <div className="SearchYourMovie">
        Search Your Favourite Movies  
    </div>
<div className="ImgNoMovie">
    {/* <h1>Hello bro</h1> */}
    <img src="./film_logo.png" alt="" />
    </div>
</div>
</>
  )
}

export default NoMoviesFound