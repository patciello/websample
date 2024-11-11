import React from "react";
import "./TopBar.css";

export const TopBar = ({ children }) => (
  <div className="topbar">{children}</div>
);

export const TopBarTitle = ({ children }) => (
  <h1 className="topbar-title">{children}</h1>
);
