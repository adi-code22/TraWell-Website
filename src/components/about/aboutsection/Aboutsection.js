import React, { useEffect } from "react";

import "./Aboutsection.css";
import "./Aboutcard.css";
import { aboutData } from "../Aboutdata";

//animation

import Aos from "aos";
import "aos/dist/aos.css";

export default function Aboutsection() {
  return (
    <div className="about-section-wrapper">
      {aboutData.map((data) => (
        <Aboutcards
          f_name={data.f_name}
          l_name={data.l_name}
          des={data.desc}
          image={data.image}
          question={data.question}
          classname={data.class}
        />
      ))}
    </div>
  );
}

function Aboutcards({ f_name, l_name, des, image, question, classname }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className={`aboutcard-wrapper ${classname}`}>
      <div className="image-container">
        <div
          className="shadow-div"
          data-aos={classname ? "fade-left" : "fade-right" }
          data-aos-once='true'
        >
          <img src={image} className="about-card-image" />
        </div>
      </div>
      <div className="description-wrapper">
        <h2 style={{ fontSize: "2em", placeSelf: "center" }}>
          <div style={{ display: "flex" }}>
            <div style={{ color: "#3e97c9" }}>{f_name}</div>
            <div style={{ color: "#233f8e" }}>{l_name}</div>
          </div>
        </h2>
        <div className="description-text-wrapper">
          <span className="question">{question}</span>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}
