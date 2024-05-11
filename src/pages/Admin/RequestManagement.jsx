import {useState} from 'react';
import React from 'react';
import DataTable from 'react-data-table-component';

const Data = [
	{
		id: 1,
		type: 'Donor',
		request: "clothing donation",
	},
	{
		id: 2,
		type: 'Donor',
		request: "food donation",
	},
	{
		id: 3,
		type: 'School',
		request: "books",
	},
	{
		id: 4,
		type: 'Hospital',
		request: "blood donation",
	},
	{
		id: 5,
		type: 'Donor',
		request: "money donation",
	}
]


function acceptRequest(data, setData, selectedRows) {
	// remove the request from the data
	for (let i = 0; i < selectedRows.length; i++) {
		data = data.filter(row => row.id !== selectedRows[i].id);
	}
	setData(data);
}


function RequestWindow() {
	const [selectedRows, setSelectedRows] = useState([]);
	const [data, setData] = useState(Data); 
	
	const handleRowSelected = React.useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

	const columns = [
 	 	{
 	 	 	name: 'Type',
 	 	 	selector: row => row.type,
 	 	 	sortable: true
 	 	},
 	 	{
 	 	 	name: 'Request',
 	 	 	selector: row => row.request,
 	 	 	sortable: true
 	 	}
 	];

 	return (
 	 	<div className='container mt-5'>
 	 	 	<DataTable
 	 	 	 	columns = {columns}
 	 	 	 	data = {data}
 	 	 	 	selectableRows 	
 	 	 	 	onSelectedRowsChange={handleRowSelected}
				/ >
 	 	 	 	<button onClick={() => {
						acceptRequest(data, setData, selectedRows);
				}}>Accept</button>
 	 	 	 	<button onClick={() => {
						acceptRequest(data, setData, selectedRows);
				}}>Reject</button>
 	 	</div>
 	); 
}

export default RequestWindow;