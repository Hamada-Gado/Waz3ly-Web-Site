function handleView(userId) {
	// Implement edit functionality for the user
	console.log(`View user: ${userId}`);
}

function handleDelete(users, setUsers, userId) {
	// Implement delete functionality for the user
	console.log(`Delete user: ${userId}`);
	// useDelete('list_of_users_for_admin', data, setData, userId); // NOT IMPLEMENTED
}

function UserItem({ users, setUsers, user }) {
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
						onClick={() => handleView(user.id)}
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
