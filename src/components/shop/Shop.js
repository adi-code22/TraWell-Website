import React, { useEffect, useState } from "react"
import './Shop.css';

const UsingFetch = () => {
  const [items, setItems] = useState([])

  const fetchData = () => {
    fetch("http://192.168.1.53:8080/allitems")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setItems(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {items.length > 0 && (
        <div className="shop-wrapper">
          {items.map(item => (
            <div className="shopcard-wrapper">
            <h4 key={item.id}>{item.name}</h4>
            <img src={item.img}></img>
            <small>{item.price}</small>
            <small>{item.location}</small>
            <p>{item.description}</p>
            <small>{item.price}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default UsingFetch
