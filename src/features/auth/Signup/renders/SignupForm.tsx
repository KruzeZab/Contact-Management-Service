import { LoadingButton } from "@mui/lab";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { useAppSelector } from "../../../../app/hooks";
import {
  emailValidate,
  fnameValidate,
  lnameValidate,
  passwordMessage,
  passwordValidate,
} from "../helpers/SignupHelpers";

interface SignupFormProps {
  onSubmit: (data: any) => void;
}

const SignupForm = (props: SignupFormProps) => {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { loading } = useAppSelector((state) => state.auth);

  // State
  const [showPass, setShowPass] = useState(false);

  const fnameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (fnameRef.current) fnameRef.current.focus();
  }, []);

  const handleInstantChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        inputRef={fnameRef}
        {...register("fname", {
          validate: {
            ...fnameValidate,
          },
        })}
        name="fname"
        error={!(errors.fname == null)}
        size="small"
        label="First Name"
        helperText={
          errors.fname?.message ? String(errors.fname.message) : null
        }
        fullWidth
        margin="normal"
      />

      <TextField
        {...register("lname", {
          validate: {
            ...lnameValidate,
          },
        })}
        name="lname"
        error={!(errors.lname == null)}
        size="small"
        label="Last Name"
        helperText={
          errors.lname?.message ? String(errors.lname.message) : null
        }
        fullWidth
        margin="normal"
      />

      <TextField
        {...register("email", {
          onBlur: handleInstantChange,
          validate: {
            ...emailValidate,
          },
        })}
        name="email"
        error={!(errors.email == null)}
        size="small"
        label="Email"
        helperText={
          errors.email?.message ? String(errors.email.message) : null
        }
        fullWidth
        margin="normal"
      />

      <Stack direction="row" spacing={2} mt={2} mb={2}>
        <TextField
          type={showPass ? "text" : "password"}
          {...register("password", {
            validate: {
              ...passwordValidate,
            },
          })}
          error={!(errors.password == null)}
          size="small"
          label="Password"
          fullWidth
        />

        <TextField
          type={showPass ? "text" : "password"}
          {...register("cfmPassword", {
            validate: {
              matches: (value: string) => {
                if (value !== getValues("password"))
                  return "Passwords do not match";
                return true;
              },
            },
          })}
          error={!(errors.cfmPassword == null)}
          size="small"
          label="Confirm Password"
          fullWidth
        />
      </Stack>

      {passwordMessage(errors)}

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
      <Stack
        mt={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button component={RouterLink} to="/login">
          Sign in Instead
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          size="small"
          disableElevation
          loading={loading}
        >
          Create Account
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default SignupForm;
