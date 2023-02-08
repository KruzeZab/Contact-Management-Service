import { Stack } from "@mui/material";
import SignupView from "../../features/auth/Signup/SignupView";

const SignupPage = () => {
  return (
    <>
      <Stack
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          m={2}
          direction="row"
          justifyContent="space-between"
          border={1}
          borderColor="divider"
          p={4}
          spacing={1}
          borderRadius={3}
        >
          <SignupView />
        </Stack>
      </Stack>
    </>
  );
};

export default SignupPage;
