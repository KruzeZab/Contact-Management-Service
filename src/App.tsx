import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SigninPage />} />
            <Route path="/register" element={<SignupPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
