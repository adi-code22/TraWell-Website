import React, { useEffect, useState } from "react";
import "./Shop.css";
import { GoLocation } from "react-icons/go";
import { BiRupee } from "react-icons/bi";

const UsingFetch = () => {
  const [items, setItems] = useState([]);

  const fetchData = () => {
    fetch(`http://192.168.211.247:8080/allItems`)
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
    <div style={{ paddingTop: "100px" }} id="shop">
      <div style={{ paddingLeft: "50px" }}>
        <h2 style={{ fontSize: "3rem", color: "white" }}>
          <div style={{ display: "flex" }}>
            <div style={{ color: "#3e97c9" }}>Native </div>
            <div style={{ color: "#233f8e" }}>Shop</div>
          </div>
        </h2>
      </div>
      {items.length > 0 && (
        <div
          className="shop-wrapper"
          style={{ padding: "100px 50px 0px 50px" }}
        >
          {items.map((item) => (
            <div
              className="shopcard-wrapper"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "#8cd0ef59",
                backgroundBlendMode: "color",
                backgroundPosition: "center",
              }}
            >
              <div className="shop-image-wrapper">
                <img
                  src={item.img}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                ></img>
              </div>
              <div className="shopcard-content-wrapper">
                <h4>{item.itemName}</h4>
                <p>
                  <BiRupee />
                  {item.price}
                </p>
                <p>{item.description}</p>
                <small>
                  <GoLocation />
                  {item.location}
                </small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UsingFetch;
