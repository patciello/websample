import styled from "styled-components";
import { FaBell } from "react-icons/fa";

export const NotificationButtonContainer = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;

  &:hover {
    color: #f90;
  }
`;

const NotificationButton = () => {
  return (
    <NotificationButtonContainer>
      <FaBell size={24} />
    </NotificationButtonContainer>
  );
};

export default NotificationButton;
