import styled from "styled-components";
import TopBar from "./TopBar";
import livresLogo from "../assets/logos/livres.png";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <TopBar title="Livres Platform" logoSrc={livresLogo} />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
