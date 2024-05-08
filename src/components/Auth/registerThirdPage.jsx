import { AccountType, OrganizationType } from '../../enums/Enums';

const ThirdPage = ({ formData, ...props }) => {
  const { labelClassName, inputClassName, onChange } = { ...props };
  const selectClassName =
    'px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1';
  return (
    <>
      <div className="flex flex-col">
        <label className={labelClassName}>
          Account Type:
          <select
            name="accountType"
            className={selectClassName}
            onChange={(e) => props.onChange(e)}
            required={true}
          >
            <option value="" disabled>
              -- Select an option --
            </option>
            {Object.values(AccountType).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>

      {formData['accountType'] === AccountType.Organization && (
        <>
          <div className="flex flex-col">
            <label htmlFor="organizationType" className={labelClassName}>
              Organization Type:
              <select
                name="organizationType"
                onChange={(e) => props.onChange(e)}
                value={formData['organizationType']}
                className={selectClassName}
                required
              >
                {Object.keys(OrganizationType).map((key) => (
                  <option key={key} value={OrganizationType[key]}>
                    {OrganizationType[key]}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex flex-col">
            {/* Organization Name and address */}
            <label htmlFor="organizationName" className={labelClassName}>
              Organization Name
              <input
                name="organizationName"
                type="text"
                value={formData['organizationName']}
                onChange={(e) => props.onChange(e)}
                className={inputClassName}
                required
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="organizationAddress" className={labelClassName}>
              Organization Address:
              <input
                name="organizationAddress"
                type="text"
                value={formData['organizationAddress']}
                onChange={(e) => props.onChange(e)}
                className={inputClassName}
                required
              />
            </label>
          </div>
        </>
      )}
      {(formData['accountType'] === AccountType.Doctor ||
        formData['accountType'] === AccountType.Teacher ||
        formData['accountType'] === AccountType.Organization) && (
        <>
          {/* Ask for credentials file upload */}
          <div className="flex flex-col">
            <label htmlFor="credentials" className={labelClassName}>
              Credentials:
              <input
                name="credentials"
                type="file"
                className={inputClassName}
                required
              />
            </label>
          </div>
        </>
      )}
    </>
  );
};

export default ThirdPage;
