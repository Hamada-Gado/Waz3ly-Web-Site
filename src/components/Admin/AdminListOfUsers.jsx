import {useState, useEffect, React} from "react"
import useFetch from '../../hooks/useFetch';
import "../../pages/Admin/Dashboard.css"
import UserList from './UserList'
import ToolBar from './ToolBar'



function AdminListOfUsers() {
	const [users, setUsers] = useState([]);
	useFetch('list_of_users_for_admin', setUsers);
	return (
		<div className="content-container">
			<div className="title">List of Users</div>
			<ToolBar users={users} setFilteredUsers={setUsers} />
			<UserList users={users} setUsers={setUsers} />
		</div>
	);
}

export default AdminListOfUsers;
