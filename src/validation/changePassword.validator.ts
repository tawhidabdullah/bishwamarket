//@ts-nocheck
import * as Yup from "yup";

export const initialChangePasswordValues = {
  password: "",
  newPassword: "",
  newPassword2: "",
};

export const changePasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .label("Old Password")
    .required()
    .min(6, "Old password must have at least 6 characters"),
  newPassword: Yup.string()
    .label("New Password")
    .required()
    .min(6, "New Password must have at least 6 characters"),
  newPassword2: Yup.string()
    .label("Confirm New password")
    .required()
    .min(6, "Confirm New password must have at least 6 characters")
    .oneOf(
      [Yup.ref("newPassword"), null],
      "Confirm new password must match to new password"
    ),
});
