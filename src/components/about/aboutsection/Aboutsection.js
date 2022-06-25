import "./Aboutsection.css";
import "./Aboutcard.css";
import { aboutData } from "../Aboutdata";
export default function Aboutsection() {
  return (
    <div className="about-section-wrapper">
      {aboutData.map((data) => (
        <Aboutcards
          f_name={data.f_name}
          l_name={data.l_name}
          des={data.desc}
          image={data.image}
          classname={data.class}
        />
      ))}
    </div>
  );
}

function Aboutcards({ f_name, l_name, des, image, classname }) {
  return (
    <div className={`aboutcard-wrapper ${classname}`}>
      <div className="image-container">
        <div className="shadow-div">
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
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}
