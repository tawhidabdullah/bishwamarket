import React from "react";
import styled from "styled-components";

const Contact = ({ header }) => {
  return (
    <ContactContainer>
      <Header>{header}</Header>
      <ListContainer>
        <ContactItem>
          <i className="fa fa-map-marker"></i> Big Deal Store Demo Store
          India-3654123
        </ContactItem>
        <ContactItem>
          <i className="fa fa-phone"></i> Call Us: 123-456-7898
        </ContactItem>

        <ContactItem>
          <i className="fa fa-envelope"></i> Email Us: Support@Bigdeal.Com
        </ContactItem>

        <ContactItem>
          <i className="fa fa-fax"></i> Fax 123456
        </ContactItem>
      </ListContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding: 50px 80px;

  @media screen and (max-width: 768px) {
    padding: unset;
    padding-left: 50px;
    padding-bottom: 20px;
  }
`;

const Header = styled.h3`
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 20px;
  text-align: left;
  font-family: PT Sans, sans-serif;
`;

const ListContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactItem = styled.span`
  font-family: PT Sans, sans-serif;
  padding: 10px 0;
  color: #8d8d8d;
  font-size: 16px;
  cursor: pointer;
`;
