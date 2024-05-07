import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./pages/Admin/Admin";
import Organization from "./pages/Organization/Organization";
import Donor from "./pages/Donor/Donor";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import useFitDiv from "./hooks/useFitDiv";
import FinishedOrPending from "./pages/Donor/FinishedOrPending";
import FilterClothes from "./components/Donor/FilterClothes";
import FilterToys from "./components/Donor/FilterToys";
import FilterFood from "./components/Donor/FilterFood";
import FilterMedicalSupplies from "./components/Donor/FilterMedicalSupplies";
import FilterTeachingPosts from "./components/Donor/FilterTeachingPosts";
import FilterMedicalCases from "./components/Donor/FilterMedicalCases";

export default function App() {
  const ref = useFitDiv();
  return (
    <Router>
      <Header />
      <div id="main-content" className="h-full overflow-auto m-0" ref={ref}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
          <Route path="/organization" element={<Organization />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/donor/FinishedOrPendingDonations"
            element={<FinishedOrPending />}
          ></Route>
          <Route
            path="/donor/filterClothes"
            element={<FilterClothes />}
          ></Route>
          <Route path="/donor/filterToys" element={<FilterToys />}></Route>
          <Route
            path="/donor/filterTeaching"
            element={<FilterTeachingPosts />}
          ></Route>
          <Route
            path="/donor/filterMedicalCases"
            element={<FilterMedicalCases />}
          ></Route>

          <Route path="/donor/filterFood" element={<FilterFood />}></Route>
          <Route
            path="/donor/filterMeds"
            element={<FilterMedicalSupplies />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
