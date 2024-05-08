import React, { useState, useEffect, Fragment } from 'react';
import useFetch from '../../hooks/useFetch';
import "./Dashboard.css";

function SideBar() {
	return (
		<div className="sidebar">
			<div className="title">
				<h2>Admin</h2>
			</div>
			<div className="nav">
				<a className="sidebar-item" href="/admin/requests">
					Manage Requests
				</a>

				<a className="sidebar-item" href="/admin/passwords">
					Manage Passwords
				</a>
			</div>
		</div>
	);
}

function handleView(userId) {
	// Implement edit functionality for the user
	console.log(`View user: ${userId}`);
}

function handleDelete(userId) {
	// Implement delete functionality for the user
	console.log(`Delete user: ${userId}`);
}

function UserItem( {user, onView, onDelete} ) {
	return (
		<div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200">
			<div className="flex items-center space-x-3">
				<span className="text-lg font-medium">{user.name}</span>
				<span className="text-gray-500 text-sm">{user.type}</span>
			</div>
			<div className="flex space-x-2">
				{onView && (
					<button
						type="button"
						className="view-but"
						onClick={() => onView(user.id)}
					>
						View
					</button>
				)}
				{onDelete && (
					<button
						type="button"
						className="delete-but"
						onClick={() => onDelete(user.id)}
					>
						Delete
					</button>
				)}
			</div>
		</div>
	);
}

function UserList ({ users , onView, onDelete }) {
	return (
		<div className="user-list">
			{users.map((user) => (
				<UserItem key={user.id} user={user} onView={onView} onDelete={onDelete} />
			))}
		</div>
	);
}

function AdminListOfUsers() {
	const [users, setUsers] = useState([]);
	useFetch('list of users for admin', setUsers);
	return (
		<div className="content-container">
			<div className="title">List of Users</div>
			<div className="content">
			<UserList users={users} onView={handleView} onDelete={handleDelete} />
			</div>
		</div>
	);
}

export default function Admin() {
	return (
		<div className="root-container">
			<SideBar />
			<AdminListOfUsers />
		</div>
	);
}


/*
	* FOR THE SIDE BAR:
		* link to the page of list of users (Create a page to for a list of all Organisation & Donors	#14)
		* link to the page for managing requests (Manage Organisation and Donor Requests #6)
		* link to the page for managing passwords (Create a page to manage the passwords #8)
		* link to the page for viewing user details (Create a Page to view a specific Organisation Details #13)
	* FOR THE LIST OF USERS:
		* view a list of all Donors
		* View a list of all registered Organisations
		* Filter the Organisations
		* Delete Donors or Organisations
 */
