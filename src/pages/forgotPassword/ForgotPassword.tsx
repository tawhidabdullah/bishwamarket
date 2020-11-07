// @ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { connect } from "react-redux";
import { useAlert } from "react-alert";

// import state
import { sessionOperations } from "../../state/ducks/session";

// import hooks
import { useHandleFetch } from "../../hooks";

// import common components
import { InputField } from "../../components/common/InputField";
import { DrawerButton } from "../../components/common/Button/DrawerButton";

// import change password modal
import { ResetPasswordModal } from "../../components/Modal/ResetPasswordModal";

// import utils
import { validateEmail } from "../../utils";

// input styles
const inputStyles = {
  label: {
    "font-weight": "bold",
    "font-size": "18px",
    "padding-bottom": 0,
  },
  "::placeholder": {
    "text-align": "center",
  },
};

const ForgotPassword = () => {
  const alert = useAlert();

  const [isMail, setIsMail] = useState(false);
  const [isToken, setIsToken] = useState(false);
  const [recoveryMail, setRecoveryMail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [isTokenValid, setIsTokenValid] = useState(false);

  const [isModal, setIsModal] = useState(false);

  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);

  const [recoverPass, handleRecoverPass] = useHandleFetch(
    {},
    "recoverPassword"
  );
  const [validateTokenState, handleValidateToken] = useHandleFetch(
    {},
    "validateToken"
  );

  const handleRecoveryMailSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(recoveryMail)) {
      const recoveryMailRes = await handleRecoverPass({
        body: {
          username: recoveryMail,
        },
      });

      if (recoveryMailRes && recoveryMailRes.status === "sent") {
        setRecoveryMail(recoveryMailRes.data.email);
        setIsMail(true);
      } else {
        alert.error("No user found with this email");
      }
    } else {
      alert.error("Invalid email address");
      return;
    }
  };

  const handleValidateTokenSubmit = async (e) => {
    e.preventDefault();
    const resetTokenRes = await handleValidateToken({
      body: {
        resetToken,
      },
    });

    if (resetTokenRes && resetTokenRes.status === "ok") {
      setIsToken(true);
    } else {
      alert.error("Invalid Reset Code");
    }
  };

  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordContainer>
        <Header>FORGOT YOUR PASSWORD?</Header>

        <FormContainer>
          {!isMail && !isToken && (
            <Form onSubmit={handleRecoveryMailSubmit}>
              <InputField
                type="text"
                label="Email"
                name="email"
                placeholder="Enter your email"
                value={recoveryMail}
                customStyle={inputStyles}
                onChange={(e) => setRecoveryMail(e.target.value)}
              />

              <ButtonContainer>
                <DrawerButton
                  type="submit"
                  wrapperStyle={{ width: "50%" }}
                  customStyle={{ padding: "8px 0" }}
                >
                  Submit
                </DrawerButton>
              </ButtonContainer>
            </Form>
          )}

          {isMail && !isToken && (
            <Form onSubmit={handleValidateTokenSubmit}>
              <p>Reset code sent to {recoveryMail}</p>
              <InputField
                type="text"
                label="Reset Token"
                name="resetToken"
                placeholder="Enter reset token"
                value={resetToken}
                customStyle={inputStyles}
                onChange={(e) => setResetToken(e.target.value)}
              />

              <ButtonContainer>
                <DrawerButton
                  type="submit"
                  wrapperStyle={{ width: "50%" }}
                  customStyle={{ padding: "8px 0" }}
                >
                  Submit
                </DrawerButton>
              </ButtonContainer>
            </Form>
          )}

          {isMail && isToken && (
            <>
              <DrawerButton
                type="submit"
                wrapperStyle={{}}
                customStyle={{ padding: "8px 0" }}
                onClick={openModal}
              >
                Reset Password
              </DrawerButton>
              <ResetPasswordModal
                size="md"
                show={isModal}
                onHide={closeModal}
                resetToken={resetToken}
              />
            </>
          )}
        </FormContainer>
      </ForgotPasswordContainer>
    </ForgotPasswordWrapper>
  );
};

export default ForgotPassword;

const ForgotPasswordWrapper = styled.section`
  background-color: #f2f2f2;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const ForgotPasswordContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 30px 10px;
  background-color: #fff;

  @media screen and (max-width: 991px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 578px) {
    width: 90%;
  }
`;

const Header = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #333;
  font-weight: 700;
  margin-top: -5px;
  font-size: 22px;
`;

const FormContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Form = styled.form`
  background-color: #f2f4f7;
  padding: 30px 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
