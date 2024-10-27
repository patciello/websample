/* src/App.js */
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import DogList from "./components/DogList";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="logo">
            <img
              src="https://via.placeholder.com/40x40.png?text=Logo"
              alt="Canil DelBoux Logo"
            />
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
      </div>
    </Router>
  );
}

export default App;
