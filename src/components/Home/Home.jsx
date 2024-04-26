const Home = () => {
  return (
    <div>
      <h1
        style={{
          color: 'black',
          fontSize: '2rem',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        Hello to our beautiful app!!!
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '0.5rem',
          }}
        >
          Login
        </button>
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '0.5rem',
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
