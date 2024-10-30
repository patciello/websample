import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiHandsPrayingDuotone } from "react-icons/pi";

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 4px; /* Margem lateral para os cantos arredondados */
  right: 4px; /* Margem lateral para os cantos arredondados */
  height: 70px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(40, 40, 45, 0.8)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px; /* Cantos arredondados */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); /* Sombra para dar profundidade */
  z-index: 10;
  backdrop-filter: blur(10px);
`;

const IconButton = styled(motion(Link))`
  background: none;
  border: none;
  color: ${({ isActive }) => (isActive ? "#dbdbdb" : "#ad2e00")};
  font-size: ${({ isActive }) => (isActive ? "2.5rem" : "2rem")};
  font-size: 2rem; /* Resize Icons */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
    font-size: "3rem";
  }
  span {
    margin-top: 2px;
  }
`;

const BottomBar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <BottomBarContainer>
      <IconButton
        to="/"
        isActive={activeIcon === "home"}
        onClick={() => handleIconClick("home")}
        whileHover={{ scale: 2.1 }}
      >
        <GoHome />
      </IconButton>
      <IconButton
        to="/category"
        isActive={activeIcon === "category"}
        onClick={() => handleIconClick("category")}
        whileHover={{ scale: 1.1 }}
      >
        <TbCategory />
      </IconButton>
      <IconButton
        to="/events"
        isActive={activeIcon === "event"}
        onClick={() => handleIconClick("event")}
        whileHover={{ scale: 1.1 }}
      >
        <MdOutlineEventAvailable />
      </IconButton>
      <IconButton
        to="/fastings"
        isActive={activeIcon === "praying"}
        onClick={() => handleIconClick("praying")}
        whileHover={{ scale: 1.1 }}
      >
        <PiHandsPrayingDuotone />
      </IconButton>
    </BottomBarContainer>
  );
};

export default BottomBar;
