import React from "react";
import { useGeolocated } from "react-geolocated";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import {places} from './restaurants';
import { Icon } from "leaflet";
import './Map.css'

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
    <div className="map-wrapper" id="map">
      <MapContainer
        center={[coords.latitude, coords.longitude]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coords.latitude, coords.longitude]}></Marker>
        {places.map((place) => (
          <Marker position={[place.latitude, place.longitude]}>
            <Popup>
              <h1>{place.name}</h1>
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
