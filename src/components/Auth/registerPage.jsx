import Input from './Input';

const Page = ({ pageProps, formData, ...props }) => {
  return (
    <>
      {pageProps.map((elem) => {
        return (
          <Input
            key={elem.name}
            {...elem}
            {...props}
            value={formData[elem.name]}
            required={true}
          />
        );
      })}
      <br />
    </>
  );
};

export default Page;
