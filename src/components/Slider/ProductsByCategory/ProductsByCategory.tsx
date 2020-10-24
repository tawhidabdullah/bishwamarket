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
    <ProductBox customStyles={customStyles}>
      <ProductImgbox>
        <ProductFront>
          <img
            src={fimg1}
         
            className="img-fluid  "
            alt="product"
          />
        </ProductFront>
        <ProductBack>
          <img
            src={bimg1}
           
            className="img-fluid "
            alt="product"
          />
        </ProductBack>
      </ProductImgbox>
      <ProductIconContainer customStyles={customStyles}>
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
      <ProductDetail customStyles={customStyles}>
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
  flex-direction: ${(props) =>
    props.customStyles
      ? props.customStyles.containerDirection
        ? props.customStyles.containerDirection
        : "column"
      : "column"};

  visibility: hidden;

  position: absolute;
  top: ${(props) =>
    props.customStyles
      ? props.customStyles.containertop
        ? props.customStyles.containertop
        : "32.5%"
      : "32.5%"};
  right: ${(props) =>
    props.customStyles
      ? props.customStyles.containerright
        ? props.customStyles.containerright
        : "0%"
      : "0%"};
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.customStyles
      ? props.customStyles.containerTransform
        ? props.customStyles.containerTransform
        : "translateX(100%)"
      : "translateX(100%)"};

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

  width: 100%;
  background-color: ${(props) =>
    props.customStyles ? props.customStyles.productBackgroundColor? props.customStyles.productBackgroundColor: "#f2f2f2" :"#f2f2f2"};
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 400px) and (min-width: 350px) {
    width: 150px;
  }

  @media only screen and (max-width: 350px) and (min-width: 320px) {
    width: 138px;
  }
  @media only screen and (max-width: 500px) and (min-width: 400px) {
    width: 180px;
  }

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

  &:hover ${ProductDetail} {
    visibility: ${(props) =>
      props.customStyles
        ? props.customStyles.ProductDetailVisibility
          ? "hidden"
          : "visible"
        : "visible"};
  }
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

  img {
    height: 200px;
    width: 160px;
    object-fit:fill;
     @media only screen and (max-width: 400px) {
      width: 140px;
    }
  }
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
