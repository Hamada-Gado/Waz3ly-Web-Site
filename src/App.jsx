import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Admin from './pages/Admin/Admin';
import Organization from './pages/Organization/Organization';
import Donor from './pages/Donor/Donor';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import FurtherRegister from './pages/Auth/FurtherRegister';
import NewForm from './pages/Auth/NewForm';
import useExpandTFooter from './hooks/useExpandToFooter';

export default function App() {
  const ref = useExpandTFooter();
  return (
    <Router>
      <Header />
      <div id="main-content" ref={ref}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
          <Route path="/organization/*" element={<Organization />}></Route>
          <Route path="/donor/*" element={<Donor />}></Route>
          <Route path="/login/*" element={<Login />}></Route>
          <Route path="/register/" element={<Register />}></Route>
          <Route path="/test/" element={<NewForm />}></Route>
          <Route
            path="/furtherregister/*"
            element={<FurtherRegister />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
