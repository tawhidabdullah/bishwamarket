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
  initialChangePasswordValues,
  changePasswordValidationSchema,
} from "../../../validation/changePassword.validator";

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

const ChangePasswordModal = ({ show, onHide, size, logout }) => {
  const alert = useAlert();
  const history = useHistory();

  // this hook update password
  const [changePasswordState, handleChangePassword] = useHandleFetch(
    {},
    "changePassword"
  );

  const handleChangePasswordSubmit = async (values, actions) => {
    const changePassRes = await handleChangePassword({
      body: values,
    });

    if (changePassRes && changePassRes.status === "ok") {
      localStorage.removeItem("authToken");
      logout();
      alert.success("Password changed successfully. Please Login to continue");
      history.push("/signin");
      onHide();
    }

    actions.setSubmitting(false);
  };

  return (
    <Modal size={size} show={show} onHide={onHide}>
      <ChangePasswordModalContainer>
        <ModalHeader>
          <Header customStyle={headerStyles} content="Update Password" />
          <Text customStyle={closeButtonStyles} clickAction={onHide}>
            &#10005;
          </Text>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ ...initialChangePasswordValues }}
            validationSchema={changePasswordValidationSchema}
            validateOnBlur={false}
            onSubmit={(values, actions) =>
              handleChangePasswordSubmit(values, actions)
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
                  label="Old Password"
                  type="password"
                  name="password"
                  customStyle={{ ...inputStyles, label: { "padding-top": 0 } }}
                  value={values.password}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("password");
                  }}
                />

                <ErrorText>
                  {(touched.password && errors.password) ||
                    (!isSubmitting &&
                      changePasswordState.error["error"]["password"])}
                </ErrorText>

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
                      changePasswordState.error["error"]["newPassword"])}
                </ErrorText>

                <InputField
                  label="Confirm New Password"
                  type="password"
                  name="newPassword2"
                  customStyle={inputStyles}
                  value={values.newPassword2}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("newPassword2");
                  }}
                />

                <ErrorText>
                  {(touched.newPassword2 && errors.newPassword2) ||
                    (!isSubmitting &&
                      changePasswordState.error["error"]["newPassword2"])}
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
      </ChangePasswordModalContainer>
    </Modal>
  );
};

const mapDispatchToProps = {
  logout: sessionOperations.logout,
};

export default connect(null, mapDispatchToProps)(ChangePasswordModal);

const ErrorText = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 13px;
  margin-top: -11px;
  position: absolute;
`;

const ChangePasswordModalContainer = styled.div`
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
