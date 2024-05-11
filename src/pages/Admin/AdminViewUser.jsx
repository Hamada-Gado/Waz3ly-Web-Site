import {useLocation} from 'react-router-dom';
import "./ViewUser.css";
import profile from "/src/assets/profilePic.png";
import {AccountType} from "../../enums/Enums";


function Table({user}) {
	const data = {
		id: user['id'],
		email: user.email,
		gender: user.gender,
		Number: user.contactNumber,
		area: user.area,
		governorate: user.governorate,
	};
	const specialFields = {};

	const accountType = user.accountType;
	if (accountType === AccountType.Teacher) {
		specialFields.teacherSubject = user.teacherSubject;
	}
	if (accountType === AccountType.Doctor) {
		specialFields.doctorSpecialty = user.doctorSpecialty;
	}

	if (accountType === AccountType.Organization) {
		specialFields.organizationName = user.organizationName;
		specialFields.organizationType = user.organizationType;
	}

	if (accountType === AccountType.Teacher || accountType === AccountType.Doctor) {
		specialFields.maxCases = user.maxCases;
	}

	// split the data into two halves
	const keys = Object.keys(data);
	const firstHalf = {};
	const secondHalf = {};
	const half = Math.ceil(keys.length / 2);
	keys.forEach((key, index) => {
		if (index < half) {
			firstHalf[key] = data[key];
		} else {
			secondHalf[key] = data[key];
		}
	});
	console.log(specialFields);

	return (
		<div className="table-container">
			<div className="general-data">
				<div className="general-data-header">
					General Data
				</div>
				<div className="col">
					<div className="table-header">
						Key
					</div>
					{Object.keys(firstHalf).map((key) => (
							<div className="key" key={key}>{key}</div>
					))}
				</div>
				<div className="col">
					<div className="table-header">
						Value
					</div>
					{Object.values(firstHalf).map((value) => (
							<div className="value" key={value}>{value}</div>
					))}
				</div>
				<div className="col">
					<div className="table-header">
						Key
					</div>
					{Object.keys(secondHalf).map((key) => (
							<div className="key" key={key}>{key}</div>
					))}
				</div>
				<div className="col">
					<div className="table-header">
						Value
					</div>
					{Object.values(secondHalf).map((value) => (
							<div className="value" key={value}>{value}</div>
					))}
				</div>
			</div>
			<div className="user-specific">
				<div className="table-header-ozr">
					Special Fields
				</div>
				<div className="col-ozr">
					<div className="table-header">
						Key
					</div>
					{Object.keys(specialFields).map((key) => (
							<div className="key" key={key}>{key}</div>
					))}
				</div>
				<div className="col-ozr">
					<div className="table-header">
						Value
					</div>
					{Object.values(specialFields).map((value) => (
							<div className="value" key={value}>{value}</div>
					))}
				</div>
			</div>
		</div>
	);
}

function AdminViewUser() {
	const location = useLocation();
	const userId = location.state.userId;
	const user = location.state.user;
	return (
		<div className="user-container">
			<div className="card">
				<img src={profile} alt="Profile" className="profile-pic"/>
				<div className="fullname">{user.firstName} {user.lastName}</div>
				<div className="username">{user.username} - {user.accountType}</div>
				<Table user={user}/>
			</div>
		</div>
	);
}

export default AdminViewUser;
