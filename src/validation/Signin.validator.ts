import * as Yup from "yup";

export const initialSigninValues = {
  username: "",
  password: "",
};

export const signinValidationSchema = Yup.object().shape({
  username: Yup.string()
    .label("Username")
    .required("Username is required")
    .min(3, "Username must have at least 3 characters"),

  password: Yup.string()
    .label("Password")
    .required("Password is required")
    .min(6, "Password must have at least 6 characters"),
});
