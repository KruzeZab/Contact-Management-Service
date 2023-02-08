import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import SignupForm from "./renders/SignupForm";
import SignupMeta from "./renders/SignupMeta";

const SignupView = () => {
  const rhf = useForm({ mode: "onBlur" });

  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      {/* Main Form */}
      <Box>
        <SignupMeta />
        <FormProvider {...rhf}>
          <SignupForm onSubmit={onSubmit} />
        </FormProvider>
      </Box>

      {/* Image Banner */}
      <Box display={{ xs: "none", md: "block" }}>
        <img src="./auth-banner.webp" alt="auth banner" />
      </Box>
    </>
  );
};

export default SignupView;
