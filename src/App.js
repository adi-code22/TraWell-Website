
import './App.css';
import Shop from './components/shop/Shop'
import Map from './components/map/Map'
import Home from './components/home/Home'
import Demo from './components/map/geolocation'

function App() {
  return (
    <div className="App">
      <Map />
      <Home />
      <Shop />
      <Demo />
    </div>
  );
}

export default App;
