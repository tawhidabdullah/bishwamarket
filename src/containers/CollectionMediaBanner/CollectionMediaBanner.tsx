import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

import img from "../../assets/6.jpg";
import img1 from "../../assets/hotDeal/1.jpg";

// import elements
import { Header } from "../../components/elements/Header";
import { HotdealItem } from "../../components/HotdealItem";
import { MediaBanner } from "../../components/Slider/MediaBanner";

// import hooks
import { useHandleFetch, useQueryFetch } from "../../hooks";

const CollectionMediaBanner = () => {
  // const slider = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [nav1, setNav1] = useState([]);
  const [nav2, setNav2] = useState([]);
  let slider1 = [];
  let slider2 = [];

  const history = useHistory();

  // this hook fetch most popular products
  const [popularProductRes, handlePopularProductFetch] = useHandleFetch(
    {},
    "popular"
  );

  // this hook fetch product with available offer
  const [offerProductState, handleOfferProductFetch] = useHandleFetch(
    {},
    "offerProduct"
  );

  const bannerState = useQueryFetch("banner");

  useEffect(() => {
    const fetchProducts = async () => {
      await handlePopularProductFetch({});
      await handleOfferProductFetch({});
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  const slides = [
    {
      id: 1,
      title: "hey",
      url: `${img1}`,
    },
    {
      id: 1,
      title: "hey2",
      url: `${img}`,
    },
  ];
  const settings = {
    speed: 500,

    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  const settings2 = {
    // dots: false,
    // infinite: true,

    responsive: [
      {
        breakpoint: 3524,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          vertical: true,

          swipeToSlide: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,

          swipeToSlide: true,
          focusOnSelect: true,
        },
      },
    ],
  };

  return (
    <Section>
      <Main>
        {" "}
        <MainContent className="popularProductsSlider">
          <Header
            content="POPULAR PRODUCTS"
            customStyle={{ fontSize: "20px", marginBottom: "20px" }}
          />
          <Slider {...settings}>
            {popularProductRes.done &&
              popularProductRes.data.length > 0 &&
              popularProductRes.data.map((product, idx) => (
                <Fragment key={idx}>
                  {idx === 0 && (
                    <MediaBanner product={popularProductRes.data.slice(0, 2)} />
                  )}
                  {idx !== 0 && (
                    <MediaBanner
                      product={popularProductRes.data.slice(idx, idx + 2)}
                    />
                  )}
                </Fragment>
              ))}
          </Slider>
          <ViewMoreText onClick={() => history.push("/product")}>
            View more...
          </ViewMoreText>
        </MainContent>
        {bannerState.isSuccess && bannerState.data?.length > 0 && (
          <MidContent>
            <Jewellerybanner
              style={{ backgroundImage: `url(${bannerState.data?.[0].src})` }}
            />
          </MidContent>
        )}
        <MainContents>
          <LeftContens>
            <Header
              content="TODAY'S HOT OFFER"
              customStyle={{ fontSize: "20px" }}
            />
            <Slider arrows={true}>
              {offerProductState.done &&
                offerProductState.data &&
                offerProductState.data.length > 0 &&
                offerProductState.data.map((item, idx) => (
                  <div key={idx}>
                    <HotdealItem offerProduct={item} />
                  </div>
                ))}
            </Slider>
          </LeftContens>
        </MainContents>
      </Main>
    </Section>
  );
};

export default CollectionMediaBanner;

const Section = styled.div`
  background-color: #fff;
`;

const ViewMoreText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: fit-content;
  color: #5c2c90;
  cursor: pointer;
  transition: ease-in-out 400ms;
  margin-top: 20px;
  font-weight: 700;

  :hover {
    color: #eea826;
  }
`;

const MainContents = styled.div`
  outline: none;
  background-color: #f2f2f2;
  padding: 30px;

  display: grid;
  /* width: 600px; */

  grid-template-columns: 85% 15%;
  @media only screen and (max-width: 1000px) and (min-width: 580px) {
    grid-column: 1 / 3;
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 580px) and (min-width: 500px) {
    grid-template-columns: 100%;
    width: 480px;
  }
  @media only screen and (max-width: 500px) and (min-width: 400px) {
    grid-template-columns: 100%;
    width: 380px;
  }

  @media only screen and (max-width: 400px) and (min-width: 350px) {
    grid-template-columns: 100%;
    width: 330px;
  }

  @media only screen and (max-width: 350px) {
    grid-template-columns: 100%;
    width: 300px;
  }
  & .slick-prev {
    top: -28px;
    right: -55px;
    left: unset;
    z-index: 9;

    @media only screen and (max-width: 580px) {
      right: 55px;
      top: -25px;
    }
  }
  & .slick-next {
    top: -28px;
    right: -80px;
    z-index: 9;
    background: transparent;
    width: 20px;
    height: 20px;

    @media only screen and (max-width: 580px) {
      right: 25px;
      top: -25px;
    }
  }
  & .slick-prev::before {
    color: #999;
    opacity: 1;
    font: normal normal normal 30px/1 FontAwesome;
    content: "\f104";
  }

  .slick-next::before {
    color: #999;
    opacity: 1;
    content: "\f105";
    font: normal normal normal 30px/1 FontAwesome;
  }
`;

const LeftContens = styled.div``;
const Main = styled.div`
  background-color: #fff;
  display: grid;
  justify-content: center;
  padding: 30px;
  grid-template-columns: 300px 1fr auto;
  /* max-width: 1400px; */
  width: 98%;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) and (min-width: 580px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: 30% 15% 55%;
  }
`;
const MainContent = styled.div`
  outline: none;
  padding: 30px 40px;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: minmax(140px, 1fr);
`;

const MidContent = styled.div`
  display: grid;
  grid-template-columns: minmax(140px, 1fr);
  text-align: center;
  align-items: center;
`;

const Jewellerybanner = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 35px;
  height: 100%;
  display: grid;
  align-items: center;
`;
