import React from "react";
function Figure ({imageURL, caption}){
    return (
     <div>
     <img src={imageURL} />
     <figcaption>Awsesome pic taken on {caption}</figcaption>
     </div>
    )
   }
  
   export default Figure;