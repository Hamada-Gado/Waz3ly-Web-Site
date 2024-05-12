import useFetch from "./useFetch";
import { useEffect } from "react";

const deleteResource = async (endpoint, userId) => {
	try {
		const PORT = import.meta.env.VITE_PORT;
		const url = `http://localhost:${PORT}/${endpoint}/${userId}`;

		const res = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const body = await res.json();
		return body;
	} catch (error) {
		console.error("Error:", error);
	}
};

export default deleteResource;
