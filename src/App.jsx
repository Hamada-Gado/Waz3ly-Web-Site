import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Organization from './pages/Organization/Organization';
import Donor from './pages/Donor/Donor';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './pages/Auth/Login';
import RegisterForm from './pages/Auth/RegisterForm';

import useFitDiv from './hooks/useFitDiv';

// Admin imports
import Admin from "./pages/Admin/Admin";
import AdminListOfUsers from "./pages/Admin/ListOfUsers";
import AdminRequests from "./components/Admin/NotFound";
import AdminPasswords from "./components/Admin/NotFound";
import AdminViewUser from "./components/Admin/NotFound";

export default function App() {
	const ref = useFitDiv();
	return (
		<Router>
			<Header />
			<div id="main-content" className="h-full overflow-auto m-0" ref={ref}>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/admin/" element={<Admin />}></Route>
					<Route path="/admin/listofusers" element={<AdminListOfUsers />}></Route>
					<Route path="/admin/requests" element={<AdminRequests />}></Route>
					<Route path="/admin/passwords" element={<AdminPasswords />}></Route>
					<Route path="/admin/view-user" element={<AdminViewUser />}></Route>
					<Route path="/organization/*" element={<Organization />}></Route>
					<Route path="/donor/*" element={<Donor />}></Route>
					<Route path="/login/*" element={<Login />}></Route>
					<Route path="/registerForm/*" element={<RegisterForm />}></Route>
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}


