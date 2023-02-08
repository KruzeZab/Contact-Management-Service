import { Stack, Typography } from "@mui/material";

const SignupMeta = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" mb={1}>
        <img src="./logo.png" alt="contacts logo" />
        <Typography variant="h6" color="text.secondary" fontSize={21}>
          Contact Management
        </Typography>
      </Stack>

      <Typography variant="body1" fontSize={24} mb={1}>
        Create your contacts account
      </Typography>

      <Typography variant="body1" fontSize={18} mb={1}>
        Continue To Contact App
      </Typography>
    </>
  );
};

export default SignupMeta;
