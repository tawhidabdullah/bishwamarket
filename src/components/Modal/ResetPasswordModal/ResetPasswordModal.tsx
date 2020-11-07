//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useAlert } from "react-alert";

// import elements
import { Header } from "../../elements/Header";
import { Text } from "../../elements/Text";
import { InputField } from "../../common/InputField";
import { DrawerButton } from "../../common/Button/DrawerButton";

// import hook
import { useHandleFetch } from "../../../hooks";

// import session ops
import { sessionOperations } from "../../../state/ducks/session";

// import validation schema
import {
  initialResetPasswordValues,
  resetPasswordValidationSchema,
} from "../../../validation/ResetPassword.validator";

const headerStyles = {
  "font-size": "16px",
  "font-weight": "700",
};

const closeButtonStyles = {
  cursor: "pointer",
};

const inputStyles = {
  padding: "5px",
};

const buttonStyles = {
  padding: "6px 0",
  "font-weight": "bold",
};

const ResetPasswordModal = ({ show, onHide, size, logout, resetToken }) => {
  const alert = useAlert();
  const history = useHistory();

  // this hook update password
  const [resetPasswordState, handleResetPassword] = useHandleFetch(
    {},
    "resetPassword"
  );

  const handleResetPasswordSubmit = async (values, actions) => {
    const resetPassRes = await handleResetPassword({
      body: {
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
        resetToken: resetToken
      },
    });

    if (resetPassRes && resetPassRes.status === "ok") {
      localStorage.removeItem("authToken");
      logout();
      alert.success("Password resetted successfully. Please Login to continue");
      history.push("/signin");
      onHide();
    }

    actions.setSubmitting(false);
  };

  return (
    <Modal size={size} show={show} onHide={onHide}>
      <ResetPasswordModalContainer>
        <ModalHeader>
          <Header customStyle={headerStyles} content="Reset Password" />
          <Text customStyle={closeButtonStyles} clickAction={onHide}>
            &#10005;
          </Text>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ ...initialResetPasswordValues }}
            validationSchema={resetPasswordValidationSchema}
            validateOnBlur={false}
            onSubmit={(values, actions) =>
              handleResetPasswordSubmit(values, actions)
            }
          >
            {({
              handleChange,
              values,
              handleSubmit,
              errors,
              isSubmitting,
              touched,
              setFieldTouched,
            }) => (
              <form onSubmit={handleSubmit}>
                <InputField
                  label="New Password"
                  type="password"
                  name="newPassword"
                  customStyle={inputStyles}
                  value={values.newPassword}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("newPassword");
                  }}
                />

                <ErrorText>
                  {(touched.newPassword && errors.newPassword) ||
                    (!isSubmitting &&
                      resetPasswordState.error["error"]["newPassword"])}
                </ErrorText>

                <InputField
                  label="Confirm New Password"
                  type="password"
                  name="confirmPassword"
                  customStyle={inputStyles}
                  value={values.confirmPassword}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("confirmPassword");
                  }}
                />

                <ErrorText>
                  {(touched.confirmPassword && errors.confirmPassword) ||
                    (!isSubmitting &&
                      resetPasswordState.error["error"]["confirmPassword"])}
                </ErrorText>

                <DrawerButton
                  customStyle={buttonStyles}
                  wrapperStyle={{ "margin-top": "10px" }}
                  type="submit"
                >
                  {isSubmitting ? "Updating..." : "Update"}
                </DrawerButton>
              </form>
            )}
          </Formik>
        </ModalBody>
      </ResetPasswordModalContainer>
    </Modal>
  );
};

const mapDispatchToProps = {
  logout: sessionOperations.logout,
};

export default connect(null, mapDispatchToProps)(ResetPasswordModal);

const ErrorText = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 13px;
  margin-top: -11px;
  position: absolute;
`;

const ResetPasswordModalContainer = styled.div`
  padding: 20px 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;
