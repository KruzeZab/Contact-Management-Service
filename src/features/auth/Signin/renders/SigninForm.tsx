import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
} from "../helpers/SigninHelpers";
import { useAppSelector } from "../../../../app/hooks";

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

  const { loading } = useAppSelector((state) => state.auth);

  const [showPass, setShowPass] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        inputRef={emailRef}
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
        type={showPass ? "text" : "password"}
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
        control={
          <Checkbox
            onChange={() => {
              setShowPass((pass) => !pass);
            }}
          />
        }
        label="Show Password"
        color="primary"
      />

      {/* CTA */}
      <Box mt={2} mb={2}>
        <LoadingButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          loading={loading}
        >
          Log In
        </LoadingButton>
      </Box>

      <Divider />

      <Box textAlign="center" p={1.5}>
        <Typography variant="body1" fontSize={16}>
          Dont have an account?{" "}
          <MuiLink
            underline="none"
            to="/signup"
            component={RouterLink}
          >
            Join Now
          </MuiLink>
        </Typography>
      </Box>
    </form>
  );
};

SigninForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SigninForm;
