import React from "react";
import styled from "styled-components";

const BackDrop = (props) =>
  props.show ? (
    <BackdropContainer
      customStyle={props.customStyle}
      onClick={props.clicked}
    ></BackdropContainer>
  ) : null;

export default BackDrop;

const BackdropContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: #000;
  opacity: 0.8;

  ${(props) => props.customStyle}
`;
