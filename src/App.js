import React, { useState, useEffect } from "react";
import "./App.css";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import Demo from "./components/map/geolocation";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Productadd from "./components/productsadd/Productadd";
import Travelcard from "./components/travelcard/Travelcard";
import About from "./components/about/About";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="App">
          <Navbar />
          <Home />
          <Travelcard />
          <Shop />
          <Productadd />
          <About />
          <Demo />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
