import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Page from '/src/components/Auth/registerPage';
import ThirdPage from '/src/components/Auth/registerThirdPage';
import { AccountType } from '/src/enums/Enums.js';

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
    accountType: AccountType.Donor,
  });

  const [accountType, setAccountType] = useState(AccountType.Donor);
  const [pageNum, setPageNum] = useState(0);
  const navigate = useNavigate();

  const labelClassName = 'flex flex-col text-sm font-body text-gray-700';
  const inputClassName =
    'px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1';

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

  const firstPageProps = [
    {
      label: 'First Name:',
      name: 'firstName',
      type: 'text',
    },
    {
      label: 'Last Name:',
      name: 'lastName',
      type: 'text',
    },
    {
      label: 'Email:',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Password:',
      name: 'password',
      type: 'password',
    },
  ];

  return (
    <div className="h-full flex items-center justify-center px-4 ">
      <div className="bg-white shadow-md rounded-lg px-8 max-w-md w-full">
        <h1 className="text-3xl font-heading font-bold text-primary text-center">
          Register
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {pageNum === 0 && (
            <Page
              pageProps={firstPageProps}
              onChange={handleChange}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
            />
          )}
          {pageNum === 1 && <Page />}
          {pageNum === 2 && (
            <>
              <ThirdPage />

              <div className="w-full flex flex-col items-center">
                <button
                  type="submit"
                  className="w-1/3 bg-primary hover:bg-secondary text-white hover:text-gray-50 font-bold py-2 px-4 rounded-md shadow-sm"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>

        <div className="m-2 text-sm text-gray-700 text-center">
          Already have an account?
          <Link to="/login" className="mx-1 text-primary underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
