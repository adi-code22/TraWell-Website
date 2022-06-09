import React, { useEffect, useState } from "react";
import "./Shop.css";
import {GoLocation} from 'react-icons/go'
import {BiRupee} from 'react-icons/bi'

const UsingFetch = () => {
  const [items, setItems] = useState([]);

  const fetchData = () => {
    fetch("http://192.168.137.114:8080/allitems")
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
    <div>
      {items.length > 0 && (
        <div className="shop-wrapper">
          {items.map((item) => (
            <div className="shopcard-wrapper">
              <img src={item.img} style={{width:"100%",height:"50%"}}></img>
              <h4 key={item.id}>name:{item.itemName}</h4>
              <small style={{position:"absolute",bottom:"0px"}}><GoLocation />{item.location}</small>
              <p>{item.description}</p>
              <small><BiRupee />{item.price}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UsingFetch;
