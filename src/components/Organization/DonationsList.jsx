import { useState, useEffect } from 'react';
import deleteResource from '../../hooks/deleteResource';
import useUpdate from '../../hooks/useUpdate';

import Submission from './Submissions';

function DonationItem({ setElement, donations, setDonations, donation }) {
  async function deleteDonationHandler(id) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    userData.donations = userData.donations.filter(
      (donation) => donation.organizationID !== id
    );
    localStorage.setItem('userData', JSON.stringify(userData));
    useUpdate('users', userData, userData.id);
    await deleteResource('donations', id);
    setDonations(donations.filter((donation) => donation.id !== id));
  }

  const [donationData, setDonationData] = useState(null);

  useEffect(() => {
    donationData &&
      setElement(
        <Submission
          setElement={setElement}
          isUpdate={true}
          initFormData={donationData}
        />
      );
  }, [donationData]);

  return (
    <div className="flex items-center justify-between my-4 mr-2 px-4 py-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200">
      <div className="flex items-center space-x-3">
        <span className="text-lg font-medium">{donation.title}</span>
      </div>
      <div className="flex space-x-2">
        {
          <button
            type="button"
            className={
              (donation.completed ? 'bg-accept' : 'bg-warning') +
              ' rounded-md px-2 py-1'
            }
            disabled
          >
            {donation.completed ? 'Completed' : 'Pending'}
          </button>
        }
        {
          <button
            type="button"
            className="view-but"
            onClick={() => setDonationData(donation)}
          >
            View
          </button>
        }
        {
          <button
            type="button"
            className="delete-but"
            onClick={() => deleteDonationHandler(donation.id)}
          >
            Delete
          </button>
        }
      </div>
    </div>
  );
}

function DonationList({ setElement, donations, setDonations }) {
  return (
    <div className="user-list">
      {donations.map((donation) => (
        <DonationItem
          setElement={setElement}
          key={donation.id}
          donations={donations}
          setDonations={setDonations}
          donation={donation}
        />
      ))}
    </div>
  );
}

export default DonationList;
