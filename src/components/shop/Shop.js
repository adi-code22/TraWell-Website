import React, { useEffect, useState } from "react";
import "./Shop.css";
import { GoLocation } from "react-icons/go";
import { BiRupee } from "react-icons/bi";

const UsingFetch = () => {
  const [items, setItems] = useState([]);

  const fetchData = () => {
    fetch("http://192.168.1.53:8080/allitems")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{background:"black"}} id="shop">
    <div><h2 style={{fontSize:"3rem" ,color:"white"}}>SHOP</h2></div>
      {items.length > 0 && (
        <div className="shop-wrapper">
          {items.map((item) => (
            <div
              className="shopcard-wrapper"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "rgba(0,0,0,0.8)",
                backgroundBlendMode: "color",
                backgroundPosition: "center",
              }}
            >
              <img
                src={item.img}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "60%",
                  borderRadius: "20px",
                }}
              ></img>
              <h4>{item.itemName}</h4>
              <small><BiRupee />{item.price}</small>
              <p>{item.description}</p>
              <small><GoLocation />{item.location}</small>
                
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UsingFetch;
