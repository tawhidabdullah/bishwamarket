import * as Yup from "yup";

export const initialSignupValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
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
});
