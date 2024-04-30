const Input = ({ label, labelClassName, inputClassName, ...props }) => {
  return (
    <label className={labelClassName}>
      {label}
      <input className={inputClassName} {...props} />
    </label>
  );
};

export default Input;
