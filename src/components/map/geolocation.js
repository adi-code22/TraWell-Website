import React from "react";
import { useGeolocated } from "react-geolocated";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import demos from "./mapdataagain.json";

const Demo = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div className="map-wrapper">
    {console.log(coords.latitude)}
    {console.log(coords.longitude)}
      <MapContainer center={[coords.latitude, coords.longitude]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {demos.map((demo) => (
          <Marker key={demo.id} position={[coords.latitude, coords.longitude]}>
            <Popup>
              <img src={demo.image} className="popup-image"></img>
              <h4>{demo.name}</h4>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Demo;
