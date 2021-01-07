import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CollectionItem = ({ item, customStyles, ...props }) => {
  const history = useHistory();
  console.log(item, "collectionItem");

  return (
    <Item onClick={() => history.push(`/category${item.target}`)}>
      <img src={item.src} />
    </Item>
  );
};

export default CollectionItem;

const Item = styled.div`
  cursor: pointer;
  width: 100%;

  & img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;
