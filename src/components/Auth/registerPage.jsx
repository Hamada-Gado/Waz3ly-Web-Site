import Input from "./Input";

const Page = ({ pageProps, ...props }) => {
  return (
    <>
      {pageProps.map((elem) => (
        <Input key={elem.name} {...elem} {...props} required={true} />
      ))}
      <br />
    </>
  );
};

export default Page;
