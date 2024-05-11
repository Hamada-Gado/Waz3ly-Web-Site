import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you use React Router for navigation
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { AccountType } from '../../enums/Enums';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    useFetch('users', setUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(
        'userData',
        JSON.stringify({ accountType: AccountType.Admin })
      );
      localStorage.setItem('defaultPath', '/admin');
      navigate('/admin', { replace: true });
    }

    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      if (users[i].username === username && users[i].password === password) {
        console.log('Login successful');
        console.log(users[i].accountType);
        localStorage.setItem('userData', JSON.stringify(users[i]));
        if (users[i].accountType === AccountType.Organization) {
          localStorage.setItem('defaultPath', '/organization');
          navigate('/organization', { replace: true });
        } else {
          localStorage.setItem('defaultPath', '/donor');
          navigate('/donor', { replace: true });
        }

        return;
      }
    }

    console.log('Login unsuccessful');
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg px-8 pb-8 max-w-md w-full space-y-8">
        <h1 className="text-3xl font-heading font-bold text-primary text-center">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-body text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-body text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md shadow-sm w-full"
          >
            Login
          </button>
        </form>
        <div className="text-sm text-gray-700 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
