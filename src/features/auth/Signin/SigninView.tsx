import { FormProvider, useForm } from "react-hook-form";
import { Alert, Box, LinearProgress } from "@mui/material";

import SigninMeta from "./renders/SigninMeta";
import SigninForm from "./renders/SigninForm";

const SigninView = () => {
  const rhf = useForm();
  // const from = location.state?.from?.pathname || "/";

  const onSubmit = (values: any) => {
    rhf.reset();
  };

  return (
    <Box border={1} borderColor="divider" borderRadius={3} m={2}>
      {/* Loading indicator */}
      <LinearProgress />

      {/* Form and Banner */}
      <Box p={2} pb={0}>
        <Box>
          <SigninMeta />
          <Alert variant="filled" severity="error">
            error
          </Alert>

          <FormProvider {...rhf}>
            <SigninForm onSubmit={onSubmit} />
          </FormProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default SigninView;
