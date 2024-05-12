import React, { useState } from "react";
import DataTable from "react-data-table-component";

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

function acceptRequest(data, setData, selectedRows) {
  const updatedData = data.filter(
    (row) => !selectedRows.some((selected) => selected.id === row.id)
  );
  setData(updatedData);
}

const SubmissionWindow = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState(Data);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "Organization",
      selector: (row) => row.organization,
      sortable: true,
    },
    {
      name: "Submission",
      selector: (row) => row.submission,
      sortable: true,
    },
    {
      name: "Document",
      selector: (row) => row.document,
      sortable: true,
    },
  ];

  return (
    <div className="container mt-5">
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={handleRowSelected}
      />
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => acceptRequest(data, setData, selectedRows)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </button>
        <button
          onClick={() => acceptRequest(data, setData, selectedRows)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default SubmissionWindow;
