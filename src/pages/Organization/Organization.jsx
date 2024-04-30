import useExpandToFooter from '/src/hooks/useExpandToFooter';

const Organization = () => {
  const ref = useExpandToFooter();
  const card =
    'block m-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700';
  const button = 'text-white font-bold py-2 px-4 rounded';
  return (
    <div className="h-full overflow-auto">
      <div className="grid gap-0" ref={ref}>
        <div className={card}>
          <button className={button + ' row-start-1'}>Account Settings</button>
        </div>

        <div className={card + ' row-start-1'}>
          <button className={button}>Account Settings</button>
        </div>

        <div className={card + ' row-start-2'}>
          <button className={button}>Account Settings</button>
        </div>

        <div className={card + ' row-start-2'}>
          <button className={button}>Account Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Organization;
