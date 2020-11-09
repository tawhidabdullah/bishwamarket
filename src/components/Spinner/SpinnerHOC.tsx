import React from "react";
import styled from "styled-components";

import Spinner from "./Spinner";

const SuspenseLoader = () => {
  return (
    <SuspenseLoaderContainer>
      <Spinner />
    </SuspenseLoaderContainer>
  );
};

export default SuspenseLoader;

const SuspenseLoaderContainer = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: 0.5;
`;
