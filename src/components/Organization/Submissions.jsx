import { useState } from 'react';

import Clothes from './Clothes';
import Toys from './Toys';
import Food from './Food';
// import MedicalSupplies from './MedicalSupplies';
// import SchoolSupplies from './SchoolSupplies';
// import BloodDonations from './BloodDonations';

import usePost from '../../hooks/usePost';

const Submission = ({ setElement }) => {
  const [formData, setFormData] = useState(null);
  const [category, setCategory] = useState('');

  const formClassName = 'flex flex-col space-y-4';
  const labelClassName = 'flex flex-col text-sm font-body text-text font-base';
  const inputClassName =
    'px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1 text-text';
  const selectClassName =
    'px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = await usePost('donations', formData);
    formData.id = id;
    JSON.parse(localStorage.getItem('userData')).donations.push(formData.id);
    setElement(null);
  };

  return (
    <div className="relative h-full w-full overflow-auto inline-flex justify-center items-center">
      <div
        className="absolute bg-white shadow-md rounded-lg pb-6 px-8 max-w-md w-full"
        style={{ top: 'clamp(0px, 10vh, calc(100% - 10px)' }}
      >
        <h1 className="text-3xl font-primary font-bold text-primary text-center">
          Create a Donation Request
        </h1>
        <form className={formClassName} onSubmit={handleSubmit}>
          <label className={labelClassName}>
            Category:
            <select
              name="category"
              defaultValue=""
              className={selectClassName}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Choose a Category
              </option>
              <option value="Clothing">Clothing</option>
              <option value="Toys">Toys</option>
              <option value="Food">Food</option>
              <option value="Medical Supplies">Medical Supplies</option>
              <option value="School Supplies">School Supplies</option>
              <option value="Blood Donation">Blood Donation</option>
            </select>
          </label>

          {category === 'Clothing' && (
            <Clothes
              setFormData={setFormData}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              selectClassName={selectClassName}
              handleChange={handleChange}
            />
          )}

          {category === 'Toys' && (
            <Toys
              setFormData={setFormData}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              selectedClassName={selectClassName}
              handleChange={handleChange}
            />
          )}

          {category === 'Food' && (
            <Food
              setFormData={setFormData}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              selectClassName={selectClassName}
              handleChange={handleChange}
            />
          )}

          {/* {category === 'Medical Supplies' && <MedicalSupplies />} */}
          {/* {category === 'School Supplies' && <SchoolSupplies />} */}
          {/* {category === 'Blood Donation' && <BloodDonation />} */}

          <button className="bg-primary  text-white font-bold py-2 px-4 my-3 rounded-md shadow-sm w-full">
            Submit
          </button>
        </form>

        <button
          onClick={() => setElement(null)}
          className="bg-secondary text-white font-bold py-2 px-4 mt-6 rounded-md shadow-sm w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Submission;
