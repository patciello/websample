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
import BottomBar from "./components/BottomBar";

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Router>
      <div>
        {isMobile ? (
          <>
            <nav>
              <div className="logo">
                <img src={logo} alt="Livres Sample" />
                Livres Sample
              </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
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
              <BottomBar />
            </div>
          </>
        ) : (
          <div className="container">
            <h1>
              Este aplicativo está disponível apenas para dispositivos móveis.
            </h1>
            <p>
              Por favor, acesse o aplicativo em um dispositivo Android ou
              iPhone.
            </p>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
