// @ts-nocheck
import * as Yup from "yup";

export const initialSignupValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  password2: "",
};

export const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .label("First Name")
    .required("First name is required")
    .min(3, "First name must have at least 3 characters"),

  lastName: Yup.string()
    .label("Last Name")
    .required("Last name is required")
    .min(3, "Last name must have at least 3 characters"),

  email: Yup.string().label("Email").email().required("Email is required"),

  password: Yup.string()
    .label("Password")
    .required("Password is required")
    .min(6, "Password must have at least 6 characters"),

  password2: Yup.string()
    .label("Confirm password")
    .required()
    .min(6, "Confirm password must have at least 6 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
