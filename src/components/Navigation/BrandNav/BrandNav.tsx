import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BrandNav = () => {
  return (
    <BB>
      <TITLE>
        <span>TOP BRAND</span>
        <span>:</span>
      </TITLE>
      <Item>
        <span>AERIE</span>
        <span>BACI LINGIER</span>
        <span>GERBE</span>
        <span>JOLIDON</span>
        <span>OYSHO</span>

        <span>ULTIMO</span>
        <span>VASSARETE</span>
        <span>WONDERBRA</span>

        <span>GERBE</span>
        <span>JOLIDON</span>
        <span>OYSHO</span>

        <span>ULTIMO</span>
        <span>VASSARETE</span>
        <span>WONDERBRA</span>
      </Item>
    </BB>
  );
};



export default BrandNav;


const BB = styled.div`
  display: grid !important;

  align-items: start;
  grid-template-columns: 1fr 4fr;
  font-size: 14px;
  background-color: #fff;

  & span {
    padding: 10px;

    letter-spacing: 0.05em;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr ;
  }
`;

const TITLE = styled.div`
  display: flex !important;
  justify-content: flex-end;
  align-items: start;
  flex-wrap: wrap;

  & span {
    color: #ff6000;
    font-weight: 700;
    @media only screen and (max-width: 1000px) {
   
      border-bottom: 2px solid #ff6000;
    }
  }

  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;
const Item = styled.div`
  display: flex !important;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  & span {
    color: #777;
   
    font-weight: 700;
  }

  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;