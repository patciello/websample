import React from "react";
import { TopBar } from "./TopBar";
import livresLogo from "../assets/logos/livres.png";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <TopBar title="Livres Platform" logoSrc={livresLogo} />
      <main className="layout-content">{children}</main>
    </div>
  );
};

export default Layout;
