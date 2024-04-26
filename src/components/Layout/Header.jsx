import React from "react";

const Header = ({ currentPage }) => {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Settings", href: "/settings" },
    { name: "Logout", href: "/logout" },
  ];
  return (
    <header className="flex justify-between items-center bg-background-dark py-4 px-6 shadow-md">
      <div className="text-2xl font-bold">Team 92 (The Key_Strokes)</div>
      <nav className="flex space-x-4">
        {navigationLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-text hover:text-primary font-base ${
              currentPage === link.name ? "underline text-secondary" : ""
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
