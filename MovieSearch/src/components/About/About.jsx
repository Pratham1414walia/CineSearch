import React from 'react';
import "./About.css";

function About() {
  return (
    <>
    



    <div className="aboutUs flex flex-col">
    <div className="AboutHeading">About Us</div>
    <div className="aContainer flex flex-row">
   
  
    <div className="ImgContain">
        {/* <h1>Hello bro</h1> */}
        <img src="./curAbout.jpg" alt="" />
        </div>
       <div className="content">
       At FilmHaven, we believe in the power of storytelling and the magic that unfolds on the screen. 
      It is a one-stop destination for fans looking to delve into the world of entertainment, make informed decisions about what to watch, and access information about their favorite movies, TV shows, and celebrities.
       The FilmHaven is a helpful tool for users who need assistance for recalling specific movies, shows, or individuals.
       Our platform is a haven for movie and TV enthusiasts, designed to be your ultimate companion in the world of entertainment.
       </div>
   
    </div>
    </div>
    </>


  )
}

export default About