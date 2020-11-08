import React from "react";
import styled from "styled-components";
import { useQueryFetch } from "../../../hooks";

const ThemeSlider = ({ item }) => {
  const bannerState = useQueryFetch("banner");

  return (
    <SliderBanner>
      <SliderImage>
        <img src={item.src} className="img-fluid" alt="slider" />
      </SliderImage>
    </SliderBanner>
  );
};

export default ThemeSlider;

const SliderBanner = styled.div`
  background-color: #eddbd1;

  height: 100%;
`;

const SliderImage = styled.div`
  height: 100%;

  & img {
    object-fit: fill;
    height: 100%;
    width: 100%;
  }
`;
