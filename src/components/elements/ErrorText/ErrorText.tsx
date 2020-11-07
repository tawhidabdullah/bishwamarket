import React from "react";
import styled from "styled-components";

const ErrorText = ({ touched, error, isSubmitting, stateError }) => {
  return (
    <ErrorMessage>
      {(touched && error) || (!isSubmitting && stateError)}
    </ErrorMessage>
  );
};

export default ErrorText;

const ErrorMessage = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 15px;
  margin-top: -12px;
  position: absolute;
`;
