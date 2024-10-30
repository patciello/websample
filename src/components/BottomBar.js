import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiHandsPrayingDuotone } from "react-icons/pi";

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 20px; /* Levanta um pouco a barra para não encostar na borda inferior */
  left: 10px; /* Margem lateral para os cantos arredondados */
  right: 10px; /* Margem lateral para os cantos arredondados */
  height: 70px;
  background: rgba(40, 40, 40, 0.9); /* Fundo escuro com transparência */
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px; /* Cantos arredondados */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); /* Sombra para dar profundidade */
  z-index: 10;
  backdrop-filter: blur(10px);
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  color: #ff4500; /* Cor laranja dos ícones */
  font-size: 2rem; /* Aumenta o tamanho dos ícones */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #ffa500 !important; /* Laranja claro no hover */
  }

  &:focus,
  &:active {
    outline: none; /* Remove a borda amarela padrão ao focar/clicar no botão */
    box-shadow: none; /* Remove qualquer sombra que o navegador possa aplicar */
    color: #ff4500; /* Mantém a cor laranja para evitar a mudança indesejada */
  }

  span {
    margin-top: 2px;
  }
`;

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <IconButton whileHover={{ scale: 1.1 }}>
        <GoHome />
      </IconButton>
      <IconButton whileHover={{ scale: 1.1 }}>
        <TbCategory />
      </IconButton>
      <IconButton whileHover={{ scale: 1.1 }}>
        <MdOutlineEventAvailable />
      </IconButton>
      <IconButton whileHover={{ scale: 1.1 }}>
        <PiHandsPrayingDuotone />
      </IconButton>
    </BottomBarContainer>
  );
};

export default BottomBar;
