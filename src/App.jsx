import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Admin from './pages/Admin/Admin';
import Organization from './pages/Organization/Organization';
import Donor from './pages/Donor/Donor';

export default function App() {
  return (
    <Router>
      <div className="bg-background-main h-full">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/organization" element={<Organization />}></Route>
            <Route path="/donor" element={<Donor />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
