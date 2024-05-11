import React, { useState } from "react";
import bellIcon from "../../assets/icons/bell.svg";
function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [accountType, setAccountType] = useState(null);

  const [notifications, setNotifications] = useState([]);
  const toggleMenu = () => {
    updateNotifications();
    setIsOpen(!isOpen);
  };

  const updateNotifications = () => {
    setAccountType(JSON.parse(localStorage.getItem("userData")).accountType);
    console.log(accountType);
    switch (accountType) {
      case "Organization":
        setNotifications([
          {
            id: 1,
            message: "Donation post 193: Food for 50 people has been donated",
          },
        ]);
        break;
      case "Donor":
        setNotifications([
          {
            id: 1,
            message: "Your driver Ahmed has arrived",
          },
        ]);
        break;
      default:
        setNotifications([]);
    }
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  };

  return (
    <div className="notification">
      <button onClick={toggleMenu}>
        <img src={bellIcon} />
      </button>
      <div style={isOpen ? overlayStyle : { display: "none" }}>
        {isOpen && (
          <div className="notification-menu bg-white p-4 rounded-lg shadow-lg">
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id} className="notification-item">
                  <p>{notification.message}</p>
                </li>
              ))}
            </ul>
            <button
              className="text-warning text-body font-semibold mt-4"
              onClick={toggleMenu}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationDropdown;
