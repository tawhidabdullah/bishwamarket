import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CollectionItem = ({ item, customStyles, ...props }) => {
  const history = useHistory();

  return (
    <Item
      onClick={() => {
        history.push({
          pathname: `/category${item.target}`,
          state: {
            catId: item.id,
          },
        });
      }}
    >
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
