import React from "react";
import styled from "styled-components";

const ListItem = ({ content, padding }) => {
  return <ListItemContainer padding={padding}>{content}</ListItemContainer>;
};

export default ListItem;

const ListItemContainer = styled.p`
  color: black;
  font-weight: 300;
  background: white;
  padding: 10px 3px;
  text-align: center;
  margin-bottom: 0;
  padding: ${(props) => props.padding};
`;
