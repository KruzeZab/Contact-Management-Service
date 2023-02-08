import { Box } from "@mui/material";
import SignupForm from "./SignupForm";
import SignupMeta from "./SignupMeta";

const SignupView = () => {
  return (
    <>
      {/* Main Form */}
      <Box>
        <SignupMeta />
        <SignupForm />
      </Box>

      {/* Image Banner */}
      <Box display={{ xs: "none", md: "block" }}>
        <img src="./auth-banner.webp" alt="auth banner" />
      </Box>
    </>
  );
};

export default SignupView;
