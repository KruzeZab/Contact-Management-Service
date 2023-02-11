import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useAppSelector } from "../app/hooks";

interface PrivateRouteProps {
  component: any;
  path?: string;
  exact?: boolean;
}

const ProtectedRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const [checking, setChecking] = useState(true);

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

  return user ? <Navigate to="/" /> : <Component {...rest} />;
};

export default ProtectedRoute;
