import {useState, useEffect, React} from "react"

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

export default ToolBar;
