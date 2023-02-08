import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firebase.config";
import type { AuthUser, SigninFormData } from "../auth.types";

const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData: SigninFormData, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      const result: AuthUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email ?? "",
        photoUrl: user.photoURL ?? "",
      };

      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export default loginUser;
