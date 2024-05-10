import {useState, useEffect, React} from "react"
import useFetch from '../useFetch';

function useFilterUsers(endpoint) {
	/*
		 * This function does a few things:
		 * the first is it fetches all the users from the backend
		 * The second is it handles filtering (when you select from the dropdown
			 * menu in the toolbar in the Dashboard for the admin)
		 * The third is it handles searchs (when you search in the toolbar in the
			 * Dashboard for the admin) 
	*/
	// init the users state
	const [users, setUsers] = useState([]);

	// init the filter state
	const [filter, setFilter] = useState('All');

	// init the search state
	const [search, setSearch] = useState('');

	// init the filtered users state
	const [filteredUsers, setFilteredUsers] = useState([]);

	// fetch the users from the backend
	useFetch(endpoint, setUsers)
	useFetch(endpoint, setFilteredUsers)

	// construct a function to handle changes in the filter
	const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
		setFilteredUsers(users.filter(user => user.type === newFilter || newFilter === 'All'));
	}

	// construct a function to handle changes in the search
	const handleSearchChange = (newSearch) => {
		setSearch(newSearch);
		setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(newSearch.toLowerCase())));

	}

	// return EVERYTHING
	return [
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
	];
}

export default useFilterUsers;
