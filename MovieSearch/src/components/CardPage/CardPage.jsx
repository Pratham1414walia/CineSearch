import React from 'react'
import {Link} from 'react-router-dom'

export default function CardPage(props) {

  const {Title,Year,imdbID,Poster}=props.movieData;
  // console.log(imdbID,Title);
  return (
   
<>
<div className="border-black outline-4 bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
        <img className="rounded-t-lg pt-4 pl-8 " src={Poster} alt={Title} />

    <div className="p-3">
 
            <h5 className="mb-2 pl-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{Title}</h5>
       
        <p className="mb-3 pl-4 font-normal text-gray-700 dark:text-gray-400">Year : {Year}</p>
       
      
     
        <Link to={`/${imdbID}`} className=" pl-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View Details
            
        </Link>
    </div>
</div>
</>
  )
}
