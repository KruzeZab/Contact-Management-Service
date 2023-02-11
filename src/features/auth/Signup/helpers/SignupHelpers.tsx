import { Typography } from "@mui/material";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { type FieldErrorsImpl } from "react-hook-form";
import { db } from "../../../../firebase.config";

export const passwordMessage = (
  errors: Partial<FieldErrorsImpl<Record<string, any>>>
) => {
  if (errors.password != null) {
    return (
      <Typography
        variant="caption"
        color="error.main"
        display="block"
        mb={1}
        ml={2}
      >
        {errors.password?.message
          ? String(errors.password.message)
          : null}
      </Typography>
    );
  } else if (errors.cfmPassword != null) {
    return (
      <Typography
        variant="caption"
        color="error.main"
        display="block"
        mb={1}
        ml={2}
      >
        {errors.cfmPassword?.message
          ? String(errors.cfmPassword.message)
          : null}
      </Typography>
    );
  } else {
    return (
      <Typography
        variant="caption"
        color="text.secondary"
        display="block"
        mb={1}
        ml={2}
      >
        Use 8 or more characters with a mix of letters, numbers and
        symbols
      </Typography>
    );
  }
};

export const fnameValidate = {
  required: (value: string) => {
    if (value === "") return "First name is required";
    return true;
  },
};

export const lnameValidate = {
  required: (value: string) => {
    if (value === "") return "Last name is required";
    return true;
  },
};

export const emailValidate = {
  required: (value: string) => {
    if (value === "") return "Email is required";
    return true;
  },

  pattern: (value: string) => {
    if (
      value.match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      ) == null
    )
      return "Email is not valid";
    return true;
  },

  unique: async (value: string) => {
    const usersRef = collection(db, "users");
    const q = query(
      usersRef,
      where("email", "==", value.toLowerCase())
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) return "Email is already in use";
    return true;
  },
};

export const passwordValidate = {
  required: (value: string) => {
    if (value === "") return "Password is required";
    return true;
  },

  minLength: (value: string) => {
    if (value.length < 8)
      return "Password must be at least 8 characters";
    return true;
  },
};
