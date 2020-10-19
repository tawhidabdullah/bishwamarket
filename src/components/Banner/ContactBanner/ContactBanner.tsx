import React from "react";
import styled from "styled-components";

// import dummy image
import CallImage from "../../../assets/banner/call-img.png";

// unify components
import Contact from "./Contact";
import SocialLinks from "./SocialLinks";

const ContactBanner = () => {
  return (
    <ContactSectionContainer>
      <Contact />
      <SocialLinks />
    </ContactSectionContainer>
  );
};

export default ContactBanner;

const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
