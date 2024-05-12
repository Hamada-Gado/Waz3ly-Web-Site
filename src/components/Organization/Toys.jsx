import { useEffect } from 'react';

const Toys = ({
  formData,
  setFormData,
  labelClassName,
  inputClassName,
  selectClassName,
  handleChange,
}) => {
  useEffect(() => {
    setFormData(
      formData || {
        title: '',
        approved: 0,
        accepted: 0,
        pending: false,
        completed: false,
        category: 'Toys',
        type: '',
        age: '',
        gender: '',
        subCategory: '',
        quantity: '',
      }
    );
  }, []);

  return (
    <>
      {formData && (
        <>
          <label className={labelClassName}>
            Type:
            <input
              type="text"
              name="type"
              value={formData.type}
              className={inputClassName}
              placeholder="Type of Toy"
              onChange={handleChange}
              required
            />
          </label>
          <label className={labelClassName}>
            Age:
            <select
              name="age"
              value={formData.age}
              className={selectClassName}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose Age Group
              </option>
              <option value="0-10">0-10</option>
              <option value="11-20">11-20</option>
              <option value="21-30">21-30</option>
              <option value="31-40">31-40</option>
              <option value=">40">&gt;40</option>
            </select>
          </label>
          <label className={labelClassName}>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              className={selectClassName}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose a Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label className={labelClassName}>
            Sub Category:
            <select
              name="subCategory"
              value={formData.subCategory}
              className={selectClassName}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose a Sub Category
              </option>
              <option value="Board Games">Board Games</option>
              <option value="Stuffed Toys">Stuffed Toys</option>
              <option value="Dolls">Dolls</option>
              <option value="Sports">Sports</option>
              <option value="Cars">Cars</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </label>
          <label className={labelClassName}>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              className={inputClassName}
              placeholder="Quantity"
              min={1}
              onChange={handleChange}
              required
            />
          </label>
        </>
      )}
    </>
  );
};

export default Toys;
