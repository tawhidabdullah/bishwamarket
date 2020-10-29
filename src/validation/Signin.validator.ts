import * as Yup from "yup";

export const initialSigninValues = {
  email: "",
  password: "",
};

export const signinValidationSchema = Yup.object().shape({
  email: Yup.string().label("Email").email().required("Email is required"),

  password: Yup.string()
    .label("Password")
    .required("Password is required")
    .min(6, "Password must have at least 6 characters"),
});
