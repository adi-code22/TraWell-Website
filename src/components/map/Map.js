import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./Map.css";
import Demo from './geolocation'

export default function Map() {
  return (
    <div className="map-wrapper">
      <MapContainer center={[10.0, 75.26]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* {demos.map((demo) => (
          <Marker key={demo.id} position={[demo.latitude, demo.longitude]}>
            <Popup>
              <img src={demo.image} className="popup-image"></img>
              <h4>{demo.name}</h4>
            </Popup>
          </Marker>
        ))} */}
      </MapContainer>
    </div>
  );
}
