import { Box, Stack } from "@mui/material";
import SigninView from "../../features/auth/Signin/SigninView";

const SigninPage = () => {
  return (
    <>
      <Stack
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          border={1}
          borderRadius={1}
          p={2}
          pb={0}
          m={2}
          borderColor="divider"
        >
          <SigninView />
        </Box>
      </Stack>
    </>
  );
};

export default SigninPage;
