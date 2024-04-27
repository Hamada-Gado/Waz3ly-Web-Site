import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4 px-6">
        Waza3ly, for donations and more!!!
      </h1>
      <div className="flex justify-center items-center py-4 px-6 gap-1 padding-1 shadow-sm">
        <Link to="/Login">
          <button className="bg-accent text-text p-2 e-round-corner font-body">
            Login
          </button>
        </Link>

        <button className="bg-accent text-text p-2 e-round-corner shadow-sm font-body">
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
