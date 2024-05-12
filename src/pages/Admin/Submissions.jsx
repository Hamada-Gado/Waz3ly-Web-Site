import {useState} from 'react';
import React from 'react';
import DataTable from 'react-data-table-component';

const Data = [
	{
		id: 1,
        organization: 'Hospital',
		submission: 'Donor',
		document: "clothing donation",
	},
	{
		id: 2,
        organization: 'Hospital',
		submission: 'Donor',
		document: "food donation",
	},
	{
		id: 3,
        organization: 'Hospital',
		submission: 'School',
		document: "books",
	},
	{
		id: 4,
        organization: 'Hospital',
		submission: 'Hospital',
		document: "blood donation",
	},
	{
		id: 5,
        organization: 'Hospital',
		submission: 'Donor',
		document: "money donation",
	}
]


function acceptRequest(data, setData, selectedRows) {
	// remove the request from the data
	for (let i = 0; i < selectedRows.length; i++) {
		data = data.filter(row => row.id !== selectedRows[i].id);
	}
	setData(data);
}

function SubmissionWindow() {
	const [selectedRows, setSelectedRows] = useState([]);
	const [data, setData] = useState(Data); 
	
	const handleRowSelected = React.useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

    const columns = [
        {
            name: 'Organization',
            selector: row => row.organization,
            sortable: true
        },
        {
             name: 'Submission',
             selector: row => row.submission,
             sortable: true
        },
        {
             name: 'Document',
             selector: row => row.document,
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

export default SubmissionWindow;