import AdminListOfUsers from "../../components/Admin/AdminListOfUsers"
import SideBar from "../../components/Admin/SideBar"
import "./Dashboard.css";

export default function Admin() {
	return (
		<div className="root-container">
			<SideBar />
			<AdminListOfUsers endpoint="list_of_users_for_admin" />
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
