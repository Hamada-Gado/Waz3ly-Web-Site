import React, { useState, useEffect } from "react";
import FilterCategory from "./FilterCategory";
import { donationsTest } from "/src/pages/Donor/data.js";
import DonationFormDefault from "./DonationFormDefault";
import FilterClothes from "./FilterClothes";
import FilterFood from "./FilterFood";
import FilterToys from "./FilterToys";
import FilterMedicalSupplies from "./FilterMedicalSupplies";
import FilterBloodDonations from "./FilterBloodDonations";
import FilterSchoolSupplies from "./FilterSchoolSupplies";

const DonationsList = () => {
  const [donations, setDonations] = useState(donationsTest);
  const [filter, setFilter] = useState("");
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [furtherFiltering, setFurtherFiltering] = useState(null);

  console.log(furtherFiltering);

  const filteredDonations = () => {
    if (furtherFiltering) {
      switch (furtherFiltering.type) {
        case "Clothing":
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === "Clothing" &&
              (donation.age === furtherFiltering?.ageValue ||
                donation.gender === furtherFiltering?.genderValue ||
                donation.season === furtherFiltering?.seasonValue)
            );
          });
        case "Food":
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === "Food" &&
              //loop on the array of types and check if the type is equal to the value of the donation type
              donation.type === furtherFiltering?.typeValue
            );
          });
        case "Toys":
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === "Toys" &&
              (donation.age === furtherFiltering?.ageValue ||
                donation.gender === furtherFiltering?.genderValue ||
                donation.subCategory === furtherFiltering?.categoryValue)
            );
          });
        case "Medical Supplies":
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === "Medical Supplies" &&
              donation.subCategory === furtherFiltering?.subCategoryValue
            );
          });
        case "Blood Donation":
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.organization === furtherFiltering?.organizationValue
            );
          });
        case "School Supplies":
          return donations.filter((donation) => {
            return (
              !donation.pending &&
              !donation.completed &&
              donation.category === "School Supplies" &&
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
    setDonations(
      donations.filter((donation) => donation.id !== selectedDonation.id)
    );
    setSelectedDonation(null);
  };

  //re-render when change happens in donationTest object
  useEffect(() => {}, [donationsTest]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-orange-500 text-center">
        Donations Requests
      </h1>
      <FilterCategory
        setFilter={setFilter}
        setFurtherFiltering={setFurtherFiltering}
      />
      {(filter === "Clothing" && (
        <FilterClothes setFurtherFiltering={setFurtherFiltering} />
      )) ||
        (filter === "Food" && (
          <FilterFood setFurtherFiltering={setFurtherFiltering} />
        )) ||
        (filter === "Toys" && (
          <FilterToys setFurtherFiltering={setFurtherFiltering} />
        )) ||
        (filter === "Medical Supplies" && (
          <FilterMedicalSupplies setFurtherFiltering={setFurtherFiltering} />
        )) ||
        (filter === "Blood Donation" && (
          <FilterBloodDonations setFurtherFiltering={setFurtherFiltering} />
        )) ||
        (filter === "School Supplies" && (
          <FilterSchoolSupplies setFurtherFiltering={setFurtherFiltering} />
        ))}
      {filteredDonations().map((donation) => (
        <div
          key={donation.id}
          className={`w-full border border-orange-500 bg-orange-100 p-6 rounded-md ${
            selectedDonation === null
              ? "transform transition duration-500 ease-in-out hover:scale-110 hover:bg-orange-200"
              : ""
          }`}
        >
          <h2 className="text-xl text-black">{donation.title}</h2>
          <p className="text-base text-black">{donation.description}</p>
          <button
            onClick={() => {
              selectedDonation === donation
                ? setSelectedDonation(null)
                : setSelectedDonation(donation);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Donate {selectedDonation !== donation ? "🔽" : "🔼"}
          </button>
          {selectedDonation === donation && (
            <DonationFormDefault
              selectedDonation={selectedDonation}
              onFormSubmit={handleFormSubmit}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DonationsList;
