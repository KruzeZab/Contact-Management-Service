import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const HomePage = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      HomePage
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
