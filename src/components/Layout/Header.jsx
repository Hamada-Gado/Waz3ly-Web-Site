import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/Logo.png';

const Header = () => {
  return (
    <header className="h-full flex justify-between items-center bg-background-main py-4 px-6 shadow-md">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>

      <nav className="flex space-x-4">
        <Link
          to={'/settings'}
          className="text-text hover:text-primary font-base"
          onClick={() => localStorage.removeItem('userData')}
        >
          Settings
        </Link>
        <Link
          to={'/'}
          replace={true}
          className="text-text hover:text-primary font-base"
          onClick={() => localStorage.removeItem('userData')}
        >
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;
