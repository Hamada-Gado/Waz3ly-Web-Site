import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentPage }) => {
  const navigationLinks = [
    { name: 'Home', to: '/' },
    { name: 'Settings', to: '/settings' },
    { name: 'Logout', to: '/logout' },
  ];
  return (
    <header className="flex justify-between items-center bg-background-dark py-4 px-6 shadow-md">
      <div className="text-2xl font-bold">Team 92 (The Key_Strokes)</div>
      <nav className="flex space-x-4">
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className={`text-text hover:text-primary font-base ${
              currentPage === link.name ? 'underline text-secondary' : ''
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
