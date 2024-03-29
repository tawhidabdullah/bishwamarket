//@ts-ignore
import React, { useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// import utils
import { addFilterToStorage } from "../../../utils";

const CategoryItem = ({ item, isIcon = false }) => {
  const history = useHistory();

  const handleClick = () => {
    addFilterToStorage({ category: item.id }, () => {
      history.push("/product");
    });
  };
  return (
    <CategoryContain>
      <ImgWrapper onClick={handleClick}>
        <img src={isIcon ? item.icon : item.fullCover}></img>
      </ImgWrapper>
      <Button onClick={handleClick}>{item.name}</Button>
    </CategoryContain>
  );
};
export default CategoryItem;

const ImgWrapper = styled.div`
  border: 1px solid #fff;
  padding: 5px;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  & img {
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-style: none;
    width: 110px;
    height: 110px;
    object-fit: contain;
  }
`;

const Button = styled.div`
  padding: 10px 25px;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  margin-top: 15px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff !important;
  border-radius: 25px;
  line-height: 1;
  letter-spacing: 0.05em;
  cursor: pointer;
`;
const CategoryContain = styled.div`
  text-align: center;

  &:hover ${ImgWrapper} {
    border: 1px solid #5c2c90;
  }
  &:hover ${Button} {
    background-color: #5c2c90;
  }
`;
