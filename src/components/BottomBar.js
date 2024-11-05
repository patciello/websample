import { useState } from "react";
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiHandsPrayingDuotone } from "react-icons/pi";

const BottomBarContainer = styled.div`
  position: fixed;

  bottom: 3px;
  left: 4px; /* Margem lateral para os cantos arredondados */
  right: 4px; /* Margem lateral para os cantos arredondados */
  height: 70px;
  background: linear-gradient(
    to top,
    rgba(28, 28, 28, 0.8),
    rgba(44, 43, 43, 0.8)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px; /* Cantos arredondados */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); /* Sombra para dar profundidade */
  z-index: 10;
  backdrop-filter: blur(10px);
  padding: 0px;
  margin-top: 0px;
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ isActive }) => (isActive ? "#b0431c" : "#757575")};
  font-size: ${({ isActive }) => (isActive ? "2.2rem" : "1.7rem")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
  }
  span {
    margin-top: 0px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove sublinhado padrão do Link */
  -webkit-tap-highlight-color: transparent;
  text-decoration: none; /* Remove sublinhado padrão do Link */
  display: flex; /* Faz com que o Link se comporte como um container flex */
  justify-content: center;
  align-items: center;
`;

const BottomBar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="bottom-bar">
      <BottomBarContainer>
        <StyledLink to="/" onClick={() => handleIconClick("home")}>
          <IconButton
            isActive={activeIcon === "home"}
            onClick={() => handleIconClick("home")}
            whileHover={{ scale: 1.1 }}
          >
            <GoHome />
          </IconButton>
        </StyledLink>
        <StyledLink to="/category" onClick={() => handleIconClick("category")}>
          <IconButton
            isActive={activeIcon === "category"}
            onClick={() => handleIconClick("category")}
            whileHover={{ scale: 1.1 }}
          >
            <TbCategory />
          </IconButton>
        </StyledLink>
        <StyledLink to="/events" onClick={() => handleIconClick("event")}>
          <IconButton
            isActive={activeIcon === "event"}
            onClick={() => handleIconClick("event")}
            whileHover={{ scale: 1.1 }}
          >
            <MdOutlineEventAvailable />
          </IconButton>
        </StyledLink>
        <StyledLink to="/fastings" onClick={() => handleIconClick("fastings")}>
          <IconButton
            isActive={activeIcon === "fastings"}
            onClick={() => handleIconClick("fastings")}
            whileHover={{ scale: 1.1 }}
          >
            <PiHandsPrayingDuotone />
          </IconButton>
        </StyledLink>
      </BottomBarContainer>
    </div>
  );
};

export default BottomBar;
