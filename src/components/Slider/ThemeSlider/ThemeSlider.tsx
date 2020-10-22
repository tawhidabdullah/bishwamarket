import React from "react";
import slider1 from "../../../assets/1.1.png";
import styled from "styled-components"
const ThemeSlider = () => {
  return (
    <SliderBanner>
      <SliderImage>
        <ul className="layout2-slide-1">
          <li id="img-1">
            <img src={slider1} className="img-fluid" alt="slider" />
          </li>
        </ul>
      </SliderImage>
      <SliderBannercontent>
        <Content>
          <h4>the best</h4>
          <h1>loffer shoes</h1>
          <h2>minimum 30% off</h2>
          <a className="btn btn-rounded">Shop Now</a>
        </Content>
      </SliderBannercontent>
    </SliderBanner>
  );
};

export default ThemeSlider;

const SliderBanner = styled.div`
  position: relative;
  overflow: hidden;

  background-color: #eddbd1;
  margin-top: 10px;

  width: 100%;

 
`;

const Content = styled.div`
  position: absolute;
  top: 22%;
  left: 0%;
`;
const SliderImage = styled.div`
  height: 355px;
  background-color: #eddbd1;

  & ul {
    padding-left: 0;
    margin-bottom: 0;
  }

  & li {
    position: absolute;
    bottom: -8px;
    right: 0;

    @media only screen and (max-width: 1150px) {
      width: 550px;
    }
    @media only screen and (max-width: 600px) {
      width: 450px;
    }
    @media only screen and (max-width: 500px) {
      width: 450px;
    }
  }
`;

const SliderBannercontent = styled.div`

  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;

  @media only screen and (min-width: 1200px) {
    padding: 0 100px;
  }

  & h4 {
    /* font-size: 24px; */
    color: #000;
    text-transform: capitalize;
    line-height: 1;
   // padding-bottom: 8px;
  }

  & h1 {
    /* font-size: 72px; */
    color: #ffa800;
    text-transform: capitalize;
    line-height: 1;
   // padding-bottom: 12px;
  }

  & h2 {
    /* font-size: 36px; */
    color: #777;
    text-transform: capitalize;
    line-height: 1;
   // padding-bottom: 16px;
  }

  & a {
    display: inline-block;
    letter-spacing: 1px;
    padding: 10px 15px;
    /* font-size: 18px; */

    font-weight: 700;
    color: #fff !important;
    background-color: #ff6000;
    border-radius: 25px;

    transition: all 0.3s;
    line-height: 1;
  }
`;