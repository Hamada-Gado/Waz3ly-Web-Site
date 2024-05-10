const useUpdate = (endpoint, body) => {
  const PORT = import.meta.env.VITE_PORT;

  fetch(`http://localhost:${PORT}/${endpoint}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to update");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

export default useUpdate;
