import { Stack } from "@mui/material";
import SigninView from "../../features/auth/Signin/SigninView";

const SigninPage = () => {
  return (
    <Stack
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <SigninView />
    </Stack>
  );
};

export default SigninPage;
