import React from "react";
import styled from "styled-components";

const FormHeader = ({ content }) => {
  return <FormHeaderContainer>{content}</FormHeaderContainer>;
};

export default FormHeader;

const FormHeaderContainer = styled.h3`
  color: #333;
  margin-bottom: 1rem !important;
  font-size: calc(18px + (30 - 18) * ((100vw - 320px) / (1920 - 320)));
  font-weight: bold;
`;
