// BottomBar.js
import React from "react";
import styled from "styled-components";
import { FaHome, FaSearch, FaPlus, FaBell, FaUser } from "react-icons/fa";

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #282c34;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #444;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }
`;

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <IconButton>
        <FaHome />
      </IconButton>
      <IconButton>
        <FaSearch />
      </IconButton>
      <IconButton>
        <FaPlus />
      </IconButton>
      <IconButton>
        <FaBell />
      </IconButton>
      <IconButton>
        <FaUser />
      </IconButton>
    </BottomBarContainer>
  );
};

export default BottomBar;
