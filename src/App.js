/* src/App.js */
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Events from "./components/Events";
import Fastings from "./components/Fastings";
import "./App.css";
import qrCode from "./assets/images/qrcode.png";
import BottomBar from "./components/BottomBar";
import Layout from "./components/Layout";

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Layout>
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
            <div className="containerDesktop">
              <div className="desktop-content">
                <h1>A Paz!</h1>
                <h1>Este é o web app da Livres! Ainda estamos em construção</h1>
                <h2>
                  Pelo pc não é possível ver, mas quer ver como ele está ficando
                  no celular? É só escanear o QrCode!
                </h2>
                <img src={qrCode} alt="QR Code" />
              </div>
            </div>
          )}
        </div>
      </Router>
    </Layout>
  );
}
export default App;
