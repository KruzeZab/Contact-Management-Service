import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const SigninForm = () => {
  return (
    <form>
      <TextField
        name="email"
        size="small"
        label="Email"
        fullWidth
        margin="normal"
      />

      <TextField
        name="password"
        size="small"
        label="Password"
        fullWidth
        margin="normal"
      />

      {/* CTA */}
      <Box mt={2} mb={2}>
        <Button
          variant="contained"
          fullWidth
          size="small"
          disableElevation
        >
          Login
        </Button>
      </Box>

      <Divider />

      <Box textAlign="center" p={0.5}>
        <Typography variant="body1" fontSize={16}>
          Dont have an account? <Button>Join Now</Button>
        </Typography>
      </Box>
    </form>
  );
};

export default SigninForm;
