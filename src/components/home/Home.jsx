import "./Home.css";
import { SiGooglemaps } from "react-icons/si";
// import {IoLogoGooglePlaystore} from 'react-icons/io'
import {FcAndroidOs} from 'react-icons/fc';
import kerala from '../../images/Untitled-1@1,5x.png'

export default function Home() {
  
  return (
    <div className="home-wrapper" id="home">
  
    <div className="welcome-text-wrapper"><h1>Welcome to <br></br>trawell</h1>
    <p>here to get you there . . .</p></div>
    <div style={{width:"80%", height:"100%",display:"flex", alignItems:"center",justifyContent:"center" }}><img src={kerala} style={{height:"800px"}}></img></div>
    <a href="#"><FcAndroidOs /></a>
      
    </div>
  );
}
