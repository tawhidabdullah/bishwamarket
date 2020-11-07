import * as Yup from "yup";

export const udpateConatctInfoValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .label("First Name")
    .required("First name is required")
    .min(3, "First name must have at least 3 characters"),

  lastName: Yup.string()
    .label("Last Name")
    .required("Last name is required")
    .min(3, "Last name must have at least 3 characters"),

  email: Yup.string().label("Email").email().required("Email can not be empty"),

  phone: Yup.string().label("Phone").required("Phone can not be empty"),
  // .min(11, "Phone number must have at least 11 characters"),
});
