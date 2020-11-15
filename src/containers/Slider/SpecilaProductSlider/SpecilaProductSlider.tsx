import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { ProductsByCategory } from "../../../components/Slider/ProductsByCategory";
import { MainSlider } from "../../../components/Slider/MainSlider";
import { Blog } from "../../../components/Banner/Blog";
import { useQueryFetch } from "../../../hooks";

const blogStyles = {
  height: "100px",
  backgroundColor: "#fff",
  marginBottom: "20px",
  fontSize: "30px",
  fontWeight: "bold",
};

const SpecilaProductSlider = () => {
  const productsState = useQueryFetch("productList");
  const [status, setstatus] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productsState.isSuccess && productsState.data) {
      setProducts(productsState.data.data);
      setstatus(false);
    }
  }, [productsState.isSuccess]);

  const responsive = {
    responsive: [
      {
        breakpoint: 3224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },

      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },

      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Section>
      <Blog title="SPECIAL PRODUCTS" customStyles={blogStyles} />

      <MobileScreenViewContainer>
        {products &&
          products.length > 0 &&
          products.map((product, idx) => (
            <ProductsByCategory
              key={idx}
              item={product}
              customStyles={{ Levelvisibility: "visible" }}
              isIcon={true}
            />
          ))}
      </MobileScreenViewContainer>
      <DesktopScreenViewContainer>
        <MainSlider
          responsive={responsive}
          ProductsByCategory={ProductsByCategory}
          data={products}
          customStyles={{
            Levelvisibility: "visible",
          }}
        />
      </DesktopScreenViewContainer>
    </Section>
  );
};
export default SpecilaProductSlider;

const Section = styled.div``;

const MobileScreenViewContainer = styled.div`
  display: none;
  /* flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto; */

  @media screen and (max-width: 578px) {
    display: grid;
    grid-template-columns: 49% 49%;
    gap: 10px;
    justify-content: flex-end;
    margin: 0 10px;
    /* align-items: center; */
  }
`;

const DesktopScreenViewContainer = styled.div`
  width: 95%;
  margin: 0 auto;

  @media screen and (max-width: 578px) {
    display: none;
  }
`;
