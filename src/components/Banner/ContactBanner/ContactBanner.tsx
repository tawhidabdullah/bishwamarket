import React from "react";
import styled from "styled-components";

// import dummy image
import CallImage from "../../../assets/banner/call-img.png";

const ContactBanner = () => {
  return (
    <ContactBannerContainer>
      <ContactBannerItem>
        <img src={CallImage} />
      </ContactBannerItem>

      <ContactBannerItem>
        If you have any question please call us
      </ContactBannerItem>

      <ContactBannerItem>123-456-7890</ContactBannerItem>
    </ContactBannerContainer>
  );
};

export default ContactBanner;

const ContactBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6000;
  padding: 20px 10px;
  color: ghostwhite;
`;

const ContactBannerItem = styled.span``;
