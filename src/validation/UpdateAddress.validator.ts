import * as Yup from "yup";

export const udpateAddressValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .label("First Name")
    .required("First name is required")
    .min(3, "First name must have at least 3 characters"),

  lastName: Yup.string()
    .label("Last Name")
    .required("Last name is required")
    .min(3, "Last name must have at least 3 characters"),

  city: Yup.string()
    .label("City")
    .required("City is required")
    .min(3, "City must have at least 3 characters"),

  address1: Yup.string()
    .label("Address")
    .required("Address is required")
    .min(3, "Address must have at least 3 characters"),

  phone: Yup.string().label("Phone").required("Phone can not be empty"),
  // .min(11, "Phone number must have at least 11 characters"),
});
