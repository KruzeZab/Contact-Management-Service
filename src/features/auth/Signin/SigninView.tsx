import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Alert, Box, LinearProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import loginUser from "../apis/loginUser";

import SigninMeta from "./renders/SigninMeta";
import SigninForm from "./renders/SigninForm";

const SigninView = () => {
  const rhf = useForm({ mode: "onBlur" });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.auth);

  const onSubmit = (values: any) => {
    dispatch(loginUser(values)).then(() => {
      rhf.reset();
      navigate("/");
    });
  };

  return (
    <Box border={1} borderColor="divider" borderRadius={3} m={2}>
      {/* Loading indicator */}
      {loading && <LinearProgress />}

      {/* Form and Banner */}
      <Box p={2} pb={0}>
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
      </Box>
    </Box>
  );
};

export default SigninView;
