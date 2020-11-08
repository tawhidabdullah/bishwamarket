//@ts-ignore
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { MainSlider } from "../../components/Slider/MainSlider";
import { ThemeSlider } from "../../components/Slider/ThemeSlider";
import { useQueryFetch } from "../../hooks";
import { SearchNav } from "../../components/Navigation/SearchNav";
import ImageBannerCategoryItem from "./ImageBannerCategoryItem";
import { category } from "../../state/ducks";

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

  return (
    <NavigationContainer>
      <Content>
        {categoryList.isSuccess && categoryList.data?.length > 0 && (
          <ImageBannerCategoryItem category={categoryList.data} />
        )}
      </Content>

      <SliderBanner>
        {status ? (
          <div className="loaderSection">
            <div className="createLoader"></div>
          </div>
        ) : (
          <MainSlider
            responsive={responsive}
            ProductsByCategory={ThemeSlider}
            data={data}
            customStyles={{
              width: "100%",

              padding: "0px",
              backgroundColor: "#f2f2f2",
            }}
          />
        )}
      </SliderBanner>

      {/* {bannerStatus ? (
          <> </>
        ) : (
          <BottomImage>
            {offerData.map((item) => {
              return <CollectionItem customStyles={{}} item={item} />;
            })}
          </BottomImage>
        )} */}
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

const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  /* grid-auto-rows: minmax(170px, auto); */
  margin-bottom: 10px;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 0 100px;
  grid-column-gap: 10px;

  /* @media only screen and (min-width: 1450px) {
    grid-template-columns: 25% 60% auto;
  } */

  /* @media only screen and (min-width: 1151px) and (max-width: 1449px) {
    grid-template-columns: 25% 75%;
  } */
  @media only screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  display: grid;
  grid-row: 1/ 3;
  margin-top: 10px;

  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;

const SliderBanner = styled.div`
  margin-top: 10px;
`;

const BottomImage = styled.div`
  display: grid;

  grid-template-columns: 2fr 2fr;
  margin-left: -10px;
  grid-auto-rows: minmax(180px, auto);
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
    grid-column: 2/ 10;
    grid-template-columns: 2fr 2fr 2fr;
  }
  /* @media only screen and (min-width: 1151px) and (max-width: 1449px) {
    grid-column: 2/ 9;
    grid-template-columns: 2fr 2fr 2fr;
  } */
`;
