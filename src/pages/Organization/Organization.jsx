import useFitDiv from '/src/hooks/useFitDiv';

const Organization = () => {
  const ref = useFitDiv();
  const card =
    'block m-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700';
  const button = 'text-white font-bold py-2 px-4 rounded';
  return (
    <div
      className="w-full inline-grid place-items-center justify-center items-center gap-0"
      ref={ref}
      style={{
        gridTemplateColumns: 'repeat(1, auto)',
      }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
          gridAutoRows: '100px',
        }}
      >
        <div className={card}>
          <button className={button + ' col-start-1'}>
            Account Settings 🔧
          </button>
        </div>

        <div className={card + ' col-start-2'}>
          <button className={button}>My Donation Requests</button>
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
          gridAutoRows: '100px',
        }}
      >
        <div className={card + ' col-start-1'}>
          <button className={button}>Our Heros 🌟</button>
        </div>

        <div className={card + ' col-start-2'}>
          <button className={button}>Notifications</button>
        </div>
      </div>
    </div>
  );
};

export default Organization;
