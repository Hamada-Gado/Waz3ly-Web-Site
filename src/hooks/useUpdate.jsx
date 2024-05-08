import { useEffect } from "react";

const useUpdate = (endpoint, body) => {
  const PORT = import.meta.env.VITE_PORT;

  useEffect(() => {
    fetch(`http://localhost:${PORT}/${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((res) => console.log(res));
  }, [endpoint]);
};

export default useUpdate;
