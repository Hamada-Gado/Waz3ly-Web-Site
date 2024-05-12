import "../../pages/Admin/Dashboard.css"


export default function SideBar(){
	return (
		<div className="sidebar">
			<div className="title">
				<h2>Admin</h2>
			</div>
			<div className="nav">
				<a className="sidebar-item" href="/admin/requests">
					Manage Requests
				</a>

				<a className="sidebar-item" href="/admin/submissions">
					Manage Submissions
				</a>

				<a className="sidebar-item" href="/admin/passwords">
					Manage Passwords
				</a>
			</div>
		</div>
	);
}

