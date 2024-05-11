import React, { useState } from "react";

function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const notifications = [
    { id: 1, message: "This is a sample notification" },
    { id: 2, message: "Another notification for you" },
  ];

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-bell-filled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#333333"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>
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
