import { useState, useEffect } from 'react';

const MedicalSupplies = ({
  formData,
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
    setFormData(
      formData || {
        title: '',
        approved: 0,
        accepted: 0,
        pending: false,
        completed: false,
        category: 'Medical Supplies',
        subCategory: '',
        deviceType: '',
        use: '',
        quantity: '',
      }
    );
  }, []);

  return (
    <>
      {formData && (
        <>
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
              value={formData.deviceType}
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
              value={formData.use}
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
              value={formData.quantity}
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
      )}
    </>
  );
};

export default MedicalSupplies;
