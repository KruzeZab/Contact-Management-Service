import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../../../firebase.config";
import type { AuthUser, SignupFormData } from "../auth.types";

const createUser = createAsyncThunk(
  "auth/createUser",
  async (formData: SignupFormData, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Update Display Name with first name and last name
      await updateProfile(user, {
        displayName: `${formData.fname.toString()} ${formData.lname.toString()}`,
      });

      // store user data in firestore db
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: formData.email,
      });

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

export default createUser;
