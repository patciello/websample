/* src/App.js */
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import DogList from "./components/DogList";
import Contact from "./components/Contact";
import "./App.css";
import logo from "./assets/logo.webp";
import house from "./assets/house.png";
import info from "./assets/info.png";
import paw from "./assets/paw-print.png";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="logo">
            <img src={logo} alt="Canil DelBoux Logo" />
            CANIL DELBOUX
          </div>
          <ul>
            <li>
              <Link to="/">Página Inicial</Link>
            </li>
            <li>
              <Link to="/dogs">Seu Amigo</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="bottom-bar">
          <Link to="/">
            <img src={house} alt="Home" />
            Página Inicial
          </Link>
          <Link to="/dogs">
            <img src={paw} alt="Dogs" />
            Seu Amigo
          </Link>
          <Link to="/contact">
            <img src={info} alt="Contact" />
            Contato
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
