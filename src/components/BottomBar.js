import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHome, FaSearch, FaPlus, FaBell, FaUser } from "react-icons/fa";

//Icons Set
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiHandsPrayingDuotone } from "react-icons/pi";

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  padding-bottom: 20px; /* Ajuste esse valor para garantir uma distância confortável do Home Indicator */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(40, 44, 52, 0.8)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  backdrop-filter: blur(10px);
`;
const BottomBarLowerSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px; /* Altura da parte preta na parte inferior */
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
    color: #2e2e2e;
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
        <IconButton whileHover={{ scale: 1.2, color: "#bfbfbf" }}>
          <GoHome />
        </IconButton>
        <IconButton whileHover={{ scale: 1.2, color: "#bfbfbf" }}>
          <TbCategory />
        </IconButton>
        <IconButton whileHover={{ scale: 1.2, color: "#bfbfbf" }}>
          <MdOutlineEventAvailable />
        </IconButton>
        <IconButton whileHover={{ scale: 1.2, color: "#bfbfbf" }}>
          <PiHandsPrayingDuotone />
        </IconButton>
      </BottomBarContainer>
      <BottomBarLowerSection />
    </>
  );
};

export default BottomBar;
