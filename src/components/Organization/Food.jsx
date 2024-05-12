import { useEffect } from 'react';

const Food = ({
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
        category: 'Food',
        type: '',
        item: '',
        quantity: '',
      }
    );
  }, []);

  return (
    <>
      {formData && (
        <>
          <label className={labelClassName}>
            Type (in KG if fruits or vegetables and amount for the rest):
            <select
              name="type"
              value={formData.type}
              className={selectClassName}
              onChange={handleChange}
              required
            >
              <option value="">Select Type of Food</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Canned Food">Canned Food</option>
              <option value="Fresh Meals">Fresh Meals</option>
              <option value="Baked Goods">Baked Goods</option>
            </select>
          </label>

          <label className={labelClassName}>
            Item:
            <input
              type="text"
              name="item"
              value={formData.item}
              className={inputClassName}
              placeholder="Item"
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
              onChange={handleChange}
              required
            />
          </label>
        </>
      )}
    </>
  );
};

export default Food;
