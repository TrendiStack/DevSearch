import React from "react";
import Moon from "../../images/icon-moon.svg";
import Sun from "../../images/icon-sun.svg";
import "./Navbar.css";

const Navbar = (props) => {
  const changeIcon = () => {
    if (props.dataTheme === "light") {
      return Moon;
    } else {
      return Sun;
    }
  };

  const changeIconText = () => {
    if (props.dataTheme === "light") {
      return "Dark";
    } else {
      return "Light";
    }
  };

  return (
    <div className="navContainer" data-theme={props.dataTheme}>
      <h1 className="navTitle">DevSearch</h1>
      <div className="colorModeContainer">
        <p className="colorModeText">{changeIconText()}</p>
        <i onClick={props.onTheme} className="fas fa-toggle-on" />
        <img src={changeIcon()} alt="dark mode icon" className="moonIcon" />
      </div>
    </div>
  );
};

export default Navbar;
