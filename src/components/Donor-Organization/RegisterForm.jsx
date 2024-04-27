import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    contactNumber: '',
    area: '',
    governorate: '',
    organizationName: '',
    organizationType: '',
    organizationAddress: '',
    isOrganization: false,
  });

  const [isOrganization, setIsOrganization] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    const path = isOrganization ? '/organization' : '/donor';
    navigate(path, { replace: true });
  };

  return (
    <form className="flex flex-col gap-1 py-3" onSubmit={handleSubmit}>
      <Input
        label="First Name:"
        type="text"
        name="firstName"
        required={true}
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      <Input
        label="Last Name:"
        type="text"
        name="lastName"
        required={true}
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />
      <Input
        label="Gender:"
        type="text"
        name="gender"
        required={true}
        value={formData.gender}
        onChange={handleChange}
      />
      <br />
      <Input
        label="Email:"
        type="email"
        name="email"
        required={true}
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <Input
        label="Password:"
        type="password"
        name="password"
        required={true}
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <Input
        label="Contact Number:"
        type="tel"
        name="contactNumber"
        required={true}
        value={formData.contactNumber}
        onChange={handleChange}
      />
      <br />
      <Input
        label="Area:"
        type="text"
        name="area"
        required={true}
        value={formData.area}
        onChange={handleChange}
      />
      <br />
      <Input
        label="Governorate:"
        type="text"
        name="governorate"
        required={true}
        value={formData.governorate}
        onChange={handleChange}
      />
      <br /> <br />
      <Input
        label="Are you an organization?"
        labelClassName={'text-center'}
        inputClassName={'border-none accent-accent m-2'}
        type="checkbox"
        onChange={(e) => {
          setIsOrganization(e.target.checked);
          setFormData((prevFormData) => ({
            ...prevFormData,
            isOrganization: e.target.checked,
          }));
        }}
      />
      <br />
      {isOrganization && (
        <>
          <Input
            label="Organization Name:"
            type="text"
            name="organizationName"
            required={true}
            value={formData.organizationName}
            onChange={handleChange}
          />
          <br />
          <Input
            label="Organization Type:"
            type="text"
            name="organizationType"
            required={true}
            value={formData.organizationType}
            onChange={handleChange}
          />
          <br />
          <Input
            label="Organization Address:"
            type="text"
            name="organizationAddress"
            required={true}
            value={formData.organizationAddress}
            onChange={handleChange}
          />
          <br />
        </>
      )}
      <button
        className="bg-primary hover:bg-accent text-white hover:text-text font-bold mx-20 py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
