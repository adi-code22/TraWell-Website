import React from "react";
import { useGeolocated } from "react-geolocated";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { places } from "./restaurants";
import L from "leaflet";
import "./Map.css";

const Demo = () => {
  var userIcon = L.icon({
    iconUrl:
      "https://i.pinimg.com/originals/0f/61/ba/0f61ba72e0e12ba59d30a50295964871.png",
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  var restaurentsIcon = L.icon({
    iconUrl:
      "https://www.freeiconspng.com/uploads/map-navigation-pin-point-restaurant-icon--14.png",
    iconSize: [30, 30], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [0, -10], // point from which the popup should open relative to the iconAnchor
  });

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
        <Marker position={[coords.latitude, coords.longitude]} icon={userIcon}>
          <Popup>
            <p>this is your location</p>
          </Popup>
        </Marker>
        {places.map((place) => (
          <Marker
            position={[place.latitude, place.longitude]}
            icon={restaurentsIcon}
          >
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
