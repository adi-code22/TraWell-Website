import "./App.css";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import Demo from "./components/map/geolocation";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Productadd from "./components/productsadd/Productadd";
import Travelcard from "./components/travelcard/Travelcard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Travelcard />
      <Shop />
      <Productadd />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
