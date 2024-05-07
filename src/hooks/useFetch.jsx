import { useEffect } from 'react';

const useFetch = (endpoint, setData) => {
  const PORT = import.meta.env.VITE_PORT;

  useEffect(() => {
    fetch(`http://localhost:${PORT}/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [endpoint]);
};

export default useFetch;
