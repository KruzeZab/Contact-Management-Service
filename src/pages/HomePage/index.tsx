import { signOut } from "firebase/auth";
import Contacts from "../../features/Contacts";
import { auth } from "../../firebase.config";

const HomePage = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <Contacts />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default HomePage;
