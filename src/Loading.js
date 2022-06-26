import "./Loading.css"
import logo from "./images/trawell .png"
import ReactLoading from "react-loading"
const Loading =()=>{
  return(
    <div className="loading-screen">
      <img src={logo} className="loading-logo" />
      <ReactLoading type="spin" color="#233f8e"/>
    
    
    </div>
  )
}
export default Loading