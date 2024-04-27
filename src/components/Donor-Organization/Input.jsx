const Input = ({ label, labelClassName, inputClassName, ...props }) => {
  return (
    <label className={labelClassName || 'flex flex-col gap-1 text-center'}>
      {label}
      <input
        className={
          inputClassName ||
          'text-text text-center border border-primary focus:border-secondary focus:outline-none focus:ring-0 rounded-md mx-16 p-1'
        }
        {...props}
      />
    </label>
  );
};

export default Input;
