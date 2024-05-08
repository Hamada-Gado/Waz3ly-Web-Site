import React, { useState, useEffect, Fragment } from 'react';
import useDelete from '../../hooks/useDelete'; // takes an endpoint and the user id and a success callback and an error callback
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

function handleDelete(data, setData, userId) {
	// Implement delete functionality for the user
	console.log(`Delete user: ${userId}`);
	useDelete('list_of_users_for_admin', data, setData, userId);
}

function UserItem( {user, onView, onDelete, data, setData} ) {
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
						onClick={() => onDelete(data, setData, user.id)}
					>
						Delete
					</button>
				)}
			</div>
		</div>
	);
}

function UserList ({ users , onView, onDelete , data, setData }) {
	return (
		<div className="user-list">
			{users.map((user) => (
				<UserItem key={user.id} user={user} onView={onView} onDelete={onDelete} data={data} setData={setData} />
			))}
		</div>
	);
}

function ToolBar(users, setFilteredUsers) {
	const [searchTerm, setSearchTerm] = useState('');
	const [filter, setFilter] = useState('All'); // Initial filter state
	const [isOpen, setIsOpen] = useState(false);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
		// Update filtered users based on search and filter
		const filteredData = users.filter((user) =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredUsers(filter === 'all' ? filteredData : filterUsers(filteredData, filter));
	};

	const handleFilterChange = (event) => {
		setFilter(event.target.value);
		// Update filtered users based on search and new filter
		const filteredData = users.filter((user) =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredUsers(filterUsers(filteredData, event.target.value));
	};

	const filterUsers = (data, filterValue) => {
		if (filterValue === 'all') return data;
		return data.filter((user) => user.type === filterValue);
	};

	
	return (
		<div className="toolbar">
			<input
				type="text"
				placeholder="Search users..."
				value={searchTerm}
				onChange={handleSearchChange}
				className="searchbar"
			/>
			<div
				className="dropdown relative w-full rounded-md border border-gray-300 bg-background-dark text-primary px-3 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<span>{filter}</span>
				{isOpen && (
				<div className="dropdown-menu">
					<div
						className="dropdown-item"
						onClick={() => {
							setFilter('All');
							setIsOpen(false);
						}
					}>
						All
					</div>
					<div
						className="dropdown-item"
						onClick={() => {
							setFilter('Donor');
							setIsOpen(false);
						}
					}>
						Donor
					</div>
					<div
						className="dropdown-item"
						onClick={() => {
							setFilter('Organisation');
							setIsOpen(false);
						}
					}>
						Organisation
					</div>
				</div>
				)}
			</div>
		</div>
	);
}

function AdminListOfUsers() {
	const [users, setUsers] = useState([]);
	useFetch('list_of_users_for_admin', setUsers);
	return (
		<div className="content-container">
			<div className="title">List of Users</div>
			<ToolBar users={users} setFilteredUsers={setUsers} />
			<div className="content">
				<UserList
					users={users}
					onView={handleView}
					onDelete={handleDelete}
					data={users}
					setData={setUsers}
				/>
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
		* link to the page for managing requests (Manage Organisation and Donor Requests #6)
		* link to the page for managing passwords (Create a page to manage the passwords #8)
	* FOR THE LIST OF USERS:
		* view a list of all Donors
		* View a list of all registered Organisations
		* Filter the Organisations
		* Delete Donors or Organisations
 */
