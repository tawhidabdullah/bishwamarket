import React from "react";
import styled from "styled-components";

const CollectionItem = ({ item, customStyles, ...props }) => {
  return (
    <Item>
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
