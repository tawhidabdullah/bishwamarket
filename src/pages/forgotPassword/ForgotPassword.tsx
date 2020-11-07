// @ts-nocheck
import React from "react";
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
import { Text } from "../../components/elements/Text";

const ForgotPassword = () => {
  const [recoverPass, handleRecoverPass] = useHandleFetch(
    {},
    "recoverPassword"
  );
  const [validateTokenState, handleValidateToken] = useHandleFetch(
    {},
    "validateToken"
  );

  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordContainer>
        <Header>FORGOT YOUR PASSWORD?</Header>

        <FormContainer>
          <Form>
            <InputField
              type="text"
              label="Email"
              name="email"
              placeholder="Enter your email"
              customStyle={{
                label: {
                  "font-weight": "bold",
                  "font-size": "18px",
                  "padding-bottom": 0,
                },
                "::placeholder": {
                  "text-align": "center",
                },
              }}
            />

            <ButtonContainer>
              <DrawerButton
                wrapperStyle={{ width: "50%" }}
                customStyle={{ padding: "8px 0" }}
              >
                Submit
              </DrawerButton>
            </ButtonContainer>
          </Form>
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
