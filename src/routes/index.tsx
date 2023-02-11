import {
  createBrowserRouter,
  type RouteObject,
} from "react-router-dom";

import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import PrivateRoute from "../hoc/PrivateRoute";
import ProtectedRoute from "../hoc/ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PrivateRoute component={HomePage} />,
  },
  {
    path: "/login",
    element: <ProtectedRoute component={SigninPage} />,
  },
  {
    path: "/signup",
    element: <ProtectedRoute component={SignupPage} />,
  },
];

const router = createBrowserRouter(routes);

export default router;
