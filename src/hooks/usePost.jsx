const usePost = async (endpoint, newData) => {
  const PORT = import.meta.env.VITE_PORT;

  const res = await fetch(`http://localhost:${PORT}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data;
  } else {
    throw new Error('Failed to post');
  }
};

export default usePost;
