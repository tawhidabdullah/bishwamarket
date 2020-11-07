//@ts-nocheck
import * as Yup from "yup";

export const initialResetPasswordValues = {
 
  newPassword: "",
  confirmPassword: "",
};

export const resetPasswordValidationSchema = Yup.object().shape({
 
  newPassword: Yup.string()
    .label("New Password")
    .required()
    .min(6, "New Password must have at least 6 characters"),

    confirmPassword: Yup.string()
    .label("Confirm New password")
    .required()
    .min(6, "Confirm New password must have at least 6 characters")
    .oneOf(
      [Yup.ref("newPassword"), null],
      "Confirm new password must match to new password"
    ),
});
