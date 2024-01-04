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

