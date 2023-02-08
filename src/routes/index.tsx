import {
  createBrowserRouter,
  type RouteObject,
} from "react-router-dom";

import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
