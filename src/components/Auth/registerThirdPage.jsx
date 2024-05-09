import { AccountType, OrganizationType } from '../../enums/Enums';

const ThirdPage = ({
  formData,
  labelClassName,
  inputClassName,
  title,
  onChange,
}) => {
  const selectClassName =
    'px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1';
  return (
    <>
      <div className="flex flex-col">
        <label className={labelClassName}>
          Account Type:
          <select
            name="accountType"
            defaultValue={formData['accountType'] || ''}
            className={selectClassName}
            onChange={onChange}
            required={true}
            disabled={title === 'Edit Profile'}
          >
            <option value="" disabled>
              -- Select an option --
            </option>
            {Object.values(AccountType).map(
              (value) =>
                value !== AccountType.Admin && (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
            )}
          </select>
        </label>
      </div>

      {formData['accountType'] === AccountType.Organization && (
        <>
          <div className="flex flex-col">
            <label className={labelClassName}>
              Organization Type:
              <select
                name="organizationType"
                defaultValue={formData['organizationType'] || ''}
                onChange={onChange}
                className={selectClassName}
                required
                disabled={title === 'Edit Profile'}
              >
                <option value="" disabled>
                  -- Select an option --
                </option>
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
            <label className={labelClassName}>
              Organization Name
              <input
                name="organizationName"
                type="text"
                value={formData['organizationName']}
                onChange={onChange}
                className={inputClassName}
                required
                disabled={title === 'Edit Profile'}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className={labelClassName}>
              Organization Address:
              <input
                name="organizationAddress"
                type="text"
                value={formData['organizationAddress']}
                onChange={onChange}
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
            <label className={labelClassName}>
              Credentials:
              <input
                name="credentials"
                type="file"
                className={inputClassName}
                required={title !== 'Edit Profile'}
              />
            </label>
          </div>
        </>
      )}
    </>
  );
};

export default ThirdPage;
