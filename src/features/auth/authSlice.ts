import { createSlice } from "@reduxjs/toolkit";
import type { AuthUser } from "../auth/auth.types";
import createUser from "./apis/createUser";
import loginUser from "./apis/loginUser";

interface AuthState {
  loading: boolean;
  error: string | null;
  user: AuthUser | null;
}

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) || "Something went wrong";
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) || "Something went wrong";
    });
  },
});

export default authSlice.reducer;

export const { setUser, clearUser } = authSlice.actions;
