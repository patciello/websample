import React from "react";
import livresLogo from "../assets/logos/livres.png";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <img className="topbar-logo" src={livresLogo} alt="Livres logo" />
      <h1 className="topbar-title">Livres</h1>
    </div>
  );
};

export default TopBar;
