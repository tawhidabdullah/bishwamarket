import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BrandNav = () => {
  return (
    <BB>
      <Item>
        <span>TOP BRAND</span>
        <span>:</span>
        <span>AERIE</span>
        <span>BACI LINGIER</span>
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

height:80px;

 display: -webkit-flex !important;
 display: -ms-flex;
 display: flex !important;
 justify-content:center;
 align-items:center;
 font-size: 14px;
 & span{
     padding:10px;
     color: #777;
    letter-spacing: 0.05em;
 }
}

`;

const Item = styled.div``;