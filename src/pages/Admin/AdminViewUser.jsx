import {react, useState} from 'react';
import {useLocation} from 'react-router-dom';
import "./ViewUser.css";
import profile from "../../../public/profilePic.png";

function AdminViewUser() {
		const location = useLocation();
		const userId = location.state.userId;
		const user = location.state.user;
		console.log(Object.keys(user));
		return (
			<div className="container">
				<div className="full-name">
					{user.firstName} {user.lastName}
				</div>
				<div className="x">
					<img src={profile} alt="pic" className="profile-pic"/>
					<div className="info">
					</div>
				</div>
			</div>
		);
}

export default AdminViewUser;

/*
	0 "id"
	1 "donations"
	2 "username"
	3 "firstName"
	4 "lastName"
	5 "email"
	6 "password"
	7 "gender"
	8 "contactNumber"
	9 "area"
	10 "governorate"
	11 "accountType"
	12 "address"
	13 "maxCases"
	14 "doctorSpecialty"
	15 "teacherSubject"
	16 "organizationName"
	17 "organizationType"
*/
