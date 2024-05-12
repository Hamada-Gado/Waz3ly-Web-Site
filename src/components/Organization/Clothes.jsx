import { useEffect } from 'react';

const Clothes = ({
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
        category: 'Clothing',
        type: '',
        age: '',
        gender: '',
        season: '',
        material: '',
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
              placeholder="Type of Clothing"
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
              value={formData.season}
              className={selectClassName}
              onChange={handleChange}
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
              value={formData.material}
              className={inputClassName}
              placeholder="Material"
              onChange={handleChange}
              required
            />
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

export default Clothes;
