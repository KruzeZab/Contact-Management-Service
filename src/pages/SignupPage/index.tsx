import { Stack } from "@mui/material";
import SignupView from "../../features/auth/Signup/SignupView";

const SignupPage = () => {
  return (
    <Stack
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <SignupView />
    </Stack>
  );
};

export default SignupPage;
