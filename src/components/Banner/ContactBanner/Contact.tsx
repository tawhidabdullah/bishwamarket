import React from "react";
import styled from "styled-components";

// import dummy image
import CallImage from "../../../assets/banner/call-img.png";

// import Component fetcher component
import ComponentFetcher from "../../ComponentFetcher";

const Contact = () => {
  return (
    <ComponentFetcher type="text" apiMapKey="phone">
      {(phoneText) => (
        <ContactContainer>
          <ImageContactContainer>
            <img src={CallImage} />
          </ImageContactContainer>

          <ContactItem>If you have any question please call us</ContactItem>

          <ContactItem>
            <a
              href={`tel:${phoneText}`}
              style={{
                color: "#fff",
              }}
            >
              {phoneText}
            </a>
          </ContactItem>
        </ContactContainer>
      )}
    </ComponentFetcher>
  );
};

export default Contact;

const ImageContactContainer = styled.div`
  padding: 0 10px;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5c2c90;
  padding: 20px 10px;
  color: ghostwhite;
  font-family: PT Sans, sans-serif;

  & span:last-child {
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 15px 10px;
  }
`;

const ContactItem = styled.span`
  padding: 0 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
`;
