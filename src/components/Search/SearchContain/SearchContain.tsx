import React from 'react'
import styled from "styled-components";
const SearchContain=({title})=> {
    return (
      <Breadcrumbmain>
        <Contain>
          <h2>{title}</h2>
          <List>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i>
            </li>
            <li>
              <a href="#">{title}</a>
            </li>
          </List>
        </Contain>
      </Breadcrumbmain>
    );
}


export default SearchContain;

const Breadcrumbmain = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    color: #333;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: calc(20px + (28 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  & li {
    list-style-type: none;
    margin-right: 15px;
  }
`;