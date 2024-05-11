import { useEffect } from 'react';

const SchoolSupplies = ({
  formData,
  setFormData,
  labelClassName,
  inputClassName,
  selectClassName,
  handleChange,
}) => {
  useEffect(() => {
    setFormData({
      title: '',
      approved: 0,
      accepted: 0,
      pending: false,
      completed: false,
      category: 'School Supplies',
      supplyType: '',
      quantity: '',

      type: '', // stationary

      // Books
      name: '',
      author: '',
      language: '',
      edition: '',
      shortDescription: '',
    });
  }, []);

  return (
    <>
      <label className={labelClassName}>
        Supply Type:
        <select
          name="supplyType"
          defaultValue=""
          className={selectClassName}
          onChange={handleChange}
          required
        >
          <option value="">Select Supply Type</option>
          <option value="Stationary">Stationary</option>
          <option value="Books">Books</option>
        </select>
      </label>

      {formData?.supplyType === 'Stationary' && (
        <>
          <label className={labelClassName}>
            Type:
            <input
              type="text"
              name="type"
              className={inputClassName}
              placeholder="Type of Stationary"
              onChange={handleChange}
              required
            />
          </label>
        </>
      )}

      {formData?.supplyType === 'Books' && (
        <>
          <label className={labelClassName}>
            Name:
            <input
              type="text"
              name="name"
              className={inputClassName}
              placeholder="Name of Book"
              onChange={handleChange}
              required
            />
          </label>
          <label className={labelClassName}>
            Author:
            <input
              type="text"
              name="author"
              className={inputClassName}
              placeholder="Author"
              onChange={handleChange}
              required
            />
          </label>
          <label className={labelClassName}>
            Language:
            <input
              type="text"
              name="language"
              className={inputClassName}
              placeholder="Language"
              onChange={handleChange}
              required
            />
          </label>
          <label className={labelClassName}>
            Edition:
            <input
              type="text"
              name="edition"
              className={inputClassName}
              placeholder="Edition"
              onChange={handleChange}
              required
            />
          </label>
          <label className={labelClassName}>
            Short Description:
            <textarea
              name="shortDescription"
              className={inputClassName}
              placeholder="Short Description"
              onChange={handleChange}
              required
            />
          </label>
        </>
      )}

      <label className={labelClassName}>
        Quantity:
        <input
          type="number"
          name="quantity"
          className={inputClassName}
          placeholder="Quantity"
          onChange={handleChange}
          minLength={1}
          required
        />
      </label>
    </>
  );
};

export default SchoolSupplies;
