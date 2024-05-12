import { useEffect } from 'react';

const MedicalCases = ({
  setFormData,
  labelClassName,
  inputClassName,
  selectClassName,
  handleChange,
}) => {
  useEffect(() => {
    setFormData({
      title: '',
      approved: 0,
      accepted: 0,
      pending: false,
      completed: false,
      category: 'Medical Cases',
      patientName: '',
      age: '',
      gender: '',
      weight: '',
      medicalSpecialty: '',
      caseDescription: '',
    });
  }, []);

  return (
    <>
      <label className={labelClassName}>
        Patient Name:
        <input
          type="text"
          name="patientName"
          className={inputClassName}
          onChange={handleChange}
          required
        />
      </label>
      <label className={labelClassName}>
        Age:
        <select
          name="age"
          defaultValue=""
          className={selectClassName}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Choose Age Group
          </option>
          <option value="0-10">0-10</option>
          <option value="11-20">11-20</option>
          <option value="21-30">21-30</option>
          <option value="31-40">31-40</option>
          <option value=">40">&gt;40</option>
        </select>
      </label>
      <label className={labelClassName}>
        Gender:
        <select
          name="gender"
          defaultValue=""
          className={selectClassName}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label className={labelClassName}>
        Weight:
        <input
          type="number"
          name="weight"
          className={inputClassName}
          onChange={handleChange}
          min={1}
          required
        />
      </label>
      <label className={labelClassName}>
        Medical Specialty:
        <input
          type="text"
          name="medicalSpecialty"
          className={inputClassName}
          onChange={handleChange}
          min={1}
          required
        />
      </label>
      <label className={labelClassName}>
        Case Description:
        <textarea
          name="caseDescription"
          className={inputClassName}
          placeholder="Short Description"
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
};

export default MedicalCases;
