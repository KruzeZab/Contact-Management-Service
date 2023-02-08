import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";

const SignupForm = () => {
  return (
    <form>
      <TextField
        name="fname"
        size="small"
        label="First Name"
        fullWidth
        margin="normal"
      />

      <TextField
        name="lname"
        size="small"
        label="Last Name"
        fullWidth
        margin="normal"
      />

      <TextField
        name="email"
        size="small"
        label="Email"
        fullWidth
        margin="normal"
      />

      <Stack direction="row" spacing={2} mt={2} mb={2}>
        <TextField
          name="password"
          size="small"
          label="Password"
          fullWidth
        />

        <TextField
          name="cfmPassword"
          size="small"
          label="Confirm Password"
          fullWidth
        />
      </Stack>

      <FormControlLabel
        control={<Checkbox />}
        label="Show Password"
        color="primary"
      />

      {/* CTA */}
      <Stack
        mt={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button>Sign in Instead</Button>
        <Button variant="contained" size="small" disableElevation>
          Create Account
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
