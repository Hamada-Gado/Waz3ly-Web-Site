import { useEffect } from 'react';

const Toys = ({
  setFormData,
  labelClassName,
  inputClassName,
  selectedClassName,
  handleChange,
}) => {
  useEffect(() => {
    setFormData({
      title: '',
      approved: false,
      pending: false,
      completed: false,
      category: 'Toys',
      type: '',
      age: '',
      gender: '',
      subCategory: '',
      quantity: '',
    });
  }, []);

  return (
    <>
      <label className={labelClassName}>
        Title:
        <input
          className={inputClassName}
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
      </label>
      <label className={labelClassName}>
        Type:
        <input
          type="text"
          name="type"
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
          className={selectedClassName}
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
          className={selectedClassName}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label className={labelClassName}>
        Sub Category:
        <select
          name="subCategory"
          className={selectedClassName}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="Action Figures">Action Figures</option>
          <option value="Dolls">Dolls</option>
          <option value="Educational">Educational</option>
          <option value="Puzzles">Puzzles</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className={labelClassName}>
        Quantity:
        <input
          type="number"
          name="quantity"
          className={inputClassName}
          placeholder="Quantity"
          min={1}
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
};

export default Toys;
