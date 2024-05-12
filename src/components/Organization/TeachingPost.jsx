import { useEffect } from 'react';

const TeachingPost = ({
  formData,
  setFormData,
  labelClassName,
  inputClassName,
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
        category: 'Teaching Posts',
        numStudents: 0,
        subjects: '',
      }
    );
  }, []);

  return (
    <>
      {formData && (
        <>
          <label className={labelClassName}>
            Number of Students:
            <input
              type="number"
              name="numStudents"
              value={formData.numStudents}
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
              value={formData.subjects}
              className={inputClassName}
              onChange={handleChange}
              required
            />
          </label>
        </>
      )}
    </>
  );
};

export default TeachingPost;
