import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
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
    formState: { errors },
  } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
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
          {...register("cfmPassword", {
            validate: {
              matches: (value: string) => {
                if (value !== getValues("password"))
                  return "Passwords do not match";
                return true;
              },
              ...passwordValidate,
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
