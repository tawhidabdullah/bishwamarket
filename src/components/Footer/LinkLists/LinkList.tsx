import React from "react";
import styled from "styled-components";

const LinkList = ({ header, lists }) => {
  return (
    <TopFooterContainer>
      <Header>{header}</Header>
      <ListContainer>
        {lists.map((list, idx) => (
          <ListItem key={idx}>{list.name}</ListItem>
        ))}
      </ListContainer>
    </TopFooterContainer>
  );
};

export default LinkList;

const TopFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
`;

const ListItem = styled.span`
  font-family: Raleway, sans-serif;
  padding-right: 20px;
  color: #8d8d8d;
  font-size: 14px;
  cursor: pointer;

  @media screen and (max-width: 991px) {
    padding: unset;
    padding: 10px 10px 10px 0;
  }
`;
