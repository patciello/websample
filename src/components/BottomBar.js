import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
  border-top: 1px solid #444; /* Borda superior */
  border-bottom: 5px solid #61dafb; /* Borda inferior personalizada */
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;

const BottomBar = () => {
  return (
    <BottomBarContainer>
      {[<FaHome />, <FaSearch />, <FaPlus />, <FaBell />, <FaUser />].map(
        (Icon, index) => (
          <IconButton
            key={index}
            whileHover={{ scale: 1.2, color: "#61dafb" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {Icon}
          </IconButton>
        )
      )}
    </BottomBarContainer>
  );
};

export default BottomBar;
