import "./Home.css";
import { SiGooglemaps } from "react-icons/si";
// import {IoLogoGooglePlaystore} from 'react-icons/io'
import {FcAndroidOs} from 'react-icons/fc';

export default function Home() {
  
  return (
    <div className="home-wrapper" id="home">
  
    <div className="welcome-text-wrapper"><h1>Welcome to <br></br>trawell</h1>
    <p>here to get you there . . .</p></div>
    <a href="#"><FcAndroidOs /></a>
      
    </div>
  );
}
