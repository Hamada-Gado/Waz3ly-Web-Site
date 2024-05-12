import { useState, useEffect, React } from 'react';
import useFetch from '../../hooks/useFetch';
import '/src/pages/Admin/Dashboard.css';
import DonationsList from './DonationsList';

function ListOfDonations({ setElement }) {
  const [donations, setDonation] = useState(null);
  const [myDonations, setMyDonations] = useState(null);
  const userData = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    useFetch('donations', setDonation);
  }, []);

  useEffect(() => {
    if (donations) {
      const myDonations = donations.filter(
        (donation) => donation.organizationID === userData.id
      );
      setMyDonations(myDonations);
    }
  }, [donations]);

  return (
    <>
      {myDonations && (
        <div className="h-full w-full overflow-auto pl-8 space-y-4">
          <div className="pr-4 text-primary text-2xl">List of Donations</div>
          <DonationsList
            setElement={setElement}
            donations={myDonations}
            setDonations={setMyDonations}
          />
        </div>
      )}
    </>
  );
}

export default ListOfDonations;
