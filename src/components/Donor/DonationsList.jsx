import React, { useState, useEffect, Fragment } from 'react';
import FilterCategory from './FilterCategory';
import DonationFormDefault from './DonationFormDefault';
import FilterClothes from './FilterClothes';
import FilterFood from './FilterFood';
import FilterToys from './FilterToys';
import FilterMedicalSupplies from './FilterMedicalSupplies';
import FilterBloodDonations from './FilterBloodDonations';
import FilterSchoolSupplies from './FilterSchoolSupplies';
import FilterMedicalCases from './FilterMedicalCases';
import FilterTeachingPosts from './FilterTeachingPosts';
import useFetch from '../../hooks/useFetch';

function getDesc(donation) {
  switch (donation.category) {
    case 'Clothing':
      return `category: ${donation.category},\n
              Age: ${donation.age},\n
              Gender: ${donation.gender},\n
              Season: ${donation.season}`;
    case 'Food':
      return `category: ${donation.category},\n
      Type: ${donation.type}`;
    case 'Toys':
      return `category: ${donation.category},\n
              Age: ${donation.age},\n
              gender: ${donation.gender},\n
              Sub Category: ${donation.subCategory}`;
    case 'Medical Supplies':
      return `category: ${donation.category},\n
      Sub Category: ${donation.subCategory}`;
    case 'Blood Donation':
      return `category: ${donation.category},\n
      Organization: ${donation.organization}`;
    case 'School Supplies':
      return `category: ${donation.category},\n
        Supply Type: ${donation.supplyType}`;
    case 'Medical Cases':
      return `category: ${donation.category},\n
      Specialty: ${donation.specialty},\n
              Organization: ${donation.organization},\n
              Area: ${donation.area},\n
              Governorate: ${donation.governorate}`;
    case 'Teaching Posts':
      return `category: ${donation.category},\n
      Subject: ${donation.subject},\n
              Area: ${donation.area},\n
              Governorate: ${donation.governorate}`;
    default:
      return '';
  }
}

