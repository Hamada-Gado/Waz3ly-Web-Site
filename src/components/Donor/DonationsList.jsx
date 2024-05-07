import React, { useState, useEffect } from 'react';
//import tailwing css
import './styles.css';
import FilterCategory from './FilterCategory';

import { donationsTest } from '/src/pages/Donor/data.js';
import DonationFormDefault from './DonationFormDefault';
import FilterClothes from './FilterClothes';
import FilterFood from './FilterFood';
import FilterToys from './FilterToys';
import FilterMedicalSupplies from './FilterMedicalSupplies';
import FilterBloodDonations from './FilterBloodDonations';
import FilterSchoolSupplies from './FilterSchoolSupplies';

const DonationsList = () => {
  const [donations, setDonations] = useState(donationsTest);
  const [filter, setFilter] = useState('');
  const [selectedDonation, setSelectedDonation] = useState(null);
  console.log(donations);
  const [furtherFiltering, setFurtherFiltering] = useState(null);

  console.log(furtherFiltering);

  const filteredDonations = () => {
    if (furtherFiltering) {
      switch (furtherFiltering.type) {
        case 'Clothing':
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === 'Clothing' &&
              (donation.age === furtherFiltering?.ageValue ||
                donation.gender === furtherFiltering?.genderValue ||
                donation.season === furtherFiltering?.seasonValue)
            );
          });
        case 'Food':
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === 'Food' &&
              //loop on the array of types and check if the type is equal to the value of the donation type
              donation.type === furtherFiltering?.typeValue
            );
          });
        case 'Toys':
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === 'Toys' &&
              (donation.age === furtherFiltering?.ageValue ||
                donation.gender === furtherFiltering?.genderValue ||
                donation.subCategory === furtherFiltering?.categoryValue)
            );
          });
        case 'Medical Supplies':
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === 'Medical Supplies' &&
              donation.subCategory === furtherFiltering?.subCategoryValue
            );
          });
        case 'Blood Donation':
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.organization === furtherFiltering?.organizationValue
            );
          });
        case 'School Supplies':
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === 'School Supplies' &&
              donation.supplyType === furtherFiltering?.supplyValue
            );
          });
        default:
          break;
      }
    } else {
      return donations.filter((donation) => {
        return (
          !donation.pending &&
          !donation.completed &&
          (filter ? donation.category === filter : true) //if filter is selected, filter by category
        );
      });
    }
  };
  const handleFormSubmit = () => {
    // setDonations(
    //   donations.filter((donation) => donation.id !== selectedDonation.id)
    // );
    setSelectedDonation(null);
  };

  //re-render when change happens in donationTest object
  useEffect(() => {}, [donationsTest]);

  return (
    <div className="overflow-auto h-full w-full  grid gap-0 m-0 grid-cols-3 ">
      <div className="col-start-1 max-w-sm mb-2 p-8 -translate-y-12">
        {(filter === 'Clothing' && (
          <FilterClothes setFurtherFiltering={setFurtherFiltering} />
        )) ||
          (filter === 'Food' && (
            <FilterFood setFurtherFiltering={setFurtherFiltering} />
          )) ||
          (filter === 'Toys' && (
            <FilterToys setFurtherFiltering={setFurtherFiltering} />
          )) ||
          (filter === 'Medical Supplies' && (
            <FilterMedicalSupplies setFurtherFiltering={setFurtherFiltering} />
          )) ||
          (filter === 'Blood Donation' && (
            <FilterBloodDonations setFurtherFiltering={setFurtherFiltering} />
          )) ||
          (filter === 'School Supplies' && (
            <FilterSchoolSupplies setFurtherFiltering={setFurtherFiltering} />
          ))}
      </div>
      <div className="col-start-2 space-y-4">
        <h1 className="text-3xl font-bold text-primary text-center">
          Donations Requests
        </h1>
        <FilterCategory
          setFilter={setFilter}
          setFurtherFiltering={setFurtherFiltering}
        />

        {filteredDonations().map((donation) => (
          <div
            key={donation.id}
            className={`w-full border  border-accent bg-background-dark p-6 rounded-md ${
              selectedDonation === null
                ? 'transform transition duration-500 ease-in-out hover:scale-110 hover:bg-accent'
                : ''
            }`}
          >
            <h2 className="text-2xl text-black font-heading">
              {donation.title}
            </h2>
            <p className="text-base text-black font-body">
              {donation.description}
            </p>
            <button
              onClick={() => {
                selectedDonation === donation
                  ? setSelectedDonation(null)
                  : setSelectedDonation(donation);
              }}
              className="px-4 py-2 bg-primary text-white rounded font-heading text-xl"
            >
              Donate {selectedDonation !== donation ? '🔽' : '🔼'}
            </button>
            {selectedDonation === donation && (
              <DonationFormDefault
                selectedDonation={selectedDonation}
                setSelectedDonations={setSelectedDonation}
                onFormSubmit={handleFormSubmit}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationsList;
