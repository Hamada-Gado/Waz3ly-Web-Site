import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/Logo.png";

const Header = ({ currentPage }) => {
  const navigationLinks = [
    { name: "Settings", to: "/settings" },
    { name: "Logout", to: "/logout" },
  ];
  return (
    <header className="flex justify-between items-center bg-background-dark py-4 px-6 shadow-md">
      <div className="img">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "10%", height: "10%" }}
          href="/Home"
        ></img>
      </div>

      <div className="flex">
        <nav className="space-x-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-text hover:text-primary font-base ${
                currentPage === link.name ? "underline text-secondary" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