const DonationsList = () => {
  const [donations, setDonations] = useState(null);
  const [filter, setFilter] = useState('');
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [furtherFiltering, setFurtherFiltering] = useState(null);

  useEffect(() => {
    useFetch('donations', setDonations);
  }, []);

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
        case 'Medical Cases':
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === 'Medical Cases' &&
              (donation.specialty === furtherFiltering?.specialtyValue ||
                donation.organization === furtherFiltering?.organizationValue ||
                donation.area === furtherFiltering?.areaValue ||
                donation.governorate === furtherFiltering?.governmentValue)
            );
          });
        case 'Teaching Posts':
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === 'Teaching Posts' &&
              (donation.subject === furtherFiltering?.subjectValue ||
                donation.area === furtherFiltering?.areaValue ||
                donation.governorate === furtherFiltering?.governorateValue)
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

  return (
    <>
      {!donations && <h1>Loading...</h1>}
      {donations && (
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
                <FilterMedicalSupplies
                  setFurtherFiltering={setFurtherFiltering}
                />
              )) ||
              (filter === 'Blood Donation' && (
                <FilterBloodDonations
                  setFurtherFiltering={setFurtherFiltering}
                />
              )) ||
              (filter === 'Medical Cases' && (
                <FilterMedicalCases setFurtherFiltering={setFurtherFiltering} />
              )) ||
              (filter === 'Teaching Posts' && (
                <FilterTeachingPosts
                  setFurtherFiltering={setFurtherFiltering}
                />
              )) ||
              (filter === 'School Supplies' && (
                <FilterSchoolSupplies
                  setFurtherFiltering={setFurtherFiltering}
                />
              ))}
          </div>
          <div className="col-start-2 space-y-4">
            <h1 className="text-3xl font-bold font-heading text-primary text-center">
              Donations Requests
            </h1>
            <FilterCategory
              donations={donations}
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
                {getDesc(donation)
                  .split(',\n')
                  .map((desc, index) => (
                    <p key={index} className="text-base font-body text-black">
                      <strong>
                        {desc.split(':')[0].charAt(0).toUpperCase() +
                          desc.split(':')[0].slice(1)}{' '}
                        :{' '}
                      </strong>
                      {desc.split(':')[1].charAt(0).toUpperCase() +
                        desc.split(':')[1].slice(1)}
                    </p>
                  ))}

                {donation.category !== 'Medical Cases' &&
                  donation.category !== 'Teaching Posts' && (
                    <button
                      onClick={() => {
                        selectedDonation === donation
                          ? setSelectedDonation(null)
                          : setSelectedDonation(donation);
                      }}
                      className="px-4 py-2 bg-primary font-bold text-black rounded font-heading text-xl"
                    >
                      DONATE {selectedDonation !== donation ? '🔽' : '🔼'}
                    </button>
                  )}
                {(donation.category === 'Medical Cases' ||
                  donation.category === 'Teaching Posts') && (
                  <button
                    onClick={() => {
                      setDonations((prevDonations) =>
                        prevDonations.filter((don) => don.id !== donation.id)
                      );
                      donation.pending = true;
                      useUpdate('donations', donation, donation?.id);
                    }}
                    className="px-4 py-2 bg-primary font-bold text-black rounded font-heading text-xl"
                  >
                    CONTRIBUTE TO CAUSE{' '}
                    {donation.category === 'Medical Cases' ? '🧑‍⚕️' : '🧑‍🏫'}
                  </button>
                )}
                {selectedDonation === donation &&
                  (donation.category !== 'Medical Cases' ||
                    donation.category !== 'Teaching Posts') && (
                    <DonationFormDefault
                      selectedDonation={selectedDonation}
                      setSelectedDonations={setSelectedDonation}
                    />
                  )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DonationsList;

// Sample data
// "donations": [
//   {
//     "id": "1",
//     "title": "Donation 1",
//     "description": "This is donation request 1.",
//     "pending": false,
//     "completed": false,
//     "category": "Food",
//     "type": "Fruits"
//   },
//   {
//     "id": "2",
//     "title": "Donation 2",
//     "description": "This is donation request 2.",
//     "pending": false,
//     "completed": false,
//     "category": "Toys",
//     "age": "0-10",
//     "gender": "Male",
//     "subCategory": "Dolls"
//   },
//   {
//     "id": "3",
//     "title": "Donation 3",
//     "description": "This is donation request 3.",
//     "pending":false,
//     "completed": false,
//     "category": "Clothing",
//     "age": "0-10",
//     "gender": "Female",
//     "season": "Winter"
//   },
//   {
//     "id": "4",
//     "title": "Donation 4",
//     "description": "This is donation request 4.",
//     "pending": false,
//     "completed": false,
//     "category": "Clothing",
//     "age": "11-20",
//     "gender": "Male",
//     "season": "Summer"
//   },
//   {
//     "id": "5",
//     "title": "Donation 5",
//     "description": "This is donation request 5.",
//     "pending": false,
//     "completed": false,
//     "category": "Toys",
//     "age": "11-20",
//     "gender": "Female",
//     "subCategory": "Outdoor"
//   },
//   {
//     "id": "6",
//     "title": "Donation 6",
//     "description": "This is donation request 6.",
//     "pending": false,
//     "completed": false,
//     "category": "School Supplies",
//     "supplyType": "Stationary"
//   },
//   {
//     "id": "7",
//     "title": "Donation 7",
//     "description": "This is donation request 7.",
//     "pending": false,
//     "completed": false,
//     "category": "Medical Supplies",
//     "subCategory": "Medication"
//   },
//   {
//     "id": "8",
//     "title": "Donation 8",
//     "description": "This is donation request 8.",
//     "pending": false,
//     "completed": false,
//     "category": "Blood Donation",
//     "organization": "Governorate"
//   },
//   {
//     "id": "9",
//     "title": "Donation 9",
//     "description": "This is donation request 9.",
//     "pending": false,
//     "completed": false,
//     "category": "Food",
//     "type": "Vegetables"
//   },
//   {
//     "id": "10",
//     "title": "Donation 10",
//     "description": "This is donation request 10.",
//     "pending": false,
//     "completed": false,
//     "category": "Blood Donation",
//     "organization": "Hospital"
//   },
//   {
//     "id": "11",
//     "title": "Donation 11",
//     "description": "This is donation request 11.",
//     "pending": false,
//     "completed": false,
//     "category": "School Supplies",
//     "supplyType": "Books"
//   },
//   {
//     "id": "12",
//     "title": "Donation 12",
//     "description": "This is donation request 12.",
//     "pending": false,
//     "completed": false,
//     "category": "Medical Cases",
//     "specialty": "Surgeon",
//     "organization": "Org1",
//     "area": "Area1",
//     "governorate": "Gov1"
//   },
//   {
//     "id": "13",
//     "title": "Donation 13",
//     "description": "This is donation request 13.",
//     "pending": false,
//     "completed": false,
//     "category": "Medical Cases",
//     "specialty": "Dentists",
//     "organization": "Org2",
//     "area": "Area2",
//     "governorate": "Gov2"
//   },
//   {
//     "id": "14",
//     "title": "Donation 14",
//     "description": "This is donation request 14.",
//     "pending": false,
//     "completed": false,
//     "category": "Teaching Posts",
//     "subject": "Math",
//     "area": "Area1",
//     "governorate": "Gov1"
//   },
//   {
//     "id": "15",
//     "title": "Donation 15",
//     "description": "This is donation request 15.",
//     "pending": false,
//     "completed": false,
//     "category": "Teaching Posts",
//     "subject": "Biology",
//     "area": "Area2",
//     "governorate": "Gov2"
//   }
// ],
