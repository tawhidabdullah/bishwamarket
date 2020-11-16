//@ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// hooks for fetching data
import { useQueryFetch } from "../../hooks";

const DiscountProduct = () => {
  const [banners, setBanners] = useState([]);

  // fetching offer product image
  const offerProduct = useQueryFetch("featuredOffer");

  useEffect(() => {
    if (offerProduct.isSuccess && offerProduct.data) {
      setBanners(offerProduct.data);
    }
  }, [offerProduct.isSuccess]);

  return (
    <DiscountProductContainer>
      {banners.map((banner) => (
        <ImageContainer>
          <img src={banner.src} alt="" />
        </ImageContainer>
      ))}
    </DiscountProductContainer>
  );
};

export default DiscountProduct;

const DiscountProductContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  /* align-items: center; */
  gap: 20px;
  margin: 20px 20px 0 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;

  & img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;
