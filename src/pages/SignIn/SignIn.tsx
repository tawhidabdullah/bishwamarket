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
          <Form>
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
                wrapperStyle={{ "padding-right": "10px" }}
                customStyle={{ padding: "8px 0", width: "80%" }}
              >
                Login
              </DrawerButton>

              <Text
                customStyle={{
                  "padding-left": "10px",
                  "white-space": "nowrap",
                }}
              >
                Forgot your password?
              </Text>
            </ButtonContainer>
          </Form>

          <Text
            customStyle={{
              color: "#777",
              "font-size": "13px",
            }}
          >
            Sign up for a free account at our store. Registration is quick and
            easy. It allows you to be able to order from our shop. To start
            shopping click register.
          </Text>
          <br />
          <br />

          <Text
            customStyle={{
              color: "#ff6000",
              "font-size": "13px",
              cursor: "pointer",
              transition: "0.2s ease-in-out",
              ":hover": { color: "#777" },
              "margin-top": "20px",
            }}
          >
            Create an Account
          </Text>
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
  justify-content: space-between;
  align-items: center;

  & div {
    width: 50%;
  }

  & span {
    color: #ff6000;
    cursor: pointer;
    letter-spacing: 0;
    font-size: 13px;
    transition: 0.2s ease-in-out;
    width: 50%;
    /* margin-right: auto; */

    :hover {
      color: #777;
    }
  }

  @media screen and (max-width: 578px) {
    & span {
      white-space: normal;
    }
  }
`;
