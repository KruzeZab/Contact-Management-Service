import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useAppSelector } from "../app/hooks";

interface PrivateRouteProps {
  component: any;
  exact?: boolean;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const [checking, setChecking] = useState(true);
  const location = useLocation();

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, () => {
      setChecking(false);
    });

    return () => {
      unsuscribe();
    };
  }, []);

  if (checking) {
    return <></>;
  }

  return user ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
