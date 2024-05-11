import { AccountType, OrganizationType } from '../../enums/Enums';
import SimpleMap from '../Maps/SimpleMap';

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
        </>
      )}
      {formData['accountType'] === AccountType.Doctor && (
        <>
          <label className={labelClassName}>
            Specialization:
            <input
              name="doctorSpecialty"
              type="text"
              value={formData['doctorSpecialty']}
              onChange={onChange}
              className={inputClassName}
              required
            />
          </label>
          <label className={labelClassName}>
            How many cases you can take on?
            <input
              name="maxCases"
              type="number"
              value={formData['maxCases']}
              onChange={onChange}
              className={inputClassName}
              min={0}
              required
            />
          </label>
        </>
      )}
      {formData['accountType'] === AccountType.Teacher && (
        <>
          <label className={labelClassName}>
            Subject:
            <input
              name="teacherSubject"
              type="text"
              value={formData['teacherSubject']}
              onChange={onChange}
              className={inputClassName}
              required
            />
          </label>
          <label className={labelClassName}>
            How many students you can take on?
            <input
              name="maxCases"
              type="number"
              value={formData['maxCases']}
              onChange={onChange}
              className={inputClassName}
              min={0}
              required
            />
          </label>
        </>
      )}
      {(formData['accountType'] === AccountType.Doctor ||
        formData['accountType'] === AccountType.Organization) && (
        <>
          <div className="flex flex-col">
            <label className={labelClassName}>
              {formData['accountType']} Address:
              <input
                name="address"
                type="text"
                value={formData['address']}
                onChange={onChange}
                className={inputClassName}
                required
              />
            </label>
          </div>
          <SimpleMap onChange={onChange} />
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
