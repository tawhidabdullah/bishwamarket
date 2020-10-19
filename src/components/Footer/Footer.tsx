import React from "react";
import styled from "styled-components";

// unify components
import { TopFooter } from "./TopFooter";
import { BottomFooter } from "./BottomFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <TopFooter />
      <BottomFooter />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  /* width: 85vw;
  margin: 0 auto; */
  display: flex;
  flex-direction: column;
`;
