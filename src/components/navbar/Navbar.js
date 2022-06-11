import React from "react";
import "./Navbar.css";
import logo from "../../images/trawell .png";
import { GoLocation } from "react-icons/go";

export default function Navbar() {
  return (
    <header className="header">
      <img src={logo} className="header-logo"></img>
      <nav className="navigation">
        <ul className="list-container">
          <li>
            <a href="#home" className="header-links">
              Home
            </a>
          </li>
          <li>
            <a href="#travelcard" className="header-links">
              Travel card
            </a>
          </li>
          <li>
            <a href="#shop" className="header-links">
              NativeShop
            </a>
          </li>
          <li>
            <a href="#addproducts" className="header-links">
              Add products
            </a>
          </li>
        </ul>
        <ul
          style={{
            listStyle: "none",
            gridColumn: "8/-1",
            borderRadius: "50%",
            backgroundColor: "#233f8e",
            width: "50px",
            height: "50px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <li>
            <a href="#map" className="header-links map-logo">
              <GoLocation />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
