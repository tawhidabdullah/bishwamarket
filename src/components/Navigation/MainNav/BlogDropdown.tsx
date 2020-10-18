import React from "react";
import styled from "styled-components";

// import styles
import { DropdownContainerStyles, DropdownItemStyles } from "./commonStyles";

const Blogdropdown = (props) => {
  return (
    <>
      <BlogDropdownContainer>
        <BlogDropdownItem>Left Sidebar</BlogDropdownItem>
        <BlogDropdownItem>Right Sidebar</BlogDropdownItem>
        <BlogDropdownItem>No Sidebar</BlogDropdownItem>
        <BlogDropdownItem>Blog Details</BlogDropdownItem>
      </BlogDropdownContainer>
    </>
  );
};

export default Blogdropdown;

const BlogDropdownContainer = styled.ul`
  ${DropdownContainerStyles}
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px 10px;
`;

const BlogDropdownItem = styled.li`
  ${DropdownItemStyles}
`;
