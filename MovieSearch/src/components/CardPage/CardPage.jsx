import React from 'react'
import {Link} from 'react-router-dom'

import "./CardPage.css"
export default function CardPage(props) {

  const {Title,Year,imdbID,Poster}=props.movieData;
  // console.log(imdbID,Title);
  return (
   
<>
  

<div className="CardContain">
   
        <img className="CardImage" src={Poster} alt={Title} />
            <div className="CardName">{Title}</div>
        <p className="CardYear">Year : {Year}</p>
        <Link to={`/${imdbID}`}>
        <button type='button' className="button1 bg-primary-60">Movie Details</button>
        </Link>
</div>

</>
  )
}

// "bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow"

// items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800