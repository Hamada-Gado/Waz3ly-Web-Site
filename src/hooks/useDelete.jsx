import useFetch from './useFetch';
import { useEffect } from 'react';

const useDelete = (endpoint, data, setData, userId) => {
	const PORT = import.meta.env.VITE_PORT;
	const url = `http://localhost:${PORT}/${endpoint}`;

	useEffect(() => {
		// update the data to remove the user with the given id
		var updatedData = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i].id !== userId) {
				updatedData.push(data[i]);
			}
		}

		// make a PUT request to the server to update the data
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedData),
		})
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((error) => console.error('but Error:', error));
	}, [userId]);
};

export default useDelete;
