import { useState } from "react";

import "/src/styles/dashboard.css";
import DonationsList from "/src/components/Donor/DonationsList";
import FinishedOrPending from "/src/pages/Donor/FinishedOrPending";
import DonorListOfOrgs from "../../components/Donor/DonorListOfOrgs";

function SideBar({ userData, setElement }) {
  return (
    <div className="sidebar">
      <div className="title">
        <h2>Welcome {userData.username}👑</h2>
      </div>
      <div className="nav">
        <button
          className="sidebar-item"
          onClick={() => {
            setElement(<DonationsList />);
          }}
        >
          All Donations/Requests
        </button>
        <button
          className="sidebar-item"
          onClick={() => {
            setElement(<FinishedOrPending />);
          }}
        >
          My Donations
        </button>
        <button
          className="sidebar-item"
          onClick={() => {
            setElement(<DonorListOfOrgs endpoint="users" />);
          }}
        >
          Registered Organizations
        </button>
      </div>
    </div>
  );
}

const Donor = () => {
  const [element, setElement] = useState(null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  return (
    <div className="root-container">
      <SideBar userData={userData} setElement={setElement} />
      {element}
    </div>
  );
};

export default Donor;
