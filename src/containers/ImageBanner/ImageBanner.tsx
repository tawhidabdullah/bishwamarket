//@ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";

//import react slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// components
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { MainSlider } from "../../components/Slider/MainSlider";
import { ThemeSlider } from "../../components/Slider/ThemeSlider";
import { useQueryFetch } from "../../hooks";
import ImageBannerCategoryItem from "./ImageBannerCategoryItem";

const ImageBanner = () => {
  //offerState
  const [offerData, setofferData] = useState([]);
  const [bannerStatus, setBannerStatus] = useState(true);

  //fetching offer bdata
  const featuredOffer = useQueryFetch("featuredOffer");
  const categoryList = useQueryFetch("categoryList");
  //setting fetching data to state
  useEffect(() => {
    if (featuredOffer.isSuccess && featuredOffer.data) {
      setofferData(featuredOffer.data);
      setBannerStatus(false);
    }
  }, [featuredOffer.isSuccess]);

  //sliderData state
  const [status, setStatus] = useState(true);
  const [data, setdata] = useState([]);
  //fetching data bdata
  const bannerState = useQueryFetch("banner");
  //setting fetching data to state
  useEffect(() => {
    if (bannerState.isSuccess && bannerState.data) {
      setdata(bannerState.data);

      setStatus(false);
    }
  }, [bannerState.isSuccess]);

  //responsive slider
  const responsive = {
    responsive: [
      {
        breakpoint: 3224,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  // configuration for react-slick slider
  const settings = {
    // dots: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <NavigationContainer>
      <BannerSideBar>
        {categoryList.isSuccess && categoryList.data?.length > 0 && (
          <ImageBannerCategoryItem category={categoryList.data} />
        )}
      </BannerSideBar>

      <SliderBanner>
        {status ? (
          <div className="loaderSection">
            <div className="createLoader"></div>
          </div>
        ) : (
          // <>
          //   {bannerState.isSuccess && bannerState.data?.length > 0 && (
          //     <MainSliderContainer>
          //       <img src={bannerState.data?.[0].src} alt="" />
          //     </MainSliderContainer>
          //   )}
          // </>

          <SliderWrapper>
            <Slider {...settings}>
              {bannerState.isSuccess &&
                bannerState.data &&
                data &&
                data.length > 0 &&
                data.map((item, idx) => {
                  return (
                    <MainSliderContainer>
                      <img src={item.src} alt="" />
                    </MainSliderContainer>
                  );
                })}
            </Slider>
          </SliderWrapper>

          // <MainSlider
          //   responsive={responsive}
          //   ProductsByCategory={ThemeSlider}
          //   data={data}
          //   customStyles={{
          //     width: "100%",

          //     padding: "0px",
          //     backgroundColor: "#f2f2f2",
          //   }}
          // />
        )}
      </SliderBanner>

      {bannerStatus ? (
        <> </>
      ) : (
        <BottomImage>
          {offerData.map((item, idx) => {
            return <CollectionItem key={idx} customStyles={{}} item={item} />;
          })}
        </BottomImage>
      )}
    </NavigationContainer>
  );
};

export default ImageBanner;

const NavCategory = styled.div`
  position: relative;
  width: 25%;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const SliderWrapper = styled.div`
  & .slick-prev {
    left: 0;
    z-index: 9;

    /* @media only screen and (max-width: 580px) {
      right: 55px;
      top: -25px;
    } */
  }
  & .slick-next {
    /* top: -28px; */
    right: 0;
    z-index: 9;
    /* background: transparent;
    width: 20px;
    height: 20px;

    @media only screen and (max-width: 580px) {
      right: 25px;
      top: -25px;
    } */
  }
  & .slick-prev::before {
    color: #5c2c90;
    opacity: 1;
    font: normal normal normal 30px/1 FontAwesome;
    content: "\f104";
  }

  .slick-next::before {
    color: #5c2c90;
    opacity: 1;
    content: "\f105";
    font: normal normal normal 30px/1 FontAwesome;
  }
`;

const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  /* grid-auto-rows: 574px auto; */
  margin-bottom: 10px;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 0 50px;
  grid-row-gap: 15px;
  grid-column-gap: 10px;
  padding-bottom: 10px;
  align-items: start;

  /* @media only screen and (min-width: 1450px) {
    grid-template-columns: 25% 60% auto;
  } */

  /* @media only screen and (min-width: 1151px) and (max-width: 1449px) {
    grid-template-columns: 25% 75%;
  } */
  @media only screen and (max-width: 1150px) {
    /* grid-template-columns: 1fr; */
    display: block;
  }

  @media only screen and (max-width: 800px) {
    padding: 0 20px;
  }

  /* @media only screen and (max-width: 768px) {
    display: block;
  } */
`;

const MainSliderContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 312px;
    object-fit: cover;
  }
`;

const BannerSideBar = styled.div`
  display: grid;
  grid-row: 1/ 2;
  grid-column: 1/2;
  margin-top: 10px;
  position: relative;

  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;

const SliderBanner = styled.div`
  margin-top: 10px;
  grid-row: 1/ 2;
  height: 100%;

  @media only screen and (max-width: 1150px) and (min-width: 580px) {
    height: 100%;
  }
`;

const BottomImage = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  /* grid-auto-rows: minmax(240px, auto); */
  grid-auto-rows: 240px;
  grid-gap: 10px;

  @media only screen and (max-width: 1150px) and (min-width: 580px) {
    grid-template-columns: 2fr 2fr 2fr;
    margin-left: 0px;
  }

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    margin-left: 0px;
  }

  @media only screen and (min-width: 1250px) {
    grid-column: 2/ -1;
    grid-template-columns: 2fr 2fr 2fr;
  }
  /* @media only screen and (min-width: 1151px) and (max-width: 1449px) {
    grid-column: 2/ 9;
    grid-template-columns: 2fr 2fr 2fr;
  } */
`;
