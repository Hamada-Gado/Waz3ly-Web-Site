import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Admin from './pages/Admin/Admin';
import Organization from './pages/Organization/Organization';
import Donor from './pages/Donor/Donor';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './pages/Auth/Login';
import RegisterForm from './pages/Auth/RegisterForm';

import useFitDiv from './hooks/useFitDiv';
import FinishedOrPending from './pages/Donor/FinishedOrPending';
import FilterClothes from './components/Donor/FilterClothes';
import FilterToys from './components/Donor/FilterToys';
import FilterFood from './components/Donor/FilterFood';
import FilterMedicalSupplies from './components/Donor/FilterMedicalSupplies';
import FilterTeachingPosts from './components/Donor/FilterTeachingPosts';
import FilterMedicalCases from './components/Donor/FilterMedicalCases';

export default function App() {
  const ref = useFitDiv();
  return (
    <Router>
      <Header />
      <div id="main-content" className="h-full overflow-auto m-0" ref={ref}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
          <Route path="/organization/*" element={<Organization />}></Route>
          <Route path="/donor/*" element={<Donor />}></Route>
          <Route path="/login/*" element={<Login />}></Route>
          <Route path="/registerForm/*" element={<RegisterForm />}></Route>
          <Route
            path="/FinishedOrPendingDonations/*"
            element={<FinishedOrPending />}
          ></Route>
          <Route path="/filterClothes/*" element={<FilterClothes />}></Route>
          <Route path="/filterToys/*" element={<FilterToys />}></Route>
          <Route
            path="/filterTeaching/*"
            element={<FilterTeachingPosts />}
          ></Route>
          <Route
            path="/filterMedicalCases/*"
            element={<FilterMedicalCases />}
          ></Route>

          <Route path="/filterFood/*" element={<FilterFood />}></Route>
          <Route
            path="/filterMeds/*"
            element={<FilterMedicalSupplies />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
