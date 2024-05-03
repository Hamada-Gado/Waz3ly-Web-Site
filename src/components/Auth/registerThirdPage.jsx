import { AccountType, OrganizationType } from "../../enums/Enums";

const ThirdPage = ({ formData, ...props }) => {
  const labelClassName = props.labelClassName;
  const inputClassName = props.inputClassName;
  const selectClassName =
    "px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1";
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onChange({ ...props.formData, [name]: value });
  };
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="accountType" className={labelClassName}>
          Account Type
        </label>
        <select
          id="accountType"
          value={formData["accountType"]}
          onChange={(e) => props.onChange(e)}
          className={selectClassName}
          required
        >
          {Object.values(AccountType).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {formData["accountType"] === AccountType.Organization && (
        <>
          <div className="flex flex-col">
            <label htmlFor="organizationType" className={labelClassName}>
              Organization Type
            </label>
            <select
              id="organizationType"
              onChange={(e) => props.onChange(e)}
              value={formData["organizationType"]}
              className={selectClassName}
              required
            >
              {Object.keys(OrganizationType).map((key) => (
                <option key={key} value={OrganizationType[key]}>
                  {OrganizationType[key]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            {/* Organization Name and address */}
            <label htmlFor="organizationName" className={labelClassName}>
              Organization Name
            </label>
            <input
              id="organizationName"
              type="text"
              value={formData["organizationName"]}
              onChange={(e) => props.onChange(e)}
              className={inputClassName}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="organizationAddress" className={labelClassName}>
              Organization Address
            </label>
            <input
              id="organizationAddress"
              type="text"
              value={formData["organizationAddress"]}
              onChange={(e) => props.onChange(e)}
              className={inputClassName}
              required
            />
          </div>
        </>
      )}
      {(formData["accountType"] === AccountType.Doctor ||
        formData["accountType"] === AccountType.Teacher) && (
        <>
          {/* Ask for credentials file upload */}
          <div className="flex flex-col">
            <label htmlFor="credentials" className={labelClassName}>
              Credentials
            </label>
            <input
              label="Credentials"
              id="credentials"
              type="file"
              className={inputClassName}
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
