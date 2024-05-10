import {useState, useEffect, React} from "react"
import useFetch from '../../hooks/useFetch';
import "../../pages/Admin/Dashboard.css"
import UserList from './UserList'
import ToolBar from './ToolBar'

import useFilterUsers from '../../hooks/admin/useFilterUsers';



function AdminListOfUsers({ endpoint }) {

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
		handleSearchChange
	] = useFilterUsers(endpoint);

	return (
		<div className="content-container">
			<div className="title">List of Users</div>
			<ToolBar
				users={users}
				filter={filter}
				search={search}
				handleFilterChange={handleFilterChange}
				handleSearchChange={handleSearchChange}
			/>
			<UserList
				users={filteredUsers}
				setUsers={setFilteredUsers}
			/>
		</div>
	);
}

export default AdminListOfUsers;
