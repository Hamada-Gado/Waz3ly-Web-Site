const useFetch = (endpoint, setData, id) => {
  const PORT = import.meta.env.VITE_PORT;

  fetch(`http://localhost:${PORT}/${endpoint}/${id ? id : ''}`)
    .then((res) => res.json())
    .then((data) => setData(data));
};

export default useFetch;
