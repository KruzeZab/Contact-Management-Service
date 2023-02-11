import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { type AuthUser } from "../../features/auth/auth.types";
import { clearUser, setUser } from "../../features/auth/authSlice";
import { auth } from "../../firebase.config";

const AuthProvider = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const result: AuthUser = {
          uid: user.uid,
          email: user.email ?? "",
          displayName: user.displayName,
          photoUrl: user.photoURL ?? "",
        };
        dispatch(setUser(result));
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      unsuscribe();
    };
  }, []);

  return <></>;
};

export default AuthProvider;
