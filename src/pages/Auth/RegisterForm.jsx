import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '/src/components/Auth/Input';

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

  const labelClassName =
    'flex flex-col text-center text-xl font-body text-gray-700';
  const inputClassName =
    'text-center text-base mx-8 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1';

  return (
    <div>
      <h1 className="text-center text-3xl font-heading font-bold text-primary">
        Register
      </h1>
      <form className="flex flex-col gap-1 py-6" onSubmit={handleSubmit}>
        <Input
          label="First Name:"
          name="firstName"
          type="text"
          required={true}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <Input
          label="Last Name:"
          name="lastName"
          type="text"
          required={true}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <label className={labelClassName}>
          Gender:
          <select
            className={inputClassName}
            name="gender"
            required={true}
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <br />
        <Input
          label="Email:"
          name="email"
          type="email"
          required={true}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <Input
          label="Password:"
          name="password"
          type="password"
          required={true}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <Input
          label="Contact Number:"
          name="contactNumber"
          type="tel"
          required={true}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <br />
        <Input
          label="Area:"
          name="area"
          type="text"
          required={true}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          value={formData.area}
          onChange={handleChange}
        />
        <br />
        <Input
          label="Governorate:"
          name="governorate"
          type="text"
          required={true}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          value={formData.governorate}
          onChange={handleChange}
        />
        <br /> <br />
        <Input
          label="Are you an organization?"
          labelClassName={labelClassName}
          inputClassName={inputClassName}
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
              name="organizationName"
              type="text"
              required={true}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              value={formData.organizationName}
              onChange={handleChange}
            />
            <br />
            <Input
              label="Organization Type:"
              name="organizationType"
              type="text"
              required={true}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              value={formData.organizationType}
              onChange={handleChange}
            />
            <br />
            <Input
              label="Organization Address:"
              name="organizationAddress"
              type="text"
              required={true}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
              value={formData.organizationAddress}
              onChange={handleChange}
            />
            <br />
          </>
        )}
        <div className="w-full flex flex-col items-center">
          <button
            type="submit"
            className="w-1/3 bg-primary hover:bg-secondary text-white hover:text-gray-50 font-bold mb-4 py-2 px-4 rounded-md shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
