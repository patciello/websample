/* src/App.js */
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Events from "./components/Events";
import Fastings from "./components/Fastings";
import "./App.css";
import BottomBar from "./components/BottomBar";

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Router>
      <div>
        {isMobile ? (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/events" element={<Events />} />
              <Route path="/fastings" element={<Fastings />} />
            </Routes>
            <div className="bottom-bar">
              <BottomBar />
            </div>
          </>
        ) : (
          <div className="container">
            <h1>
              Olá! Este é o app da Livres, ainda estamos em construção, por este
              motivo não vai fucionar por aqui...Mas é por pouco tempo!
            </h1>
            <p>
              Aqui está o QR Code para acessa-lo agora mesmo! Que Deus te
              abençoe!
            </p>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
