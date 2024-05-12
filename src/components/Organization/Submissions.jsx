import { useState } from 'react';

import Clothes from './Clothes';
import Toys from './Toys';
import Food from './Food';
import MedicalSupplies from './MedicalSupplies';
import SchoolSupplies from './SchoolSupplies';
import BloodDonations from './BloodDonations';
import TeachingPost from './TeachingPost';
import MedicalCases from './MedicalCases';

import usePost from '../../hooks/usePost';
import useUpdate from '../../hooks/useUpdate';

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
    const userData = JSON.parse(localStorage.getItem('userData'));
    formData.organizationID = userData.id;

    const { id } = await usePost('donations', formData);
    formData.id = id;

    userData.donations.push(formData.id);
    localStorage.setItem('userData', JSON.stringify(userData));

    useUpdate('users', userData, userData.id);
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
              <option value="Teaching Post">Teaching Post</option>
              <option value="Medical Cases">Medical Cases</option>
            </select>
          </label>

          <label className={labelClassName}>
            Title:
            <input
              type="text"
              name="title"
              className={inputClassName}
              onChange={handleChange}
              required
            />
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
              selectClassName={selectClassName}
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

          {category === 'Medical Supplies' && (
            <MedicalSupplies
              setFormData={setFormData}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              selectClassName={selectClassName}
              handleChange={handleChange}
            />
          )}

          {category === 'School Supplies' && (
            <SchoolSupplies
              formData={formData}
              setFormData={setFormData}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              selectClassName={selectClassName}
              handleChange={handleChange}
            />
          )}

          {category === 'Blood Donation' && (
            <BloodDonations
              setFormData={setFormData}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              selectClassName={selectClassName}
              handleChange={handleChange}
            />
          )}

          {category === 'Teaching Post' && (
            <TeachingPost
              setFormData={setFormData}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              selectClassName={selectClassName}
              handleChange={handleChange}
            />
          )}

          {category === 'Medical Cases' && (
            <MedicalCases
              setFormData={setFormData}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              selectClassName={selectClassName}
              handleChange={handleChange}
            />
          )}

          <label className={labelClassName}>
            Drop-Off
            <input
              type="datetime-local"
              name="dropOff"
              className={inputClassName}
              required
            ></input>
          </label>

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
