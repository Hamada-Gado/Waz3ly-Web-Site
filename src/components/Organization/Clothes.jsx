import { useEffect } from 'react';

const Clothes = ({
  setFormData,
  labelClassName,
  inputClassName,
  selectClassName,
}) => {
  useEffect(() => {
    setFormData({
      title: '',
      approved: false,
      pending: false,
      completed: false,
      category: 'Clothing',
      type: '',
      age: '',
      gender: 'Female',
      season: 'Winter',
      material: '',
      quantity: 0,
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
          required
        />
      </label>
      <label className={labelClassName}>
        Type:
        <input
          type="text"
          name="type"
          className={inputClassName}
          placeholder="Type of Clothing"
          required
        />
      </label>
      <label className={labelClassName}>
        Age:
        <select name="age" className={selectClassName} required>
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
          defaultValue=""
          className={selectClassName}
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
        Season:
        <select
          name="season"
          defaultValue=""
          className={selectClassName}
          required
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="Winter">Winter</option>
          <option value="Summer">Summer</option>
          <option value="Spring">Spring</option>
          <option value="Fall">Fall</option>
        </select>
      </label>
      <label className={labelClassName}>
        Material:
        <input
          type="text"
          name="material"
          className={inputClassName}
          placeholder="Material"
          required
        />
      </label>
      <label className={labelClassName}>
        Quantity:
        <input
          type="number"
          name="quantity"
          className={inputClassName}
          placeholder="Quantity"
          min={0}
          required
        />
      </label>
    </>
  );
};

export default Clothes;
