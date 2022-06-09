import "./App.css";
import Shop from "./components/shop/Shop";
import Map from "./components/map/Map";
import Home from "./components/home/Home";
import Demo from "./components/map/geolocation";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Map />
      <Home />
      <Shop />
      <Demo />
    </div>
  );
}

export default App;
