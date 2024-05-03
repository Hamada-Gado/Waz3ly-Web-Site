import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Page from "../../components/Auth/RegisterPage";
import ThirdPage from "../../components/Auth/RegisterThirdPage";
import { AccountType, OrganizationType } from "../../enums/Enums";
import PageIndicator from "../../components/Layout/PageIndicator";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    contactNumber: "",
    area: "",
    governorate: "",
    accountType: AccountType.Organization,
    organizationName: "",
    organizationType: OrganizationType.Charity,
    organizationAddress: "",
  });

  const [accountType, setAccountType] = useState(AccountType.Donor);
  const [organizationType, setOrganizationType] = useState(
    OrganizationType.Charity
  );
  const [pageNum, setPageNum] = useState(0);
  const navigate = useNavigate();

  const labelClassName = "flex flex-col text-sm font-body text-text font-base";
  const inputClassName =
    "px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1 text-primary";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));

    const path = isOrganization ? "/organization" : "/donor";
    navigate(path, { replace: true });
  };

  const firstPageProps = [
    {
      label: "First Name:",
      name: "firstName",
      type: "text",
    },
    {
      label: "Last Name:",
      name: "lastName",
      type: "text",
    },
    {
      label: "Email:",
      name: "email",
      type: "email",
    },
    {
      label: "Password:",
      name: "password",
      type: "password",
    },
  ];

  const secondPageProps = [
    {
      label: "Contact Number:",
      name: "contactNumber",
      type: "text",
    },
    {
      label: "Area:",
      name: "area",
      type: "text",
    },
    {
      label: "Gender:",
      name: "gender",
      type: "text",
    },
    {
      label: "Governorate:",
      name: "governorate",
      type: "text",
    },
  ];

  return (
    <div className="h-full flex items-center justify-center px-4 ">
      <div className="bg-white shadow-md rounded-lg px-8 max-w-md w-full">
        {/* Constant Register Page */}
        <h1 className="text-3xl font-primary font-bold text-primary text-center">
          Register
        </h1>

        {/* First Page */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {pageNum === 0 && (
            <Page
              pageProps={firstPageProps}
              formData={formData}
              onChange={handleChange}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
            />
          )}
          {pageNum === 1 && (
            <Page
              pageProps={secondPageProps}
              formData={formData}
              onChange={handleChange}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
            />
          )}

          {pageNum === 2 && (
            <ThirdPage
              formData={formData}
              onChange={handleChange}
              labelClassName={labelClassName}
              inputClassName={inputClassName}
            />
          )}
        </form>
        {/* Buttons */}
        <div className="w-full flex items-center justify-between gap-1">
          {pageNum > 0 && (
            <button
              type="button"
              onClick={() => setPageNum(pageNum - 1)}
              className="w-1/3 bg-primary hover:bg-secondary text-white hover:text-gray-50 font-bold py-2 px-4 rounded-md shadow-sm"
            >
              Previous
            </button>
          )}
          {pageNum < 2 && (
            <button
              type="button"
              onClick={() => setPageNum(pageNum + 1)}
              className="flex-grow bg-primary hover:bg-secondary text-white hover:text-gray-50 font-bold py-2 px-4 rounded-md shadow-sm"
            >
              Next
            </button>
          )}
          {pageNum === 2 && (
            <button
              type="submit"
              onSubmit={(e) => onSubmit(e)}
              className="flex-grow bg-primary hover:bg-secondary text-white hover:text-gray-50 font-bold py-2 px-4 rounded-md shadow-sm"
            >
              Submit
            </button>
          )}
        </div>

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
