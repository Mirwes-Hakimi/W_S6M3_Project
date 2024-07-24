import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';


const api_key = 'DEMO_KEY';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;


function App() {
  const [apod, setApod] = useState()
 useEffect ( () => {
   function fetchPhoto(){
     axios.get(URL)
       .then(res => {
        console.log(res.data)
          setApod(res.data)
       })
         .catch(err => {
          console.log(err.message)
         })
   }


   
  //  fetchPhoto()
  setApod(
    {
            "copyright": "Pavel Gabzdyl",
            "date": "2024-07-19",
            "explanation": "For some, these subtle bands of light and shadow stretched across the sky as the Sun set on July 11. Known as anticrepuscular rays, the bands are formed as a large cloud bank near the western horizon cast long shadows through the atmosphere at sunset. Due to the camera's perspective, the bands of light and shadow seem to converge toward the eastern (opposite) horizon at a point seen just above a 14th century hilltop castle in Brno, Czech Republic. In the foreground, denizens of planet Earth are ...",
            "hdurl": "https://apod.nasa.gov/apod/image/2407/2024-07-11Pavel_2048p.jpg",
            "media_type": "image",
            "service_version": "v1",
            "title": "Anticrepuscular Rays at the Planet Festival",
            "url": "https://apod.nasa.gov/apod/image/2407/2024-07-11Pavel_1024p.jpg"
      } )

 },[])
 
if (!apod) return 'Fetching Photo of the Day...'
  
  return (
    <section>
  
  </section>
  )
}

export default App

