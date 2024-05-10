import { useState } from 'react';
import { Link } from 'react-router-dom';

import '/src/styles/dashboard.css';
import Account from '../Account/Account';

function SideBar({ userData }) {
  return (
    <div className="sidebar">
      <div className="title">
        <h2>{userData.organizationName}</h2>
      </div>
      <div className="nav">
        <button className="sidebar-item">New Donation Post</button>
        <Link className="sidebar-item" onClick={() => <p>TEST</p>}>
          Manage Requests
        </Link>
        <Link className="sidebar-item" onClick={() => <p>TEST</p>}>
          Our Heros 🌟
        </Link>
      </div>
    </div>
  );
}

const Organization = () => {
  const [element, setElement] = useState(null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );
  console.log(userData);
  return (
    <div className="root-container">
      <SideBar userData={userData} />
      {element}
    </div>
  );
};

export default Organization;
