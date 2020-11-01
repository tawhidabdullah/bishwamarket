import React, { useEffect, useState } from "react";
import styled from "styled-components";
import slider1 from "../../assets/1.1.png";
import image from "../../assets/banner/1.jpg";
import { MainSlider } from "../../components/Slider/MainSlider";
import { Blog } from "../../components/Banner/Blog";
import CollectionItem from "../../components/CollectionItem/CollectionItem"
import { ThemeSlider } from "../../components/Slider/ThemeSlider";
import offerImg from "../../assets/offerBanner/offer-banner.png"

import { useQueryFetch } from "../../hooks";
const  ImageBanner=()=> {








    const [status, setStatus] = useState(true);
    const [data, setdata] = useState([]);



      const bannerState = useQueryFetch("banner");
  
    useEffect(() => {
      if (bannerState.isLoading === false) {
        console.log("pppp");
        setdata(bannerState.data);
        console.log(bannerState.data[0]);
        setStatus(false);
      }
    }, [bannerState.isLoading]);



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
        <Content></Content>

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
                padding:"0px",
              }}
            />
          )}
        </SliderBanner>
        <RightSlider>
          <OfferBannerImg>
            <img src={offerImg} alt="offer-banner" className="img-fluid  " />
          </OfferBannerImg>
          <BannerContain>
            <h5>Special Offer for you</h5>
            <Discount>
              <h1>50%</h1>
              <sup>off</sup>
            </Discount>
          </BannerContain>
        </RightSlider>

        <BottomImage>
          <CollectionItem customStyles={{}}></CollectionItem>

          <CollectionItem customStyles={{}}></CollectionItem>
          <CollectionItem customStyles={{}}></CollectionItem>
        </BottomImage>
      </NavigationContainer>
    );
}


export default ImageBanner;


const OfferBannerImg=styled.div`
   height: 100%;
    background-color: #ff6000;
   
    display: flex;
   
    align-items: center;

    & img{
      height: 100%;
     width:100%;
     object-fit:fill;
    }

`;

const BannerContain = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;

  justify-content: center;
  text-align: center;
  flex-direction: column;
  & h5 {
    font-size: 18px;
    color: #fff;
    font-family: Raleway, sans-serif;
    letter-spacing: 0.05em;
    font-weight: 400;
    margin-top: 25px;
  }
  @media only screen and (min-width: 1750px) and (max-width:2000px) {
    left: -50px;
  }
  
`;

const Discount = styled.div`
  display: flex;
  & h1 {
    color: #fff;
    line-height: 1;
    font-style: italic;
    font-weight: 700;
    margin-bottom: 0;
    font-size: calc(30px + (72 - 30) * ((100vw - 320px) / (1920 - 320)));
  }

  & sup {
    font-size: 25px;
    color: #fff;
    line-height: 1;
    font-style: italic;
    font-weight: 700;
    top: 10px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-row: 1/ 3;

  @media only screen and (max-width: 1150px) {
    display: none;
   
  }

  // transition: height 2s;
  // transition-timing-function: ease-in-out;

  // :hover {
  //   opacity: 1;
  //   height: 300px;
  // }
`;


const RightSlider = styled.div`
  display: none;
  margin-top: 10px;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: 1450px) {
    display: flex;
  }
`;
const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-auto-rows: minmax(170px, auto);
  justify-content: center;
  background-color: #f2f2f2;

  @media only screen and (min-width: 1450px) {
    grid-template-columns: 25% 60% auto;
  }

  @media only screen and (min-width: 1151px) and (max-width: 1449px) {
    grid-template-columns: 25% 75%;
  }
  @media only screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
`;

const SliderBanner = styled.div`
 
  background-color: #eddbd1;
  margin-top:10px;

`;
const SliderImage = styled.div`
  height: 455px;
  


`;
const SliderBannercontent = styled.div`
  position: absolute;
  top: 0;
  right:0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  
  padding: 0 100px;
`;




const BottomImage = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 2fr 1fr;
  margin-left: -10px;
  grid-auto-rows: minmax(180px, auto);
  @media only screen and (max-width: 1150px) and (min-width: 580px) {
    grid-template-columns: 2fr 2fr 2fr;
    margin-left: 0px;
  }

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    margin-left: 0px;
  }

  @media only screen and (min-width: 1450px) {
    grid-column: 2/ 10;
    grid-template-columns: 2fr 2fr 2fr;
  }
  @media only screen and (min-width: 1151px) and (max-width: 1449px) {
    grid-column: 2/ 9;
    grid-template-columns: 2fr 2fr 2fr;
  }
`;

const Item = styled.div`

 
  
  background-size: cover;
  background-position: center center;
  display: flex;
 
  align-items: center;
  padding-left:10px;
  
  & h3 {
    color: #ff6000;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 1;
    margin-bottom: 8px;
  }
  & h4 {
    color: #444;
    font-size: 30px;
    text-transform: uppercase;
    line-height: 1;
  }

  & .shop {
    margin-top: 13px;
  }

  & .shop a {
    text-transform: capitalize;
    color: #ffa800;
    font-weight: 700;
  }

  & .shop a i {
    margin-left: 8px;
  }
`;



