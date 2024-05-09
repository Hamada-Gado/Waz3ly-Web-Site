import { useState } from 'react';
import { Link } from 'react-router-dom';

import '/src/styles/dashboard.css';

function SideBar({ userData }) {
  return (
    <div className="sidebar">
      <div className="title">
        <h2>{userData.organizationName}</h2>
      </div>
      <div className="nav">
        <Link className="sidebar-item" to="/organization/requests">
          Manage Requests
        </Link>
        <Link className="sidebar-item" to="/organization/heros">
          Our Heros 🌟
        </Link>
        <Link className="sidebar-item" to="/account">
          Manage Account
        </Link>
      </div>
    </div>
  );
}

const Organization = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [element, setElement] = useState(null);
  return (
    <div className="root-container">
      <SideBar userData={userData} />
      {element}
    </div>
  );
};

export default Organization;
