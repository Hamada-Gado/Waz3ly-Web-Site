import { useState, React } from "react";
import "../../pages/Admin/Dashboard.css";

function ToolBar({
  users,
  filter,
  search,
  handleFilterChange,
  handleSearchChange,
}) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div
      className="w-3/4
	grid
	grid-cols-[25%_20%_20%_20%_15%]	
	gap-6
	pb-4"
    >
      <input
        type="text"
        placeholder="Search organizations..."
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="searchbar"
      />
      <div
        className="dropdown relative w-3/4  rounded-md border border-gray-300 bg-background-dark text-primary px-3 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
        onClick={() => {
          setIsOpen1(!isOpen1);
        }}
      >
        <span>Area</span>
        {isOpen1 && (
          <div
            className="absolute
		  top-full
  
		  left-0
		  w-full h-20
  
		  rounded-md border border-gray-300
  
		  bg-white
		  shadow-md
  
		  grid grid-rows-3 justify-items-center items-center"
          >
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("Naser City");
                setIsOpen1(false);
              }}
            >
              Nasr City
            </div>
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("Dokki");
                setIsOpen1(false);
              }}
            >
              Dokki
            </div>
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("Sharm El-Sheikh");
                setIsOpen1(false);
              }}
            >
              Sharm El-Sheikh
            </div>
          </div>
        )}
      </div>
      <div
        className="dropdown relative w-3/4 rounded-md border border-gray-300 bg-background-dark text-primary px-3 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
        onClick={() => {
          setIsOpen2(!isOpen2);
        }}
      >
        <span>Governorate</span>
        {isOpen2 && (
          <div
            className=" absolute
		  top-full
  
		  left-0
		  w-full h-28
  
		  rounded-md border border-gray-300
  
		  bg-white
		  shadow-md
  
		  grid grid-rows-3 justify-items-center items-center"
          >
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("Cairo");
                setIsOpen2(false);
              }}
            >
              Cairo
            </div>
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("South Sinai");
                setIsOpen2(false);
              }}
            >
              South Sinai
            </div>
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("Giza");
                setIsOpen2(false);
              }}
            >
              Giza
            </div>
          </div>
        )}
      </div>
      <div
        className="dropdown relative w-3/4 rounded-md border border-gray-300 bg-background-dark text-primary px-3 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
        onClick={() => {
          setIsOpen3(!isOpen3);
        }}
      >
        <span>Type</span>
        {isOpen3 && (
          <div
            className="absolute
		  top-full
  
		  left-0
		  w-full h-28
  
		  rounded-md border border-gray-300
  
		  bg-white
		  shadow-md
  
		  grid grid-rows-3 justify-items-center items-center"
          >
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("Charity");
                setIsOpen3(false);
              }}
            >
              Charity
            </div>
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("Hospital");
                setIsOpen3(false);
              }}
            >
              Hospital
            </div>
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("PlaceOfWorship");
                setIsOpen3(false);
              }}
            >
              Place Of Worship
            </div>
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("Orphanage");
                setIsOpen3(false);
              }}
            >
              Orphanage
            </div>
            <div
              className=" text-text
			  text-sm
			  cursor-pointer
			  w-full h-full
			  hover:bg-accent
			  text-center"
              onClick={() => {
                handleFilterChange("PublicSchool");
                setIsOpen3(false);
              }}
            >
              Public School
            </div>
          </div>
        )}
      </div>
      {
        <div
          className="dropdown relative w-full rounded-md border border-black bg-red-300 text-black px-3 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
          onClick={() => {
            handleFilterChange("");
            setIsOpen3(false);
          }}
        >
          <span>Remove Filters</span>
        </div>
      }
    </div>
  );
}

export default ToolBar;
