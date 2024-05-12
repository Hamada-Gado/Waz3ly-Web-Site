import '../../pages/Admin/Dashboard.css';
import UserList from './UserList';
import ToolBar from './ToolBar';

import useFilterUsers from '/src/components/Organization/useFilterUsers';

function ListOfUsers({ endpoint }) {
  console.log('SHOKRAAAAN YA GOBA :D');
  const [
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    search,
    setSearch,
    handleSearchChange,
  ] = useFilterUsers(endpoint);

  return (
    <div className="content-container">
      <div className="title">List of Users</div>
      <ToolBar search={search} handleSearchChange={handleSearchChange} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default ListOfUsers;
