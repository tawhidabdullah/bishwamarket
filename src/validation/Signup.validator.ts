import * as Yup from "yup";

export const initialSignupValues = {
  firstName: "",
  lastName: "",
  email: "",
  // city: "",
  // country: "Bangladesh",
  // phone: "",
  password: "",
  // gender: "",
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

  // city: Yup.string().label("City Name").required("City Name is required"),

  email: Yup.string().label("Email").email().required("Email is required"),
  // address1: Yup.string()
  //   .label("Address")
  //   .required("Address is required")
  //   .min(3, "Address must have three characters"),

  // phone: Yup.string()
  //   .label("Phone")
  //   .required("Phone number is required")
  //   .min(11, "Phone number must have at least 11 characters"),

  password: Yup.string()
    .label("Password")
    .required("Password is required")
    .min(6, "Password must have at least 6 characters"),
});
