import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    type: "Donor",
    request: "clothing donation",
  },
  {
    id: 2,
    type: "Donor",
    request: "food donation",
  },
  {
    id: 3,
    type: "School",
    request: "books",
  },
  {
    id: 4,
    type: "Hospital",
    request: "blood donation",
  },
  {
    id: 5,
    type: "Donor",
    request: "money donation",
  },
];

const RequestwWindow = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState(Data);

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
    setData(updatedData);
    setSelectedRows([]);
  };

  const columns = [
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Request",
      selector: (row) => row.request,
      sortable: true,
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Requests
        </h1>
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          onSelectedRowsChange={handleRowSelected}
          className="mb-6"
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

export default RequestwWindow;
