import { useEffect } from 'react';

const BloodDonations = ({
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
      category: 'Blood Donation',
      patientName: '',
      bloodType: '',
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
        Blood Type:
        <select
          name="bloodType"
          defaultValue=""
          className={selectClassName}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Choose a Blood Type
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </label>
    </>
  );
};

export default BloodDonations;
