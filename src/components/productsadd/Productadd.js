// src/App.js

import "./Productadd.css";
import { useState } from "react";

function Productadd() {
  const [itemName, setitemName] = useState(" ");
  const [img, setImg] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [location, setLocation] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://192.168.1.53:8080/addItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemName: itemName,
          img: img,
          description: description,
          location: location,
          price: price,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="input-wrapper" id="addproducts">
      <div style={{ backgroundColor: "transparent" }}>
        <h2>Add Your Products</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <input
          type="text"
          value={itemName}
          placeholder="item name"
          onChange={(e) => setitemName(e.target.value)}
        />
        <input
          type="text"
          value={img}
          placeholder="image URL"
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={location}
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Productadd;
