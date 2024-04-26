import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/Logo.png";

const Header = ({ currentPage }) => {
  const navigationLinks = [
    { name: "Settings", to: "/settings" },
    { name: "Logout", to: "/" },
  ];
  return (
    <header className="h-full flex justify-between items-center bg-background-main py-4 px-6 shadow-md">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>

      <nav className="flex space-x-4">
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
    </header>
  );
};

export default Header;
