import React, { useContext } from 'react'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound';
import CardContext from '../../context/CardContext'
import WishListMovies from '../WishListMovies/WishListMovies';
import "./Wishlist.css"

function Wishlist() {
  const curContext=useContext(CardContext);
    const movieList=curContext.items;
  return (
  <>
    
 <div className="Favourite" >Your Favourites Movies</div>
<div className="Wishlist">
  
   {movieList?.length ?(movieList.map((movieData,index)=>{
          return <WishListMovies movieData={movieData} key={index} />
         })
 
         ) : (
           <>
           
           </>
         )
       }

</div>
  </>
    
  )
}

export default Wishlist