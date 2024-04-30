import './Dashboard.css';

function SideBar() {
	return (
		<div className="sidebar">
			<div className="title">
				<h2>
					Admin
				</h2>
			</div>
			<div className="nav">
				<a className="sidebar-item" href="/admin/users">
					List of Users
				</a>

				<a className="sidebar-item" href="/admin/requests">
					Manage Requests
				</a>

				<a className="sidebar-item" href="/admin/passwords">
					Manage Passwords
				</a>

				<a className="sidebar-item" href="/admin/view-user">
					View User Details
				</a>
			</div>
		</div>
	);
}


function AdminListOfUsers() {
	return (
		<div className="content-container">
			<div className="title">
				List of Users
			</div>
			<div className="content">
				<table>
					<tr>
						<th>Username</th>
						<th>Age</th>
						<th>Role</th>
					</tr>
					<tr>
						<td>John Doe</td>
						<td>24</td>
						<td>Donor</td>
					</tr>
					<tr>
						<td>Jane Doe</td>
						<td>36</td>
						<td>Organisation</td>
					</tr>
					<tr>
						<td>John Smith</td>
						<td>42</td>
						<td>Donor</td>
					</tr>
					<tr>
						<td>Jane Smith</td>
						<td>29</td>
						<td>Organisation</td>
					</tr>
				</table>
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
};



/*
 * link to the page of list of users (Create a page to for a list of all Organisation & Donors  #14)
 * link to the page for managing requests (Manage Organisation and Donor Requests #6)
 * link to the page for managing passwords (Create a page to manage the passwords #8)
 * link to the page for viewing user details (Create a Page to view a specific Organisation Details #13)
*/ 
