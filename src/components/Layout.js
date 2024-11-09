import styled from "styled-components";
import TopBar from "./TopBar";

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
    <LayoutContainer>
      <TopBar title="Your App Name" logoSrc="/logo.png" />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;
