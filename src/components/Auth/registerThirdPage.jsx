import { AccountType, OrganizationType } from "../../enums/Enums";

const ThirdPage = (props) => {
  const labelClassName = props.labelClassName;
  const handleChange = props.handleChange;
  const curAccountType = props.curAccountType;
  const curOrganizationType = props.curOrganizationType;
  return (
    <>
      <label htmlFor="accountType" className={labelClassName}>
        Account Type
      </label>
      <select
        id="accountType"
        onChange={handleChange}
        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
        required
      >
        {Object.values(AccountType).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      {curAccountType === AccountType.Organization && (
        <>
          <label htmlFor="organizationType" className={labelClassName}>
            Organization Type
          </label>
          <select
            id="organizationType"
            onChange={handleChange}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
            required
          >
            {Object.keys(OrganizationType).map((key) => (
              <option key={key} value={OrganizationType[key]}>
                {OrganizationType[key]}
              </option>
            ))}
          </select>
          {/* Organization Name and address */}
          <label htmlFor="organizationName" className={labelClassName}>
            Organization Name
          </label>
          <input
            id="organizationName"
            type="text"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
            required
          />
          <label htmlFor="organizationAddress" className={labelClassName}>
            Organization Address
          </label>
          <input
            id="organizationAddress"
            type="text"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
            required
          />
        </>
      )}
      {(AccountType === AccountType.Doctor ||
        AccountType === AccountType.Teacher) && (
        <>
          {/* Ask for credentials file upload */}
          <div className="flex flex-col">
            <label htmlFor="credentials" className={labelClassName}>
              Credentials
            </label>
            <input
              id="credentials"
              type="file"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>
        </>
      )}

      <br />
    </>
  );
};

export default ThirdPage;
