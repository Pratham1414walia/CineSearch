import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./WishListMovies.css"

import CardContext from '../../context/CardContext';
// import NoMoviesFound from '../NoMoviesFound/NoMoviesFound.jsx';
function WishListMovies(props) {

    
  const {Title,Year,imdbID,Poster}=props.movieData;
  // console.log(imdbID,Title);

 const {remItem}=useContext(CardContext);
 
 const handleEvent=(e)=>{
e.preventDefault();
     remItem(imdbID);
 }
  
  return (

<>
  

<div className="Cardwish">
   
        <img className="CardImage" src={Poster} alt={Title} />
            <div className="CardName">{Title}</div>
        <p className="CardYear">Year : {Year}</p>
        {/* <Link to="wishlist"> */}
       <button type='button' className="button2 bg-primary-60"
       onClick={handleEvent}
        >Remove From Favourites</button>
        {/* </Link> */}
</div>

</>
  )
}

export default WishListMovies