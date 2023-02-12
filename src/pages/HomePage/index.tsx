// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase.config";
import Header from "../../layout/Header";

const HomePage = () => {
  // const handleLogout = () => {
  //   signOut(auth);
  // };

  return (
    <div>
      <Header />

      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default HomePage;
