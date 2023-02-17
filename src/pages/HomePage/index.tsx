import Contacts from "../../features/Contacts";

const HomePage = () => {
  const handleLogout = () => {};

  return (
    <>
      <Contacts />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default HomePage;
