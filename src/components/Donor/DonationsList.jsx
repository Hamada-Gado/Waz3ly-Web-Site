import React, { useState, useEffect, Fragment } from "react";
import FilterCategory from "./FilterCategory";
import DonationFormDefault from "./DonationFormDefault";
import FilterClothes from "./FilterClothes";
import FilterFood from "./FilterFood";
import FilterToys from "./FilterToys";
import FilterMedicalSupplies from "./FilterMedicalSupplies";
import FilterBloodDonations from "./FilterBloodDonations";
import FilterSchoolSupplies from "./FilterSchoolSupplies";
import FilterMedicalCases from "./FilterMedicalCases";
import FilterTeachingPosts from "./FilterTeachingPosts";
import useFetch from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import SimpleMap from "../Maps/SimpleMap";
import medicalDevice from "./medicalDevice.webp";
import Book from "./Book.jpg";

function getOrg(donation, users) {
  return users.find((user) => user.id === donation.organizationID);
}
function getDesc(donation, users) {
  const organization = getOrg(donation, users);
  switch (donation.category) {
    case "Clothing":
      return `category: ${donation.category},\n
              type: ${donation.type},\n
              Age: ${donation.age},\n
              Gender: ${donation.gender},\n
              Season: ${donation.season},\n
              material: ${donation.material},\n
              quantity: ${donation.quantity},\n
              Organization Name: ${organization.organizationName}
               `;
    case "Food":
      return `category: ${donation.category},\n
      Type: ${donation.type},\n
      Item: ${donation.item},\n
      Quantity: ${donation.quantity}${
        donation.type === "Fruits" || donation.type === "Vegetables" ? "kg" : ""
      },\n
      Organization Name: ${organization.organizationName}`;
    case "Toys":
      return `category: ${donation.category},\n
              Age: ${donation.age},\n
              gender: ${donation.gender},\n
              Sub Category: ${donation.subCategory},\n
              Organization Name: ${organization.organizationName}
               `;
    case "Medical Supplies":
      return `category: ${donation.category},\n
              Sub Category: ${donation.subCategory},\n
              device type: ${donation.deviceType},\n
              use : ${donation.use},\n
              quantity: ${donation.quantity},\n
              Organization Name: ${organization.organizationName}
               
              `;
    case "Blood Donation":
      return `Category: ${donation.category},\n
      Patient name: ${donation.patientName},\n
      Blood type: ${donation.bloodType},\n
      Hospital Name: ${organization.organizationName},\n
      Area: ${organization.area},\n
      Governorate: ${organization.governorate},\n
      Hospital address: ${organization.address},\n
      Hospital phone: ${organization.contactNumber},\n
      Organization Name: ${organization.organizationName}
               `;
    case "School Supplies":
      if (donation.supplyType === "Stationary") {
        return `category: ${donation.category},\n
        Supply Type: ${donation.supplyType},\n
        type: ${donation.type},\n
        Quantity: ${donation.quantity},\n
        Organization Name: ${organization.organizationName}
               `;
      }
      return `category: ${donation.category},\n
              Supply Type: ${donation.supplyType},\n
              Quantity: ${donation.quantity},\n
              Book Name: ${donation.name},\n
              Book Author: ${donation.author},\n
              book language: ${donation.language},\n
              book edition: ${donation.edition},\n
              book summary: ${donation.shortDescription},\n
              Organization Name: ${organization.organizationName}
               `;
    case "Medical Cases":
      return `category: ${donation.category},\n
              patient name: ${donation.patientName},\n
              patient age: ${donation.age},\n
              patient gender: ${donation.gender},\n
              patient weight: ${donation.weight}KG,\n
              Hospital Name: ${organization.organizationName},\n
              Specialty: ${donation.medicalSpecialty},\n
              case description: ${donation.caseDescription},\n
              Address: ${organization.address},\n
              Organization Name: ${organization.organizationName}
               `;
    case "Teaching Posts":
      return `category: ${donation.category},\n
      Subject: ${donation.subjects},\n
      Max number of students: ${donation.numStudents},\n
      Address: ${organization.address},\n
      Organization Name: ${organization.organizationName}
               `;
    default:
      return "";
  }
}

