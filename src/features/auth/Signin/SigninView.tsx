import { FormProvider, useForm } from "react-hook-form";
import { Box } from "@mui/material";

import SigninMeta from "./renders/SigninMeta";
import SigninForm from "./renders/SigninForm";

const SigninView = () => {
  const rhf = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box>
      <SigninMeta />
      <FormProvider {...rhf}>
        <SigninForm onSubmit={onSubmit} />
      </FormProvider>
    </Box>
  );
};

export default SigninView;
