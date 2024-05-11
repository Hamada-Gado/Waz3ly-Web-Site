import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import SimpleMap from "../../components/Maps/SimpleMap";
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
  const [showCaseInfo, setShowCaseInfo] = useState(false);
  const [currDonation, setCurrDonation] = useState(null);

  useEffect(() => {
    useFetch("donations", setDonations);
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
                            Waiting for u mf
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
                      <div className="bg-white p-4 m-5 rounded-md right-auto ">
                        <h3 className="text-xl font-bold font-heading"></h3>
                        {getDesc(donation)
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
                        {<SimpleMap onChange={() => {}} />}
                        <p className="font-bold text-base font-body">
                          PickUp Vehicle:{" "}
                          {donation.pickupVehicle === "Car"
                            ? "🚗"
                            : donation.pickupVehicle === "Truck"
                            ? "🚚"
                            : "🏍️"}
                        </p>
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
