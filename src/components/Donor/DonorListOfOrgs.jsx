import React from "react";
import useFilterOrgs from "../../hooks/donor/useFilterOrgs";
import ToolBar from "./ToolBar";
import UserList from "./OrgsList";

const DonorListOfOrgs = ({ endpoint }) => {
  const [
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    filter,
    setFilter,
    search,
    setSearch,
    handleFilterChange,
    handleSearchChange,
  ] = useFilterOrgs(endpoint);

  return (
    <div className="content-container">
      <div className="title">List of Organizations</div>
      <ToolBar
        users={users}
        filter={filter}
        search={search}
        handleFilterChange={handleFilterChange}
        handleSearchChange={handleSearchChange}
      />
      <UserList users={filteredUsers} setUsers={setFilteredUsers} />
    </div>
  );
};

export default DonorListOfOrgs;
