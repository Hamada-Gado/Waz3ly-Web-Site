import { useState } from "react";
import useFetch from "../../hooks/useFetch";
function getDesc(donation) {
  switch (donation.category) {
    case "Clothing":
      return `category: ${donation.category},\n
              Age: ${donation.age},\n
              Gender: ${donation.gender},\n
              Season: ${donation.season}`;
    case "Food":
      return `category: ${donation.category},\n
      Type: ${donation.type}`;
    case "Toys":
      return `category: ${donation.category},\n
              Age: ${donation.age},\n
              gender: ${donation.gender},\n
              Sub Category: ${donation.subCategory}`;
    case "Medical Supplies":
      return `category: ${donation.category},\n
      Sub Category: ${donation.subCategory}`;
    case "Blood Donation":
      return `category: ${donation.category},\n
      Organization: ${donation.organization}`;
    case "School Supplies":
      return `category: ${donation.category},\n
        Supply Type: ${donation.supplyType}`;
    case "Medical Cases":
      return `category: ${donation.category},\n
      Specialty: ${donation.specialty},\n
              Organization: ${donation.organization},\n
              Area: ${donation.area},\n
              Governorate: ${donation.governorate}`;
    case "Teaching Posts":
      return `category: ${donation.category},\n
      Subject: ${donation.subject},\n
              Area: ${donation.area},\n
              Governorate: ${donation.governorate}`;
    default:
      return "";
  }
}
const FinishedOrPending = () => {
  const [donations, setDonations] = useState(null);
  const [showDriverInfo, setShowDriverInfo] = useState(false);
  const [currDonation, setCurrDonation] = useState(null);
  useFetch("donations", setDonations);

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
                  donation.accepted || donation.pending || donation.completed
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
                  {getDesc(donation)
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
                  {donation.pending &&
                    !donation.accepted &&
                    (donation.category === "Medical Cases" ||
                      donation.category === "Teaching Posts" ||
                      donation.category === "Blood Donation") && (
                      <div className="flex justify-between">
                        <span className=" bottom-2 right-2 bg-accent text-white px-2 py-1 rounded-md">
                          <strong className="text-black font-bold">
                            Request Is Being Reviewed
                          </strong>
                        </span>
                      </div>
                    )}
                  {!donation.pending &&
                    donation.accepted &&
                    (donation.category === "Medical Cases" ||
                      donation.category === "Teaching Posts" ||
                      donation.category === "Blood Donation") && (
                      <div className="flex justify-between">
                        <span className=" bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md">
                          <strong className="text-black font-bold">
                            Request Approved
                          </strong>
                        </span>
                      </div>
                    )}
                  {donation.pending &&
                    donation.category !== "Medical Cases" &&
                    donation.category !== "Teaching Posts" &&
                    donation.category !== "Blood Donation" && (
                      <div className="flex justify-between">
                        <span className=" bottom-2 right-2 bg-accent text-white px-2 py-1 rounded-md">
                          <strong className="text-black font-bold">
                            ETA:{" "}
                            {donation.pickupDate.split("-")[2] -
                              new Date()
                                .toLocaleDateString()
                                .split("/")[1]}{" "}
                            days
                          </strong>
                        </span>
                        <button
                          className="bg-secondary text-black font-bold px-2 py-1 rounded-md"
                          onClick={() => {
                            setShowDriverInfo(true);
                            setCurrDonation(donation);
                          }}
                        >
                          DRIVER INFORMATION
                        </button>
                      </div>
                    )}
                  {donation.completed && (
                    <span className="bottom-2 right-2 bg-accent text-black font-bold px-2 py-1 rounded-md">
                      Completed
                    </span>
                  )}
                  {currDonation === donation && (
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                      <div className="bg-white p-4 rounded-md absolute">
                        <h3 className="text-xl font-bold">
                          Driver Information
                        </h3>
                        <p className="md:font-bold">Driver Name: John Doe</p>
                        <p className="md:font-bold">
                          PickUp Vehicle: {donation.pickupVehicle}{" "}
                          {donation.pickupVehicle === "Car"
                            ? "🚗"
                            : donation.pickupVehicle === "Truck"
                            ? "🚚"
                            : "🏍️"}
                        </p>
                        <p className="md:font-bold">
                          Phone Number: 123-456-7890
                        </p>
                        <p className="md:font-bold">License Plate: ABC123</p>
                        <button
                          className="absolute top-2 right-2 outline-none "
                          onClick={() => {
                            setShowDriverInfo(false);
                            setCurrDonation(null);
                          }}
                        >
                          ❌
                        </button>
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
