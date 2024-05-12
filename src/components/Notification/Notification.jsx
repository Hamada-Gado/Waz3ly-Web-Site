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

  const organizationNotificationsOptions = [
    {
      id: 1,
      message: "Donation post 1: Food for 50 people has been donated",
    },
    {
      id: 2,
      message:
        "Good news! Donation post 2 has been picked by Ahmed Ali to be donated",
    },
    {
      id: 3,
      message: "Donation post 5: Clothes for 20 people has been donated",
    },
  ];
  const donorNotificationsOptions = [
    {
      id: 1,
      message: "Your driver Ahmed has arrived",
    },
    {
      id: 2,
      message: "Your driver Ali will be arriving in 10 minutes",
    },
  ];

  const updateNotifications = () => {
    setAccountType(JSON.parse(localStorage.getItem("userData")).accountType);
    console.log(accountType);
    switch (accountType) {
      case "Organization":
        setNotifications(
          // Show a random notification from the organizationNotificationsOptions
          organizationNotificationsOptions.filter(
            (notification) =>
              notification.id === Math.floor(Math.random() * 3) + 1
          )
        );
        break;
      case "Donor":
      case "Teacher":
      case "Doctor":
        setNotifications(
          donorNotificationsOptions.filter(
            (notification) =>
              notification.id === Math.floor(Math.random() * 2) + 1
          )
        );
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
