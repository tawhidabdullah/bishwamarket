import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import Slider from "react-slick";

// import dummy image
// import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";

import bimg1 from "../../../assets/slider-tab/a1.jpg";

// import toggle cart action
import {
  toggleCartDrawer,
  toggleQuickviewDrawer,
} from "../../../redux/global/global.actions";

const ProductsByCategory = ({
  toggleCartDrawer,
  toggleQuickviewDrawer,

  customStyles,
}) => {
  return (
    <ProductBox>
      <ProductImgbox>
        <ProductFront>
          <img
            src={fimg1}
            style={{ height: "300px", width: "235px" }}
            className="img-fluid  "
            alt="product"
          />
        </ProductFront>
        <ProductBack>
          <img
            src={bimg1}
            style={{ height: "300px", width: "235px" }}
            className="img-fluid "
            alt="product"
          />
        </ProductBack>
      </ProductImgbox>
      <ProductIconContainer>
        <ProductIcon onClick={() => toggleCartDrawer()}>
          <i className="fa fa-shopping-bag"></i>
        </ProductIcon>
        <ProductIcon>
          <i className="fa fa-heart-o"></i>
        </ProductIcon>

        <ProductIcon onClick={() => toggleQuickviewDrawer()}>
          <i className="fa fa-search"></i>
        </ProductIcon>

        <ProductIcon>
          <i className="fa fa-exchange"></i>
        </ProductIcon>
      </ProductIconContainer>
      <ProductDetail>
        <DetailLeft>
          <Rating>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </Rating>
          <a href="">
            <h6 className="price-title">reader will be distracted.</h6>
          </a>
        </DetailLeft>
        <DetailRight>
          <CheckPrice>$ 56.21</CheckPrice>
          <Price>$ 24.05</Price>
        </DetailRight>
      </ProductDetail>
      <NewLevel customStyles={customStyles}>
        <div>new</div>
      </NewLevel>
      <OnSale customStyles={customStyles}>on sale</OnSale>
    </ProductBox>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDrawer: () => dispatch(toggleCartDrawer()),
  toggleQuickviewDrawer: () => dispatch(toggleQuickviewDrawer()),
});

export default connect(null, mapDispatchToProps)(ProductsByCategory);

const ProductIconContainer = styled.div`
  display: flex;
  flex-direction: column;

  transition: all 0.5s ease;
  transform: translateX(100%);
  visibility: hidden;

  position: absolute;
  top: 32.5%;
  right: 0;
  /* bottom:0;
  right:25%; */
  z-index: 20;
`;

const ProductBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.5s ease;

  transform: translateX(-100%);
`;


const ProductDetail = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-around;

   width:100%;
  
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  overflow: hidden;
  background-color: #fff;


  &:hover ${ProductIconContainer} {
    transform: translateX(0%);
    visibility: visible;
  }

  &:hover ${ProductBack} {
    transform: translateX(0%);
  }

  /* &:hover ${ProductDetail} {
    visibility: hidden;
  } */
`;

const ProductIcon = styled.span`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  color: #777;
  cursor: pointer;
`;

const ProductImgbox = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fff;
`;
const ProductFront = styled.div`
  left: 0;
  top: 0;
 
  transition: all 0.5s ease;
`;

const OnSale = styled.div`
  background-color: #ffa800;
  color: #fff;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 6px;
  font-size: calc(10px + (12 - 10) * ((100vw - 320px) / (1920 - 320)));
  visibility: ${(props) =>
    props.customStyles ? props.customStyles.Levelvisibility : ""};
`;

const NewLevel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  font-weight: 600;
  letter-spacing: 1px;
  visibility: ${(props) =>
    props.customStyles ? props.customStyles.Levelvisibility : ""};

  &::before {
    width: 0;
    height: 0;
    border-top: 60px solid #ff6000;
    border-right: 60px solid transparent;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }

  & div {
    text-transform: uppercase;
    -webkit-transform: rotate(-50deg);
    transform: rotate(-45deg);
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    font-size: calc(10px + (14 - 10) * ((100vw - 320px) / (1920 - 320)));
    margin-top: 3px;
    color: #fff;
  }
`;



const DetailLeft = styled.div`
  & h6 {
    text-transform: capitalize;
    color: #777;
    font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
  }
`;
const DetailRight = styled.div`
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
`;
const Rating = styled.div`
  & i {
    color: #ffa800;
    font-size: calc(11px + (14 - 11) * ((100vw - 320px) / (1920 - 320)));
  }
`;

const CheckPrice = styled.div`
  text-decoration: line-through;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
`;

const Price = styled.div`
  color: #ffa800;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 700;
`;
