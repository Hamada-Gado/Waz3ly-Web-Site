import { useEffect } from 'react';

const TeachingPost = ({
  setFormData,
  labelClassName,
  inputClassName,
  handleChange,
}) => {
  useEffect(() => {
    setFormData({
      title: '',
      approved: 0,
      accepted: 0,
      pending: false,
      completed: false,
      category: 'Teaching Posts',
      numStudents: 0,
      subjects: '',
    });
  }, []);

  return (
    <>
      <label className={labelClassName}>
        Number of Students:
        <input
          type="number"
          name="numStudents"
          className={inputClassName}
          onChange={handleChange}
          required
        />
      </label>
      <label className={labelClassName}>
        Subjects:
        <input
          type="text"
          name="subjects"
          className={inputClassName}
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
};

export default TeachingPost;
