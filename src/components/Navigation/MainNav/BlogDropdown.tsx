//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { useQueryFetch } from "../../../hooks";

// import styles
import { DropdownContainerStyles, DropdownItemStyles } from "./commonStyles";

const Blogdropdown = (props) => {
  const history = useHistory();

  const paegListState = useQueryFetch("pageList");

  const handleClose = (url) => {
    history.push(url);
  };

  const [pagesData, setPagesData] = useState([]);

  useEffect(() => {
    if (paegListState.isSuccess) {
      const pageList =
        paegListState.data && paegListState.data.length > 0
          ? paegListState.data.map((prod) => {
              return {
                ...prod,
              };
            })
          : {};
      // @ts-ignore
      setPagesData(pageList);
    } else {
      const pageList =
        paegListState.data && paegListState.data.length > 0
          ? paegListState.data.map((prod) => {
              return {
                ...prod,
              };
            })
          : {};
      // @ts-ignore
      setPagesData(pageList);
    }
  }, [paegListState.isSuccess]);

  return (
    <>
      <BlogDropdownContainer>
        {/* <BlogDropdownItem>Left Sidebar</BlogDropdownItem>
        <BlogDropdownItem>Right Sidebar</BlogDropdownItem>
        <BlogDropdownItem>No Sidebar</BlogDropdownItem>
        <BlogDropdownItem>Blog Details</BlogDropdownItem> */}

        {pagesData &&
          pagesData.length &&
          pagesData.map((page, idx) => (
            <BlogDropdownItem key={idx} onClick={() => handleClose(page.url)}>
              {page.name}
            </BlogDropdownItem>
          ))}
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
