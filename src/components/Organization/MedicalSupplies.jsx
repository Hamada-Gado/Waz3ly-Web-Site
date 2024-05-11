import { useState, useEffect } from 'react';

const MedicalSupplies = ({
  setFormData,
  labelClassName,
  inputClassName,
  selectClassName,
  handleChange,
}) => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  useEffect(() => {
    setFormData({
      title: '',
      approved: 0,
      pending: false,
      completed: false,
      category: 'Medical Supplies',
      subCategory: '',
      deviceType: '',
      use: '',
      quantity: '',
    });
  }, []);

  return (
    <>
      <label className={labelClassName}>
        Sub Category:
        <select
          name="subCategory"
          defaultValue=""
          className={selectClassName}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a Category
          </option>
          <option value="Medical Device">Medical Device</option>
          <option value="Medical Equipment">Medical Equipment</option>
          <option value="Medication">Medication</option>
        </select>
      </label>
      <label className={labelClassName}>
        Device Type:
        <input
          type="text"
          name="deviceType"
          className={inputClassName}
          onChange={handleChange}
          required
        />
      </label>
      <label className={labelClassName}>
        Use:
        <input
          type="text"
          name="use"
          className={inputClassName}
          onChange={handleChange}
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
          min={1}
          onChange={handleChange}
          required
        />
      </label>
      <input type="file" onChange={onImageChange} className="filetype" />
      <img alt="preview image" src={image} />
    </>
  );
};

export default MedicalSupplies;
