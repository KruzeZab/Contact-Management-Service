import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
} from "../helpers/SigninHelpers";

interface SigninFormProps {
  onSubmit: (data: any) => void;
}

const SigninForm = (props: SigninFormProps) => {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={!(errors.email == null)}
        helperText={
          errors.email?.message ? String(errors.email.message) : null
        }
        {...register("email", {
          validate: {
            ...emailValidate,
          },
        })}
        name="email"
        size="small"
        label="Email"
        fullWidth
        margin="normal"
      />

      <TextField
        error={!(errors.password == null)}
        helperText={
          errors.password?.message
            ? String(errors.password.message)
            : null
        }
        {...register("password", {
          validate: {
            ...passwordValidate,
          },
        })}
        name="password"
        size="small"
        label="Password"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Show Password"
        color="primary"
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

SigninForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SigninForm;
