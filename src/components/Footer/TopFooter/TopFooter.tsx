import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// import list component
import { LinkList } from "../LinkLists";

import { useQueryFetch } from "../../../hooks";

// import address component
import { Contact } from "../Contact";

// import Component fetcher component
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
  const history = useHistory();
  const links = useQueryFetch("Links");
  const links2 = useQueryFetch("Links2");
  //@ts-ignore
  useEffect(() => {}, [links.data]);
  useEffect(() => {}, [links2.data]);
  console.log({ links });
  return (
    <TopFooterWrapper>
      <TopFooterContainer>
        <LinkListWrapper>
          <LinkListContainer>
            <ComponentFetcher
              type="linkList"
              apiMapKey="myAccountComponentLinks"
            >
              {(linkList) => <LinkList header="My Account" lists={linkList} />}
            </ComponentFetcher>

            <ComponentFetcher type="linkList" apiMapKey="Links">
              {(linkList) => <LinkList header="Quick Link" lists={linkList} />}
            </ComponentFetcher>
          </LinkListContainer>
        </LinkListWrapper>

        <Contact header="CONTACT US" />
        <PagesSection>
          <Title>About Us</Title>
          <Items>
            {console.log({ links })}
            {links &&
              links.data &&
              links.data.length &&
              links.data.map((link) => {
                return (
                  <Item onClick={() => history.push(link.target)}>
                    {link.name}
                  </Item>
                );
              })}
          </Items>
          <br />
          <Items>
            {links2 &&
              links2.data &&
              links2.data.length &&
              links2.data.map((link) => {
                return (
                  <Item onClick={() => history.push(link.target)}>
                    {link.name}
                  </Item>
                );
              })}
          </Items>
        </PagesSection>
      </TopFooterContainer>
    </TopFooterWrapper>
  );
};

export default TopFooter;

const PagesSection = styled.div`
  margin: 1.5rem 2rem;
  padding: 1rem;
  padding-left: 3rem;
  border-left: 1px solid #eee;
  @media screen and (max-width: 768px) {
    padding-left: unset;
    border-left: unset;
    /* padding-left: 30px; */
  }
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 20px;
  text-align: left;
  font-family: PT Sans, sans-serif;
`;

const Items = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Item = styled.div`
  margin-bottom: 0.5rem;
  color: #8d8d8d;
  font-size: 14px;
  cursor: pointer;
`;

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
    width: 100%;
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
    padding-left: 30px;
  }
`;
