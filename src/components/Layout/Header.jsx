import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/Icon.png";
import Notification from "../Notification/Notification";
import settingsIcon from "../../../src/assets/icons/settings.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); // Redirect to login or home after logout
  };

  return (
    <header
      id="main-header"
      className="flex justify-between items-center bg-background-main py-4 px-6 shadow-md"
    >
      <button
        onClick={() => {
          const path = localStorage.getItem("defaultPath");
          if (path) navigate(path);
          else navigate("/");
        }}
      >
        <img src={logo} alt="Logo" className="h-10" />
      </button>

      <nav className="flex justify-between space-x-4">
        <a
          className="text-primary hover:text-primary font-base"
          href="#"
          onClick={handleLogout}
        >
          Logout
        </a>
        <Notification />
        <div className="flex flex-col">
          <div>
            <Link
              to="/settings"
              className="text-text hover:text-primary font-base mb-1"
            >
              <img src={settingsIcon} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
