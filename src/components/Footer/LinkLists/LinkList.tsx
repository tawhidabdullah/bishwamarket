import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LinkList = ({ header, lists }) => {
  const history = useHistory();

  return (
    <TopFooterContainer>
      <Header>{header}</Header>
      <ListContainer>
        {lists.map((list, idx) => (
          <ListItem
            href={list.target}
            onClick={(e) => {
              e.preventDefault();
              history.push(list.target);
            }}
            key={idx}
          >
            {list.name}
          </ListItem>
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

const ListItem = styled.a`
  font-family: Raleway, sans-serif;
  padding-right: 20px;
  color: #8d8d8d;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none !important;
  &:hover {
    color: #5c2c90;
  }

  @media screen and (max-width: 991px) {
    padding: unset;
    padding: 10px 10px 10px 0;
  }
`;
