export const emailValidate = {
  required: (value: string) => {
    if (value === "") return "Email is required";
    return true;
  },

  pattern: (value: string) => {
    if (
      value.match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      ) == null
    )
      return "Email is not valid";
    return true;
  },
};

export const passwordValidate = {
  required: (value: string) => {
    if (value === "") return "Password is required";
    return true;
  },

  minLength: (value: string) => {
    if (value.length < 8)
      return "Password must be at least 8 characters";
    return true;
  },
};
