
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";




const Productcontain = () => {
  return (
    <BB>
   
        <Span>FASHION</Span>
     
        <Span>ELECTRONIC</Span>
        <Span>FOOTWARE</Span>
        <Span>SPORTS</Span>
        <Span>JOLIDON</Span>
        <Span>TOYS</Span>

        <Span>BOOKS</Span>

      
    </BB>
  );
};

export default Productcontain;

const BB = styled.div`

height:100px;

 display: -webkit-flex !important;
 display: -ms-flex;
 display: flex !important;
 justify-content:center;
 align-items:center;
 font-size: 14px;
 flex-wrap: wrap;
`;

const Span = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 41px;
  padding-top: 41px;
  letter-spacing: 0.05em;

  color: #444;
  text-transform: uppercase;
  font-weight: 700;
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));

  & :hover{
      color:red;
  }
`;

const Item = styled.div``;