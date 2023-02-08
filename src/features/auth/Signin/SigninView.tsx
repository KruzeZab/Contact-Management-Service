import { Box } from "@mui/material";

import SigninMeta from "./SigninMeta";
import SigninForm from "./SigninForm";

const SigninView = () => {
  return (
    <>
      {/* Main Form */}
      <Box>
        <SigninMeta />
        <SigninForm />
      </Box>
    </>
  );
};

export default SigninView;
