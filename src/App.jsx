import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./pages/Admin/Admin";
import Organization from "./pages/Organization/Organization";
import Donor from "./pages/Donor/Donor";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import FurtherRegister from "./pages/Auth/FurtherRegister";
import FinishedOrPending from "./pages/Donor/FinishedOrPending";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin/*" element={<Admin />}></Route>
        <Route path="/organization/*" element={<Organization />}></Route>
        <Route path="/donor/*" element={<Donor />}></Route>
        <Route
          path="/FinishedOrPendingDonations/*"
          element={<FinishedOrPending />}
        ></Route>
        <Route path="/login/*" element={<Login />}></Route>
        <Route path="/register/*" element={<Register />}></Route>
        <Route path="/furtherregister/*" element={<FurtherRegister />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
