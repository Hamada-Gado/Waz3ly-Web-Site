import { useState, useEffect, useRef } from 'react';
import useFetch from '../useFetch';
import { AccountType } from '../../enums/Enums';

function useFilterOrgs(endpoint) {
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
  const fetchedUsers = useRef(false);

  // init the filter state
  const [filter, setFilter] = useState('All');

  // init the search state
  const [search, setSearch] = useState('');

  // init the filtered users state
  const [filteredUsers, setFilteredUsers] = useState([]);

  // fetch the users from the backend
  useEffect(() => {
    if (fetchedUsers.current === false) {
      useFetch(endpoint, setUsers);
      fetchedUsers.current = true;
    } else if (fetchedUsers.current === true) {
      setUsers((users) => {
        return users.filter(
          (user) => user.accountType === AccountType.Organization
        );
      });
      fetchedUsers.current = null;
    } else {
      setFilteredUsers(users);
    }
  }, [users]);

  // construct a function to handle changes in the filter
  const handleFilterChange = (newFilter) => {
    switch (newFilter) {
      case 'Naser City':
        setFilteredUsers(users.filter((user) => user.area === 'Naser City'));
        break;
      case 'Dokki':
        setFilteredUsers(users.filter((user) => user.area === 'Dokki'));
        break;
      case 'Sharm El-Sheikh':
        setFilteredUsers(
          users.filter((user) => user.area === 'Sharm El-Sheikh')
        );
        break;
      case 'Cairo':
        setFilteredUsers(users.filter((user) => user.governorate === 'Cairo'));
        break;
      case 'South Sinai':
        setFilteredUsers(
          users.filter((user) => user.governorate === 'South Sinai')
        );
        break;
      case 'Giza':
        setFilteredUsers(users.filter((user) => user.governorate === 'Giza'));
        break;
      case 'Charity':
        setFilteredUsers(
          users.filter((user) => user.organizationType === 'Charity')
        );
        break;
      case 'Hospital':
        setFilteredUsers(
          users.filter((user) => user.organizationType === 'Hospital')
        );
        break;
      case 'PlaceOfWorship':
        setFilteredUsers(
          users.filter((user) => user.organizationType === 'PlaceOfWorship')
        );
        break;
      case 'Orphanage':
        setFilteredUsers(
          users.filter((user) => user.organizationType === 'Orphanage')
        );
        break;
      case 'PublicSchool':
        setFilteredUsers(
          users.filter((user) => user.organizationType === 'PublicSchool')
        );
        break;
      default:
        setFilteredUsers(users);
        break;
    }
  };

  // construct a function to handle changes in the search
  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);

    setFilteredUsers(
      users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(newSearch.toLowerCase()) ||
          (user.organizationName &&
            user.organizationName
              .toLowerCase()
              .includes(newSearch.toLowerCase()))
      )
    );
  };

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
    handleSearchChange,
  ];
}

export default useFilterOrgs;
