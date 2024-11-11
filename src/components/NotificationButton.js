import React from "react";
import { FaBell } from "react-icons/fa";
import "./NotificationButton.css";

const NotificationButton = () => {
  return (
    <button className="notification-button">
      <FaBell size={24} />
    </button>
  );
};

export default NotificationButton;
