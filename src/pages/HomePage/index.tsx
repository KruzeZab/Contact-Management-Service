// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase.config";

import Layout from "../../layout";

const HomePage = () => {
  // const handleLogout = () => {
  //   signOut(auth);
  // };

  return (
    <div>
      <Layout />

      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default HomePage;
