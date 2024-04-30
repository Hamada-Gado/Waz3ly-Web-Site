import './ListOfUsers.css';

const Admin = () => {
	return (
		<div className="min-h-full h-screen flex items-center justify-center"> 
			<div className="container">
				<h1 className="sub-title">
					Admin
				</h1>
				<a
						href="/admin/list-of-users"
					className="text-base font-heading font-bold text-primary row-span-1"
				>
					List of Users
				</a>
			</div>
		</div>
	);
};

export default Admin;


/*
 * link to the page of list of users (Create a page to for a list of all Organisation & Donors  #14)
 * link to the page for managing requests (Manage Organisation and Donor Requests #6)
 * link to the page for managing passwords (Create a page to manage the passwords #8)
 * link to the page for viewing user details (Create a Page to view a specific Organisation Details #13)
*/ 
