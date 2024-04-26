import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <h1>NMC</h1>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
