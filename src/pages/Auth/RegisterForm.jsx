import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Page from '/src/components/Auth/registerPage';
import ThirdPage from '/src/components/Auth/registerThirdPage';
import { AccountType } from '../../enums/Enums';
import PageIndicator from '../../components/Layout/PageIndicator';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    contactNumber: '',
    area: '',
    governorate: '',
    accountType: null,
    organizationName: '',
    organizationType: '',
    organizationAddress: '',
  });

  const [pageNum, setPageNum] = useState(0);
  const navigate = useNavigate();

  const SubmitButton = ({ title, prevButton }) => {
    return (
      <div className="w-full flex items-center justify-between gap-1">
        {prevButton && (
          <button
            type="button"
            onClick={() => setPageNum(pageNum - 1)}
            className="w-1/3 bg-primary hover:bg-secondary text-white hover:text-gray-50 font-bold py-2 px-4 rounded-md shadow-sm"
          >
            Previous
          </button>
        )}
        <button
          type="submit"
          className="flex-grow bg-primary hover:bg-secondary text-white hover:text-gray-50 font-bold py-2 px-4 rounded-md shadow-sm"
        >
          {title}
        </button>
      </div>
    );
  };

  const formClassName = 'flex flex-col space-y-4';
  const labelClassName = 'flex flex-col text-sm font-body text-text font-base';
  const inputClassName =
    'px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1 text-text';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));

    const path =
      formData.accountType === AccountType.Organization
        ? '/organization'
        : '/donor';
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

  const secondPageProps = [
    {
      label: 'Contact Number:',
      name: 'contactNumber',
      type: 'tel',
    },
    {
      label: 'Area:',
      name: 'area',
      type: 'text',
    },
    {
      label: 'Gender:',
      name: 'gender',
      type: 'text',
    },
    {
      label: 'Governorate:',
      name: 'governorate',
      type: 'text',
    },
  ];

  return (
    <div className="relative h-full w-full inline-flex justify-center items-center m-auto ">
      <div
        className="absolute bg-white shadow-md rounded-lg px-8 max-w-md w-full"
        style={{ top: 'clamp(0px, 10vh, calc(100% - 10px)' }}
      >
        {/* Constant Register Page */}
        <h1 className="text-3xl font-primary font-bold text-primary text-center">
          Register
        </h1>
        {/* First Page */}
        {pageNum === 0 && (
          <form
            className={formClassName}
            onSubmit={(e) => {
              e.preventDefault();
              setPageNum(pageNum + 1);
            }}
          >
            <Page
              pageProps={firstPageProps}
              formData={formData}
              onChange={handleChange}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
            />
            <SubmitButton title="Next" />
          </form>
        )}
        {pageNum === 1 && (
          <form
            className={formClassName}
            onSubmit={(e) => {
              e.preventDefault();
              setPageNum(pageNum + 1);
            }}
          >
            <Page
              pageProps={secondPageProps}
              formData={formData}
              onChange={handleChange}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
            />
            <SubmitButton title="Next" prevButton={true} />
          </form>
        )}
        {pageNum === 2 && (
          <form className={formClassName} onSubmit={handleSubmit}>
            <ThirdPage
              formData={formData}
              onChange={handleChange}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
            />
            <SubmitButton title="Submit" prevButton={true} />
          </form>
        )}
        {/* Page Indicator */}
        <PageIndicator currentPage={pageNum} totalPages={3} />
        {/* Login Link */}
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
