import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/Logo.png';

const Header = ({ currentPage }) => {
  const navigationLinks = [
    { name: 'Settings', to: '/settings' },
    { name: 'Logout', to: '/logout' },
  ];
  return (
    <header className="h-full flex justify-between items-center bg-background-dark py-4 px-6 shadow-md">
      <div className="img">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '20%', height: '20%' }}
          ></img>
        </Link>
      </div>

      <div className="flex">
        <nav className="space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
