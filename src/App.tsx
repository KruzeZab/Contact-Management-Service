import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<ProtectedRoute component={SigninPage} />}
          />
          <Route
            path="/register"
            element={<PrivateRoute component={SignupPage} />}
          />
          <Route
            path="/"
            element={
              <Layout>
                <PrivateRoute component={HomePage} />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
