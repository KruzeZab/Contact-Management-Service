import { Alert, Box, LinearProgress, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import createUser from "../apis/createUser";
import SignupForm from "./renders/SignupForm";
import SignupMeta from "./renders/SignupMeta";

const SignupView = () => {
  const rhf = useForm({ mode: "onBlur" });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.auth);

  const onSubmit = (values: any) => {
    dispatch(createUser(values)).then(() => {
      rhf.reset();
      navigate("/");
    });
  };

  return (
    <>
      <Box
        border={1}
        borderColor="divider"
        borderRadius={3}
        p={4}
        m={2}
      >
        {/* Loading indicator */}
        {loading && <LinearProgress />}

        {/* Form and Banner */}
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={1}
        >
          <Box>
            <SignupMeta />
            {error && (
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            )}
            <FormProvider {...rhf}>
              <SignupForm onSubmit={onSubmit} />
            </FormProvider>
          </Box>

          {/* Image Banner */}
          <Box display={{ xs: "none", md: "block" }}>
            <img src="./auth-banner.webp" alt="auth banner" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SignupView;