const DonationsList = () => {
  const [donations, setDonations] = useState(null);
  const [filter, setFilter] = useState("");
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [furtherFiltering, setFurtherFiltering] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    useFetch("donations", setDonations);
    useFetch("users", setUsers);
  }, []);

  const filteredDonations = () => {
    if (furtherFiltering) {
      switch (furtherFiltering.type) {
        case "Clothing":
          return donations.filter((donation) => {
            return (
              donation.approved === 1 &&
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
              donation.approved === 1 &&
              !donation.pending &&
              !donation.completed &&
              donation.category === "Food" &&
              donation.type === furtherFiltering?.typeValue
            );
          });
        case "Toys":
          return donations.filter((donation) => {
            return (
              donation.approved === 1 &&
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
              donation.approved === 1 &&
              !donation.pending &&
              !donation.completed &&
              donation.category === "Medical Supplies" &&
              donation.subCategory === furtherFiltering?.subCategoryValue
            );
          });
        case "Blood Donation":
          return donations.filter((donation) => {
            const org = getOrg(donation, users);
            return (
              donation.approved === 1 &&
              !donation.pending &&
              !donation.completed &&
              (org.organizationName === furtherFiltering?.organizationValue ||
                org.governorate === furtherFiltering?.governorateValue ||
                org.area === furtherFiltering?.areaValue)
            );
          });
        case "School Supplies":
          return donations.filter((donation) => {
            return (
              donation.approved === 1 &&
              !donation.pending &&
              !donation.completed &&
              donation.category === "School Supplies" &&
              donation.supplyType === furtherFiltering?.supplyValue
            );
          });
        case "Medical Cases":
          return donations.filter((donation) => {
            const org = getOrg(donation, users);
            return (
              donation.approved === 1 &&
              !donation.pending &&
              !donation.completed &&
              donation.category === "Medical Cases" &&
              (donation.medicalSpecialty === furtherFiltering?.specialtyValue ||
                org.organizationName === furtherFiltering?.organizationValue ||
                org.area === furtherFiltering?.areaValue ||
                org.governorate === furtherFiltering?.governmentValue)
            );
          });
        case "Teaching Posts":
          return donations.filter((donation) => {
            const org = getOrg(donation, users);
            return (
              donation.approved === 1 &&
              !donation.pending &&
              !donation.completed &&
              donation.category === "Teaching Posts" &&
              (donation.subjects === furtherFiltering?.subjectValue ||
                org.area === furtherFiltering?.areaValue ||
                org.governorate === furtherFiltering?.governorateValue)
            );
          });
        default:
          break;
      }
    } else {
      return donations.filter((donation) => {
        return (
          donation.approved === 1 &&
          !donation.pending &&
          !donation.completed &&
          (filter ? donation.category === filter : true) //if filter is selected, filter by category
        );
      });
    }
  };

  return (
    <>
      {(!donations || !users) && <h1>Loading...</h1>}
      {donations && users && (
        <div className="h-full bg-background-main flex flex-col items-center py-4 overflow-y-auto">
          <div className="overflow-auto h-full w-full  grid gap-0 m-0 grid-cols-3 ">
            <div className="col-start-1 max-w-sm mb-2 p-8 -translate-y-12">
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
                  <FilterMedicalSupplies
                    setFurtherFiltering={setFurtherFiltering}
                  />
                )) ||
                (filter === "Blood Donation" && (
                  <FilterBloodDonations
                    setFurtherFiltering={setFurtherFiltering}
                  />
                )) ||
                (filter === "Medical Cases" && (
                  <FilterMedicalCases
                    setFurtherFiltering={setFurtherFiltering}
                  />
                )) ||
                (filter === "Teaching Posts" && (
                  <FilterTeachingPosts
                    setFurtherFiltering={setFurtherFiltering}
                  />
                )) ||
                (filter === "School Supplies" && (
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
                  
            {filteredDonations().map((donation) => {
              return (
                <div
                  key={donation.id}
                  className={`w-full border border-accent bg-background-dark p-6 rounded-md ${
                    selectedDonation === null
                      ? "transform transition duration-500  ease-in-out hover:scale-105 hover:bg-accent"
                      : ""
                  }`}
                >
                  <h2 className="text-2xl text-black font-heading">
                    {donation.title}
                  </h2>
                  {getDesc(donation, users)
                    .split(",\n")
                    .map((desc, index) => (
                      <p key={index} className="text-base font-body text-black">
                        <strong>
                          {desc.split(":")[0].charAt(0).toUpperCase() +
                            desc.split(":")[0].slice(1)}{" "}
                          :{" "}
                        </strong>
                        {desc.split(":")[1].charAt(0).toUpperCase() +
                          desc.split(":")[1].slice(1)}
                      </p>
                    ))}

                  {donation.category === "Medical Supplies" && (
                    <img
                      className="rounded-lg mt-4"
                      src={medicalDevice}
                      alt="Medical Device"
                    ></img>
                  )}
                  {donation.category === "School Supplies" &&
                    donation.supplyType === "Books" && (
                      <img
                        className="rounded-lg mt-4"
                        src={Book}
                        alt="Book"
                      ></img>
                    )}
                  <p className="font-bold text-base font-body">
                    Organization Location:
                  </p>
                  <div>{<SimpleMap onChange={() => {}} />}</div>

                    {donation.category !== "Medical Cases" &&
                      donation.category !== "Teaching Posts" && (
                        <button
                          onClick={() => {
                            selectedDonation === donation
                              ? setSelectedDonation(null)
                              : setSelectedDonation(donation);
                          }}
                          className="px-4 py-2 mt-4 bg-primary font-bold text-black rounded font-heading text-xl"
                        >
                          DONATE {selectedDonation !== donation ? "🔽" : "🔼"}
                        </button>
                      )}
                    {(donation.category === "Medical Cases" ||
                      donation.category === "Teaching Posts") && (
                      <button
                        onClick={() => {
                          setDonations((prevDonations) =>
                            prevDonations.filter(
                              (don) => don.id !== donation.id
                            )
                          );
                          donation.pending = true;
                          useUpdate("donations", donation, donation.id);
                        }}
                        className="px-4 py-2 mt-4 bg-primary font-bold text-black rounded font-heading text-xl"
                      >
                        CONTRIBUTE TO CAUSE{" "}
                        {donation.category === "Medical Cases" ? "🧑‍⚕️" : "🧑‍🏫"}
                      </button>
                    )}
                    {selectedDonation === donation &&
                      (donation.category !== "Medical Cases" ||
                        donation.category !== "Teaching Posts") && (
                        <DonationFormDefault
                          selectedDonation={selectedDonation}
                          setSelectedDonations={setSelectedDonation}
                        />
                      )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationsList;