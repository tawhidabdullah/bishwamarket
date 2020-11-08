import React from "react";
import styled from "styled-components";

const CategoryDropdown = ({ label, subCategory }) => {
  return (
    <CategoryDropdownContainer>
      <h6>{label}</h6>
      {/* <CategoryList>
        {subCategory &&
          subCategory.map((sub) => <ListItem>{sub.name}</ListItem>)}
      </CategoryList> */}
    </CategoryDropdownContainer>
  );
};

export default CategoryDropdown;

const CategoryDropdownContainer = styled.div``;

const CategoryList = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;
