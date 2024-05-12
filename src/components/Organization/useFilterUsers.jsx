import { useState, useEffect, React } from 'react';
import { AccountType } from '../../enums/Enums';
import useFetch from '../../hooks/useFetch';

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
  const [initUsers, setInitUsers] = useState([]);
  const [users, setUsers] = useState([]);

  // init the search state
  const [search, setSearch] = useState('');

  // init the filtered users state
  const [filteredUsers, setFilteredUsers] = useState([]);
  console.log(initUsers);
  console.log(users);
  console.log(filteredUsers);

  // fetch the users from the backend
  useEffect(() => {
    useFetch(endpoint, setInitUsers);
  }, []);

  useEffect(() => {
    setUsers(
      initUsers.filter((user) => user.accountType !== AccountType.Organization)
    );
  }, [initUsers]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  // construct a function to handle changes in the search
  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    setFilteredUsers(
      users.filter((user) =>
        user.firstName.toLowerCase().includes(newSearch.toLowerCase())
      )
    );
  };

  // return EVERYTHING
  return [
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    search,
    setSearch,
    handleSearchChange,
  ];
}

export default useFilterUsers;
