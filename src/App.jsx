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

export default function App() {
  const ref = useFitDiv();
  return (
    <Router>
      <Header />
      <div id="main-content" className="h-full overflow-auto" ref={ref}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
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
