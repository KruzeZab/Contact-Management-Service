import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const HomePage = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
