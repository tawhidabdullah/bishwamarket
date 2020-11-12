import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Slider from "react-slick";
import { MainSlider } from "../../components/Slider/MainSlider";
import { Blog } from "../../components/Banner/Blog";
import { HotdealItem } from "../../components/HotdealItem";
import { MediaBanner } from "../../components/Slider/MediaBanner";

import img1 from "../../assets/hotDeal/1.jpg";
import img from "../../assets/6.jpg";
import { RightBar } from "../../components/ProductListing/RightBar";

// import elements
import { Header } from "../../components/elements/Header";

// import hooks
import { useHandleFetch } from "../../hooks";

// const SlideCustom = (props) => {

// const [current, setCurrent] = useState(0);

// const onNext = () => {
//   if (current + 1 == slides.length) {
//     setCurrent(0);
//   } else setCurrent((current) => current + 1);
// };

// const onPrev = () => {
//   if (current - 1 < 0) {
//     let last = slides.length - 1;
//     setCurrent(last);
//   } else setCurrent((current) => current - 1);
// };

// {/* <Slider > */}

//  <HotdealItem
//   url={slides[current].url}
//   title={slides[current].title}
//   onNext={onNext}
//   onPrev={onPrev}

// />

// </Slider>
//   console.log(props);
//   return (
//     <div>
//       <img src={props.url} />
//       <button onClick={props.onPrev}>Prev</button>
//       <p>{props.title}</p>
//       <button onClick={props.onNext}>Next</button>
//     </div>
//   );
// };

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
        <MainContent>
          <Header
            content="MOST POPULAR PRODUCTS"
            customStyle={{ fontSize: "20px", marginBottom: "20px" }}
          />
          <Slider {...settings}>
            {popularProductRes.done &&
              popularProductRes.data.length > 0 &&
              popularProductRes.data.map((product, idx) => (
                <>
                  {idx === 0 && (
                    <MediaBanner product={popularProductRes.data.slice(0, 2)} />
                  )}
                  {idx !== 0 && (
                    <MediaBanner
                      product={popularProductRes.data.slice(idx, idx + 2)}
                    />
                  )}
                  {/* <MediaBanner
                    product={popularProductRes.data.slice(idx, idx + 2)}
                  /> */}
                </>
              ))}
          </Slider>
          <ViewMoreText onClick={() => history.push("/product")}>
            View more...
          </ViewMoreText>
        </MainContent>
        <MidContent>
          <Jewellerybanner style={{ backgroundImage: `url(${img})` }} />
        </MidContent>
        <MainContents>
          <LeftContens>
            <Header
              content="TODAY'S HOT OFFER"
              customStyle={{ fontSize: "20px", textAlign: "center" }}
            />
            <Slider
              // asNavFor={nav2}
              // ref={(slider) => (slider1 = slider)}
              arrows={true}
            >
              {offerProductState.done &&
                offerProductState.data &&
                offerProductState.data.length > 0 &&
                offerProductState.data.map((item, idx) => (
                  <div>
                    <HotdealItem offerProduct={item} />
                  </div>
                ))}
            </Slider>
          </LeftContens>

          {/* <Rightslide>
            <Slider
              asNavFor={nav1}
              ref={(slider) => (slider2 = slider)}
              {...settings2}
            >
              <div>
                <img
                  src={slides[0].url}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div>
                <img
                  src={slides[0].url}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div>
                <img
                  src={slides[0].url}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div>
                <img
                  src={slides[0].url}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div>
                <img
                  src={slides[0].url}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div>
                <img
                  src={slides[0].url}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
            </Slider>
          </Rightslide> */}
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
  font-size: 14px;
  background-color: #ff6000;
  padding: 10px 20px;
  font-weight: bold;
  text-align: center;
  width: fit-content;
  color: #fff;
  cursor: pointer;
  transition: ease-in-out 400ms;

  :hover {
    background-color: orange;
  }
`;

const MainContents = styled.div`
  outline: none;
  background-color: #f2f2f2;
  padding: 10px;

  display: grid;
  width: 600px;

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
    top: 35px;
    right: -15px;
    left: unset;
    z-index: 9;

    @media only screen and (max-width: 580px) {
      right: 55px;
      top: 5px;
    }
  }
  & .slick-next {
    top: 35px;
    right: -40px;
    z-index: 9;
    background: transparent;
    width: 20px;
    height: 20px;
    @media only screen and (max-width: 580px) {
      right: 25px;
      top: 5px;
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
    grid-template-columns: 1fr 300px 1fr;
  }
`;
const MainContent = styled.div`
  outline: none;
  padding: 30px;
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

const Text = styled.div``;
const HotDealContainer = styled.div`
  background-color: #f2f2f2;
`;

const HotContain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const HotdealCenter = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: start;
  justify-content: start;
  height: 100%;
`;

const HotRating = styled.div`
  line-height: 1;
  margin: 20px 10px;
  color: #ffa800;
`;
const Rightslide = styled.div`
  padding-top: 100px;
  @media only screen and (max-width: 580px) {
    padding-top: 0px;
    padding-left: 10px;
  }
`;
