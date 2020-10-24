// @ts-nocheck
import React from "react";
import styled from "styled-components";

// import common components
import { InputField } from "../../components/common/InputField";
import { DrawerButton } from "../../components/common/Button/DrawerButton";
import { Text } from "../../components/elements/Text";

const SignIn = () => {
  return (
    <SignInWrapper>
      <SignInContainer>
        <Header>Login</Header>
        <FormContainer>
          <InputField
            type="text"
            label="Email"
            name="email"
            placeholder="Email"
            customStyle={{
              label: {
                "font-weight": "bold",
                "font-size": "18px",
                "padding-bottom": 0,
              },
            }}
          />

          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            customStyle={{
              label: {
                "font-weight": "bold",
                "font-size": "18px",
                "padding-bottom": 0,
              },
            }}
          />

          <ButtonContainer>
            <DrawerButton
              wrapperStyle={{ width: "80%", margin: "unset" }}
              customStyle={{ padding: "8px 0" }}
            >
              Login
            </DrawerButton>

            <Text
              customStyle={{
                padding: "0",
                "font-size": "13px",
                cursor: "pointer",
                "letter-spacing": 0,
                color: "#ff6000",
                ":hover": { color: "#000" },
              }}
            >
              Forgot your password?
            </Text>
          </ButtonContainer>
        </FormContainer>
      </SignInContainer>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.section`
  background-color: #f2f2f2;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const SignInContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
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

const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto;
  background-color: #f2f4f7;
  padding: 30px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 20px;
`;
