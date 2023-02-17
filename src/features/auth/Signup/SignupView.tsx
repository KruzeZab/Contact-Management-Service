import { Alert, Box, LinearProgress, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import SignupForm from "./renders/SignupForm";
import SignupMeta from "./renders/SignupMeta";

const SignupView = () => {
  const rhf = useForm();

  const onSubmit = (values: any) => {
    rhf.reset();
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
        <LinearProgress />

        {/* Form and Banner */}
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={1}
        >
          <Box>
            <SignupMeta />

            <Alert variant="filled" severity="error">
              Error
            </Alert>

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
