import { FormProvider, useForm } from "react-hook-form";
import { Alert, Box, LinearProgress, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import loginUser from "../apis/loginUser";

import SigninMeta from "./renders/SigninMeta";
import SigninForm from "./renders/SigninForm";

const SigninView = () => {
  const rhf = useForm({ mode: "onBlur" });

  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.auth);

  const onSubmit = (values: any) => {
    dispatch(loginUser(values)).then(() => {
      rhf.reset();
    });
  };

  return (
    <Box border={1} borderColor="divider" borderRadius={3}>
      {/* Loading indicator */}
      {loading && <LinearProgress />}

      {/* Form and Banner */}
      <Stack
        p={4}
        m={2}
        direction="row"
        justifyContent="space-between"
        spacing={1}
      >
        <Box>
          <SigninMeta />
          {error && (
            <Alert variant="filled" severity="error">
              {error}
            </Alert>
          )}
          <FormProvider {...rhf}>
            <SigninForm onSubmit={onSubmit} />
          </FormProvider>
        </Box>

        {/* Image Banner */}
        <Box display={{ xs: "none", md: "block" }}>
          <img src="./auth-banner.webp" alt="auth banner" />
        </Box>
      </Stack>
    </Box>
  );
};

export default SigninView;
