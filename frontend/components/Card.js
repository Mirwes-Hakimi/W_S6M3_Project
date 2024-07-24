
import React from "react";
import Figure from "./Figure";

function Card({title, text, imageURL, date}){

    return (
     <div>
   <h1>{title}</h1>
   <p>{text}</p>
   
   < Figure 
   imageURL={imageURL}
   caption={date}
   />
  
   </div>
    )
  }

  export default Card;