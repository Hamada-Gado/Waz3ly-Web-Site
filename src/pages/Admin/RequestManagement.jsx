import React from 'react';
import DataTable from 'react-data-table-component';

function RequestwWindow({ onAccept, onReject }) {
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
  const data = [
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
  return (
    <div className='container mt-5'>
      <DataTable
        columns = {columns}
        data = {data}
        selectableRows  
        ></DataTable>
        <button onClick={onAccept}>Accept</button>
        <button onClick={onReject}>Reject</button>
    </div>
    /*<div className="review-window">
      <h2>Review Request</h2>
      <p>{request}</p>
      <div className="button-container">
        <button onClick={onAccept}>Accept</button>
        <button onClick={onReject}>Reject</button>
      </div>
    </div>*/
  ); 
}

export default ReviewWindow;