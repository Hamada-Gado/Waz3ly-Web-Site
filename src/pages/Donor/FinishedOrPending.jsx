import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import SimpleMap from "../../components/Maps/SimpleMap";
function getOrg(donation, users) {
  // console.log(users);
  // console.log(donation);
  // console.log(users.find((user) => user.id === donation.organizationID));
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
      Subject: ${donation.subject},\n
      Max number of students: ${donation.numStudents},\n
      Address: ${organization.address},\n
      Organization Name: ${organization.organizationName}
               `;
    default:
      return "";
  }
}

const FinishedOrPending = () => {
  const [donations, setDonations] = useState(null);
  const [showCaseInfo, setShowCaseInfo] = useState(false);
  const [currDonation, setCurrDonation] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    useFetch("donations", setDonations);
    useFetch("users", setUsers);
  }, []);

  return (
    <>
      {!donations && <h1>Loading...</h1>}
      {donations && (
        <div className="py-8 flex flex-col w-full overflow-auto h-full items-center">
          <h1 className="text-3xl font-bold font-heading  text-primary text-center">
            Pending/Completed Donations
          </h1>
          <div className="space-y-4">
            {donations
              .filter(
                (donation) =>
                  donation.approved === 1 &&
                  donation.pending &&
                  (donation.accepted === 0 ||
                    donation.accepted === 1 ||
                    donation.accepted === 2 ||
                    donation.completed)
              )
              .map((donation) => (
                <div
                  key={donation.id}
                  className="border w-full  border-accent bg-background-dark p-6 rounded-md transform transition duration-500 ease-in-out hover:scale-100 "
                  style={{ minWidth: "500px" }} // Increase the width here
                >
                  <h2 className="text-2xl text-body font-heading text-black">
                    {donation.title}
                  </h2>

                  {donation.accepted === 0 && !donation.completed && (
                    <div className="flex justify-between">
                      <span className=" bottom-2 right-2 bg-accent text-white px-2 py-1 rounded-md">
                        <strong className="text-black font-bold">
                          REQUEST BEING PROCESSED
                        </strong>
                      </span>
                    </div>
                  )}
                  {donation.accepted === 1 && (
                    <div className="flex justify-between">
                      <button
                        className="bg-secondary top-2 right-2 absolute text-black font-bold px-2 py-1 rounded-md"
                        onClick={() => {
                          donation.completed = true;
                          setDonations([...donations], donation);
                          useUpdate("donations", donation, donation.id);
                        }}
                      >
                        MARK COMPLETED
                      </button>
                      <span className="  bg-accent text-white px-2 py-1 rounded-md ">
                        {!donation.completed && donation.pickupDate && (
                          <strong className="text-black font-bold">
                            ETA:{" "}
                            {donation.pickupDate.split("-")[2] -
                              new Date()
                                .toLocaleDateString()
                                .split("/")[1]}{" "}
                            days
                          </strong>
                        )}
                        {!donation.completed && !donation.pickupDate && (
                          <strong className="text-black font-bold">
                            Waiting for You
                          </strong>
                        )}
                        {donation.completed && (
                          <strong className="text-black font-bold">
                            COMPLETED
                          </strong>
                        )}
                      </span>

                      <button
                        className="bg-secondary right-2 absolute text-black font-bold px-2 py-1 rounded-md"
                        onClick={() => {
                          if (showCaseInfo) {
                            setShowCaseInfo(false);
                            setCurrDonation(null);
                          } else {
                            setShowCaseInfo(true);
                            setCurrDonation(donation);
                          }
                        }}
                      >
                        CASE INFORMATION{" "}
                        {currDonation !== donation ? "🔽" : "🔼"}
                      </button>
                    </div>
                  )}
                  {donation.accepted === 2 && (
                    <span className="bottom-2 right-2 bg-accent text-black font-bold px-2 py-1 rounded-md">
                      REQUEST NOT ACCEPTED
                    </span>
                  )}
                  {currDonation === donation && (
                    <div className=" top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-100">
                      <div className="bg-white w-full p-4 m-5 rounded-md right-auto ">
                        <h3 className="text-xl font-bold font-heading"></h3>
                        {getDesc(donation, users)
                          .split(",\n")
                          .map((desc, index) => (
                            <p
                              key={index}
                              className="text-base font-body text-black"
                            >
                              <strong>
                                {desc.split(":")[0].charAt(0).toUpperCase() +
                                  desc.split(":")[0].slice(1)}{" "}
                                :{" "}
                              </strong>
                              {desc.split(":")[1].charAt(0).toUpperCase() +
                                desc.split(":")[1].slice(1)}
                            </p>
                          ))}
                        <p className="font-bold text-base font-body">
                          PickUp Vehicle:{" "}
                          {donation.pickupVehicle === "Car"
                            ? "🚗 ~ Car"
                            : donation.pickupVehicle === "Truck"
                            ? "🚚 ~ Truck"
                            : "🏍️ ~ Motorcycle"}
                        </p>
                        <p className="font-bold text-base font-body">
                          Organization Location:
                        </p>
                        {<SimpleMap onChange={() => {}} />}~{" "}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FinishedOrPending;
