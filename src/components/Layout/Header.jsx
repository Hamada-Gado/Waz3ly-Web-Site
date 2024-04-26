import React from "react";
import { Link } from "react-router-dom";

const Header = ({ currentPage }) => {
  const navigationLinks = [
    { name: "Home", to: "/" },
    { name: "Settings", to: "/settings" },
    { name: "Logout", to: "/logout" },
  ];
  return (
    <header className="flex justify-between items-center bg-background-dark py-4 px-6 shadow-md">
      <div className="img">
        <img
          src="../../../assets/Logo.png"
          alt="Logo"
          style={{ width: "10%", height: "10%" }}
          href="/Home"
        ></img>
      </div>

      <div className="flex text-2xl font-bold center">
        Team 92 (The Key_Strokes)
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
