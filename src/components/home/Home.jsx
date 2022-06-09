import "./Home.css";
import {SiGooglemaps} from 'react-icons/si'


export default function Home() {
  const places = [
    {
      image:"https://www.keralatourism.org/images/festivals/large/20170330115924_321_1.jpg",
      name:"thrissur",
      lat:"10.530345",
      lon:"76.214729"
      
    },
    {
      name:"trivandrum",
      lat:"8.524830972246082",
      lon:"76.93648162924757",
      image:"https://imgs.search.brave.com/FSTmTE6OphRYE5xU1TY2heVkIbGMi6TWNgKyEHFw8tY/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/MXFtaXUtanZBZFZ4/VGk5M01NRjNBSGFF/SyZwaWQ9QXBp"
    },
    {
      name:"palakad",
      lat:"10.785630748309826", 
      lon:"76.65337926556471",
      image:"https://imgs.search.brave.com/KKc7AAMyavUqnWKLYoEcTMn4We4qCUVW4BxpbSl6MuI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/TFd6VzZnMmwwZXVs/endIdlNFbkVRSGFF/SyZwaWQ9QXBp"

    },
    {
      name:"kasargod",
      lat:"12.507916275455223", 
      lng:"74.9852937958625",
      image:"https://imgs.search.brave.com/6NxonH-D1zJJxcckMotWfaxl5um04gZDo8Y9-wQDHEM/rs:fit:704:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/NEhLWk1EVkZUTlYz/cW83cm1qLWtnSGFF/XyZwaWQ9QXBp"
    },
    {
      name:"kollam",
      lat:"8.890991900806359", 
      lon:"76.61190581191678",
      image:"https://imgs.search.brave.com/Zka8GOGTlnpXg8KZa2mnOSiPSk68d1I1SclT6TmVaR4/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/Q3BSRlRxRVQzZjBj/c3NNZTJiYkd3SGFG/aiZwaWQ9QXBp"
    },
    {
      name:"ernakulam",
      lat:"9.998662187611064",
      lon:"76.29107472776859",
      image:"https://imgs.search.brave.com/VQEd5LgMffeCIL5nP0CmLMa3P9tNZEiod3wqJfhzYCU/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/ZXJYQ3NzaWlnOUpV/YkJnd1lpaktnSGFF/SyZwaWQ9QXBp"
    }
  ]
  return(
  <div className="home-wrapper">
  { 
    places.map(place =>(
      <div className="places-wrapper" style={{backgroundImage:`url(${place.image})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundColor:"rgba(0,0,0,0.8)", backgroundBlendMode:"color", backgroundPosition:"center"}}>
      <img src={place.image} style={{objectFit:"cover", width:"100%", height:"60%", borderRadius:"20px"}}></img>
        <h2>{place.name}</h2>
        <a href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lon}`} target="_blank_" className="map-link"><SiGooglemaps />maps</a>
        
      </div>
    ))

  }
    
  </div>

  
)}


