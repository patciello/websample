import styled from "styled-components";
import livresLogo from "../assets/logos/livres.png";

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #000;
  width: 100%;
  gap: 12px;
`;

export const TopBarTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;

export const Logo = styled.img`
  width: auto;
  height: 64px;
  border-radius: 50%;
  margin-right: 12px;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <Logo src={livresLogo} alt="Livres logo" />
      <TopBarTitle>Livres</TopBarTitle>
    </TopBarContainer>
  );
};

export default TopBar;
