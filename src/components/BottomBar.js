import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
  padding-bottom: 5px; /* Ajuste esse valor para garantir uma distância confortável do Home Indicator */
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
  font-size: 2rem; /* Aumenta o tamanho dos ícones */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #c62f2f !important; /* Cor de hover personalizada */
  }

  &:focus {
    outline: none; /* Remove a borda amarela padrão ao focar/clicar no botão */
  }

  &:active {
    outline: none; /* Remove a borda amarela padrão ao focar/clicar no botão */
    box-shadow: none; /* Remove qualquer sombra que o navegador possa aplicar */
    color: #ffffff; /* Mantém a cor branca para evitar a mudança indesejada */
  }

  span {
    margin-top: 2px;
  }
`;

const BottomBar = () => {
  return (
    <>
      <BottomBarContainer>
        <IconButton whileHover={{ scale: 1.1, color: "#bfbfbf" }}>
          <GoHome />
        </IconButton>
        <IconButton whileHover={{ scale: 1.1, color: "#bfbfbf" }}>
          <TbCategory />
        </IconButton>
        <IconButton whileHover={{ scale: 1.1, color: "#bfbfbf" }}>
          <MdOutlineEventAvailable />
        </IconButton>
        <IconButton whileHover={{ scale: 1.1, color: "#bfbfbf" }}>
          <PiHandsPrayingDuotone />
        </IconButton>
      </BottomBarContainer>
      <BottomBarLowerSection />
    </>
  );
};

export default BottomBar;
