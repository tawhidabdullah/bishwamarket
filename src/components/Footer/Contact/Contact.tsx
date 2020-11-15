import React from "react";
import styled from "styled-components";


// import component fetcher component
import ComponentFetcher from "../../ComponentFetcher";



const Contact = ({ header }) => {
  return (
    <ContactContainer>
      <Header>{header}</Header>
      <ListContainer>

          <ComponentFetcher type='text' apiMapKey='address'>
                {(addressText) => {
                  return (
                    <ContactItem>
                      <i className="fa fa-map-marker"></i> &nbsp;
                      {addressText}
                    </ContactItem>
                  )
                }}
          </ComponentFetcher>

          <ComponentFetcher type='text' apiMapKey='phone'>
            {(phoneText) => {
              return (
                <ContactItem href={`tel:${phoneText}`}> 
                  <i className="fa fa-phone"></i> &nbsp;
                  {phoneText}
                </ContactItem>
              )
            }}
          </ComponentFetcher>


          <ComponentFetcher type='text' apiMapKey='email'>
                {(emailText) => {
                  return (
                    <ContactItem href={`mailto:${emailText}`}> 
                      <i className="fa fa-envelope"></i> &nbsp;
                      Email Us: {emailText}
                    </ContactItem>
                  )
                }}
          </ComponentFetcher>

        {/* <ContactItem>
          <i className="fa fa-fax"></i> Fax 123456
        </ContactItem> */}
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
    padding-left: 30px;
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

const ContactItem = styled.a`
  font-family: PT Sans, sans-serif;
  padding: 10px 0;
  color: #8d8d8d;
  font-size: 16px;
  cursor: pointer;
`;
