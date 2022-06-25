import "./About.css";
import Aboutsection from "./aboutsection/Aboutsection";
export default function About() {
  return (
    <div className="about-wrapper">
      <div style={{ paddingLeft: "50px" }}>
        <h2 style={{ fontSize: "3rem", color: "white" }}>
          <div style={{ display: "flex" }}>
            <div style={{ color: "#3e97c9" }}>About</div>
            <div style={{ color: "#233f8e" }}>Us</div>
          </div>
        </h2>
      </div>
      <div className="about-sections-all-wrapper">
        <Aboutsection />
      </div>
    </div>
  );
}
