import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Organization from "./pages/Organization/Organization";
import Donor from "./pages/Donor/Donor";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import useFitDiv from "./hooks/useFitDiv";
import FinishedOrPending from "./pages/Donor/FinishedOrPending";
import Settings from "./pages/Account/Settings";

// Admin imports
import Admin from "./pages/Admin/Admin";
import AdminListOfUsers from "./pages/Admin/ListOfUsers";
import AdminRequests from "./components/Admin/NotFound";
import AdminPasswords from "./components/Admin/NotFound";
import AdminViewUser from "../src/pages/Admin/AdminViewUser";

export default function App() {
  const ref = useFitDiv();
  return (
    <Router>
      <Header />
      <div id="main-content" className="h-full overflow-auto" ref={ref}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/organization" element={<Organization />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin/" element={<Admin />}></Route>
          <Route
            path="/admin/listofusers"
            element={<AdminListOfUsers />}
          ></Route>
          <Route path="/admin/requests" element={<AdminRequests />}></Route>
          <Route path="/admin/passwords" element={<AdminPasswords />}></Route>
          <Route path="/admin/view-user" element={<AdminViewUser />}></Route>
          <Route
            path="/donor/FinishedOrPendingDonations"
            element={<FinishedOrPending />}
          ></Route>
          <Route
            path="*"
            element={
              <div className="bg-red-500 text-white text-center p-4">
                <h1>404 Not Found</h1>
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
