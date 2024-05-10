import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/src/assets/Icon.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      id="main-header"
      className="flex justify-between items-center bg-background-main py-4 px-6 shadow-md"
    >
      <button
        onClick={() => {
          const path = localStorage.getItem('defaultPath');
          if (path) navigate(path);
          else navigate('/');
        }}
      >
        <img src={logo} alt="Logo" className="h-10" />
      </button>

      <nav className="flex space-x-4">
        <button
          onClick={() => {
            if (localStorage.getItem('defaultPath')) navigate('/settings');
            else navigate('/');
          }}
          className="text-text hover:text-primary font-base"
        >
          Settings
        </button>
        <Link
          to={'/'}
          replace={true}
          className="text-text hover:text-primary font-base"
          onClick={() => localStorage.clear()}
        >
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;
