import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center py-4 px-6">
      <h1 className="text-4xl font-bold text-text">
        Waza3ly - Help That Matters
      </h1>
      <div className="flex justify-center items-center py-4 px-6 gap-4">
        <Link to="/login">
          <button className="bg-accent text-text px-4 py-2 rounded-md shadow-sm font-body hover:bg-secondary">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-sm font-body hover:bg-gray-300">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
