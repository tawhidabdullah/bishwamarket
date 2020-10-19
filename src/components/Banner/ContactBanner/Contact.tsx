import React from "react";
import styled from "styled-components";

// import dummy image
import CallImage from "../../../assets/banner/call-img.png";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactItem>
        <img src={CallImage} />
      </ContactItem>

      <ContactItem>If you have any question please call us</ContactItem>

      <ContactItem>123-456-7890</ContactItem>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6000;
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
