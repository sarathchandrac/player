import HelloButton from '../../components/utility/hello_btn';

const HomePage = () => {
  const alrtBox = () => {
    alert('hi');
  };
  return (
    <>
      <h1 className="bg-gray-500 text-white p-2 m-4">Sarath</h1>
      <HelloButton text="Hello Test" alrt={alrtBox}></HelloButton>
    </>
  );
};

export default HomePage;
