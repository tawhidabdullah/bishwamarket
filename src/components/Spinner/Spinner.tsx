import React from "react";
import styled from "styled-components";
import "./SuspenseLoader.styles.css";

const Spinner = () => (
  <SpinnerContainer className="loader">Loading...</SpinnerContainer>
);

export default Spinner;

const SpinnerContainer = styled.div`
  color: #fff;
  text-indent: -9999em;
  margin: 88px auto;
  top: 30%;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  background: #5c2c90;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 2em;
`;
