import React from 'react'
import styled from "styled-components";
import img1 from "../../assets/collection/1 .jpg";
const CollectionByCategory=()=> {
    return (
      <Conetens>
        <Imagediv>
          <img src={img1} />
        </Imagediv>
        <Details>
          <h4>(20 products)</h4>
          <h3>Fashion</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <Button>shop now !</Button>
        </Details>
      </Conetens>
    );
}


export default CollectionByCategory;

const Conetens = styled.div`
  display: flex;
  flex-direction: column;
`;
const Imagediv = styled.div`
  & img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  text-align: center;

  & p {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background-color: #00baf2;
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  cursor: pointer;
  outline: none !important;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: black;
    color:ghostwhite;
  }
`;
