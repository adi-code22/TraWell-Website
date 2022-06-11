import "./Footer.css";
import React from "react";
import logo from "../../images/trawell .png";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div>
        <img src={logo} className="footer-logo"></img>
      </div>
      <div className="copyright"><small>copyright 2022; All Right Reserved By traWell</small></div>
    </footer>
  );
}