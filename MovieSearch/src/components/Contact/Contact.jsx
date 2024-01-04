import React, { useState } from 'react'
import axios from 'axios'
import "./Contact.css"

function Contact() {

  const formDetails={
    name :"",
    email:"",
    message:"",
 };
 

const [userDetails,setUserDetails]=useState(formDetails);
const [buttonText,setButtonText]=useState("Send Message");

const onFormUpdate=(category,value)=>{
 
  setUserDetails({
    ...userDetails,
    [category]:value,
  })
}

const onSubmitFrom=async(e)=>{
  e.preventDefault();
  setButtonText("Sending ...");
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

     const result=await response.json();
     setButtonText("Send Message");
    setUserDetails(formDetails);
  } catch (err) {
    console.error(err);
   
  }
};

  return (
  <>
{/* <section className="bg-white dark:bg-gray-900"> */}
  <div className="Contact ">
      <h2 className="mb-4 text-4xl  font-extrabold text-center">Contact Us</h2>
      
      <form action="#" onSubmit={(e)=>onSubmitFrom(e)} className="space-y-4">
          <div>
              <label htmlFor="email" className="Label block mb-2 text-sm font-medium">Your email address</label>
              <input type="email"
              value={userDetails.email}
              onChange={(e)=>onFormUpdate("email",e.target.value)}
              id="email" className="Input text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your email address" required></input>
          </div>
          <div>
              <label htmlFor="subject" className="Label block mb-2 text-sm font-medium">Your Name</label>
              <input type="text" 
              value={userDetails.name}
                   onChange={(e)=>onFormUpdate("name",e.target.value)}
              id="subject" className="Input text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your name " required></input>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="Label block mb-2 text-sm font-medium">Feedback</label>
              <textarea 
                  value={userDetails.message}
                   onChange={(e)=>onFormUpdate("message",e.target.value)}
              id="message" rows="6" className="Input text-sm rounded-lg block w-full p-2.5 " placeholder="Leave a comment..."></textarea>

             
          </div>
          <button type="submit" className="Button py-3 px-5 text-sm font-medium text-center text-primary-40 rounded-lg bg-primary-60 sm:w-fit">{buttonText}</button>
      </form>
  </div>
{/* </section> */}

  </>
  )
}

export default Contact