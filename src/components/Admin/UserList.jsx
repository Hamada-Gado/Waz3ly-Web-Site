import { useNavigate } from 'react-router-dom';


function handleView(navigate, userId, user) {
	navigate('/admin/view-user', { state: { userId, user } });
}

function handleDelete(users, setUsers, userId) {
	// Implement delete functionality for the user
	console.log(`Delete user: ${userId}`);
	// useDelete('list_of_users_for_admin', data, setData, userId); // NOT IMPLEMENTED
	setUsers(users.filter((user) => user.id !== userId));
}

function UserItem({ users, setUsers, user }) {
	const navigate = useNavigate();
	return (
		<div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200">
			<div className="flex items-center space-x-3">
				<span className="text-lg font-medium">{user.firstName} {user.lastName}</span>
				<span className="text-gray-500 text-sm">{user.accountType}</span>
			</div>
			<div className="flex space-x-2">
				{handleView && (
					<button
						type="button"
						className="view-but"
						onClick={() => handleView(navigate, user.id, user)}
					>
						View
					</button>
				)}
				{handleDelete && (
					<button
						type="button"
						className="delete-but"
						onClick={() => handleDelete(users, setUsers, user.id)}
					>
						Delete
					</button>
				)}
			</div>
		</div>
	);
}

function UserList ({ users , setUsers }) {
	return (
		<div className="user-list">
			{users.map((user) => (
				<UserItem
					key={user.id}
					users={users}
					setUsers={setUsers}
					user={user}
				/>
			))}
		</div>
	);
}

export default UserList;
