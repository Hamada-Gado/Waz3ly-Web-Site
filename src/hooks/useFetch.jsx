const useFetch = (endpoint, setData) => {
  const PORT = import.meta.env.VITE_PORT;

  fetch(`http://localhost:${PORT}/${endpoint}`)
    .then((res) => res.json())
    .then((data) => setData(data));
};

export default useFetch;
