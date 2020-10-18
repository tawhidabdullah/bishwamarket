import React from 'react'
import styled from "styled-components"
const Blog = ({ customStyles,...props }) => {
  return <Main customStyles={customStyles}>{props.title}</Main>;
};
export default Blog;
const Main = styled.div`
  ${(props) => props.customStyles};
  display:flex;
  justify-content:center;
  align-items:center;
`;