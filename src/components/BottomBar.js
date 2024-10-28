import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHome, FaSearch, FaPlus, FaBell, FaUser } from "react-icons/fa";

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #282c34;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #444;
  padding-bottom: 20px;
`;
const BottomBarLowerSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px; /* Altura da parte preta na parte inferior */
  background-color: #000000; /* Cor preta para a parte inferior */
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }

  span {
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;
const BottomBar = () => {
  return (
    <>
      <BottomBarContainer>
        <IconButton whileHover={{ scale: 1.2, color: "#61dafb" }}>
          <FaHome />
          <span>Home</span>
        </IconButton>
        <IconButton whileHover={{ scale: 1.2, color: "#61dafb" }}>
          <FaSearch />
          <span>Search</span>
        </IconButton>
        <IconButton whileHover={{ scale: 1.2, color: "#61dafb" }}>
          <FaPlus />
          <span>Scan</span>
        </IconButton>
        <IconButton whileHover={{ scale: 1.2, color: "#61dafb" }}>
          <FaBell />
          <span>History</span>
        </IconButton>
        <IconButton whileHover={{ scale: 1.2, color: "#61dafb" }}>
          <FaUser />
          <span>Profile</span>
        </IconButton>
      </BottomBarContainer>
      <BottomBarLowerSection />
    </>
  );
};

export default BottomBar;
