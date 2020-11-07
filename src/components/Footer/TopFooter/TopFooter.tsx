import React from "react";
import styled from "styled-components";

// import list component
import { LinkList } from "../LinkLists";

// import address component
import { Contact } from "../Contact";

// import hooks
import ComponentFetcher from "../../ComponentFetcher";


// dummy data
const contactList = [
  "About Us",
  "Contact Us",
  "Terms & Conditions",
  "Returns & Exchanges",
  "Shipping & Delivery",
];

const quickLink = [
  "Store Location",
  "My Account",
  "Orders Tracking",
  "Size Guide",
  "FAQ",
  "New Products",
];

const TopFooter = () => {
  return (
    <TopFooterWrapper>
      <TopFooterContainer>
        <LinkListWrapper>
          <LinkListContainer>
          
          <ComponentFetcher type='linkList' apiMapKey='myAccountComponentLinks'>
            {(linkList) => <LinkList header="My Account" lists={linkList} />}
          </ComponentFetcher>

          <ComponentFetcher type='linkList' apiMapKey='Links'>
            {(linkList) => <LinkList header="Quick Link" lists={linkList} />}
          </ComponentFetcher>

           
            
          </LinkListContainer>
        </LinkListWrapper>

        <Contact header="CONTACT US" />
      </TopFooterContainer>
    </TopFooterWrapper>
  );
};

export default TopFooter;

const TopFooterWrapper = styled.div`
  background-color: white;
  width: 100%;
  margin: 20px 0;
`;

const TopFooterContainer = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  width: 85vw;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LinkListWrapper = styled.div`
  padding: 30px 0;
`;

const LinkListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  padding-right: 79px;

  border-right: 1px solid #eee;

  div:first-child {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    padding-right: unset;
    border-right: unset;
    padding-left: 50px;
  }
`;
