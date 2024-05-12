import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import PDFViewer from "../../components/Media/PDFViewer";
import useFetch from "../../hooks/useFetch";
const PORT = import.meta.env.VITE_PORT;

const Data = [
	{
		id: 1,
		organization: "Hospital",
		submission: "Donor",
		document: "clothing donation",
	},
	{
		id: 2,
		organization: "Hospital",
		submission: "Donor",
		document: "food donation",
	},
	{
		id: 3,
		organization: "Hospital",
		submission: "School",
		document: "books",
	},
	{
		id: 4,
		organization: "Hospital",
		submission: "Hospital",
		document: "blood donation",
	},
	{
		id: 5,
		organization: "Hospital",
		submission: "Donor",
		document: "money donation",
	},
];

const SubmissionWindow = () => {
	const [selectedRows, setSelectedRows] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		// get all donations
		fetch(`http://localhost:${PORT}/donations`)
			.then((res) => res.json())
			// filter the donations to get only the submissions
			.then((res) => {
				console.log(res[0].approved === 0);
				return res.filter((row) => row.approved === 0);
			})
			// if the quantity not available, set it to N/A
			.then((res) => {
				return res.map((row) => {
					if (!("quantity" in row)) {
						row.quantity = "N/A";
					}
					return row;
				});
			})
			.then((res) => {
				setData(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleRowSelected = React.useCallback((state) => {
		setSelectedRows(state.selectedRows);
	}, []);

	const acceptRequest = () => {
		if (selectedRows.length === 0) {
			alert("Please select requests to accept.");
			return;
		}

		const updatedData = data.filter(
			(row) => !selectedRows.some((selected) => selected.id === row.id)
		);
		// send a put request to the server to update the database
		// if the submission is accepted then set the approved field to 1
		for (let i = 0; i < selectedRows.length; i++) {
			fetch(`http://localhost:${PORT}/donations/${selectedRows[i].id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...selectedRows[i], approved: 1 }),
			})
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
				});
		}

		setData(updatedData);
		setSelectedRows([]);
	};

	const rejectRequest = () => {
		if (selectedRows.length === 0) {
			alert("Please select requests to reject.");
			return;
		}

		const updatedData = data.filter(
			(row) => !selectedRows.some((selected) => selected.id === row.id)
		);
		// send a put request to the server to update the database
		// if the submission is rejected then set the approved field to 2
		for (let i = 0; i < selectedRows.length; i++) {
			fetch(`http://localhost:${PORT}/donations/${selectedRows[i].id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...selectedRows[i], approved: 2 }),
			})
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
				});
		}
		setData(updatedData);
		setSelectedRows([]);
	};

	const columns = [
		{
			name: "Organization ID",
			selector: (row) => row.organizationID,
			sortable: false,
			grow: 2,
		},
		{
			name: "title",
			selector: (row) => row.title,
			sortable: true,
			grow: 4,
		},
		{
			name: "category",
			selector: (row) => row.category,
			grow: 2,
		},
		{
			name: "quantity",
			selector: (row) => row.quantity,
		},
		{
			name: "Document",
			selector: () => <PDFViewer />,
		},
	];

	return (
		<div className="flex justify-center items-center h-screen w-full">
			<div className="bg-white shadow-md rounded-lg px-8 py-6 w-1/2">
				<h1 className="text-3xl font-bold text-center text-primary mb-6">
					Submissions
				</h1>
				<DataTable
					columns={columns}
					data={data}
					selectableRows
					onSelectedRowsChange={handleRowSelected}
					className="mb-6"
					noDataComponent="No submissions available."
				/>
				<div className="flex justify-between">
					<button
						onClick={acceptRequest}
						className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
					>
						Accept
					</button>
					<button
						onClick={rejectRequest}
						className="bg-danger hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
					>
						Reject
					</button>
				</div>
			</div>
		</div>
	);
};

export default SubmissionWindow;

/*
* imp keys to display:
	- title
	- category
	- quantity
	- organization id
*/
