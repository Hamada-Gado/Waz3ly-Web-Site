import { useState } from 'react';
import { Link } from 'react-router-dom';

import '/src/styles/dashboard.css';
import Submission from '../../components/Organization/Submissions';

function SideBar({ userData, setElement }) {
  return (
    <div className="sidebar">
      <div className="title">
        <h2>{userData.organizationName}</h2>
      </div>
      <div className="nav">
        <button
          className="sidebar-item"
          onClick={() => {
            setElement(<Submission setElement={setElement} />);
          }}
        >
          New Donation Request
        </button>
        <Link className="sidebar-item" onClick={() => <p>TEST</p>}>
          My Requests
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
  return (
    <div className="root-container">
      <SideBar userData={userData} setElement={setElement} />
      {element}
    </div>
  );
};

export default Organization;
