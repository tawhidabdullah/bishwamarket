import React from "react";
import styled from "styled-components";
import slider1 from "../../assets/1.1.png";
import image from "../../assets/banner/1.jpg";
import { MainSlider } from "../../components/Slider/MainSlider";
import { Blog } from "../../components/Banner/Blog";
import CollectionItem from "../../components/CollectionItem/CollectionItem"
import { ThemeSlider } from "../../components/Slider/ThemeSlider";
const  ImageBanner=()=> {
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
          {/*  <SliderImage>
            <ul className="layout2-slide-1">
              <li
                id="img-1"
                // style={{ transform: "translateX(1.9%) translateY(0.02%)" }}
              >
                <img src={slider1} className="img-fluid" alt="slider" />
              </li>
            </ul>
          </SliderImage>
          <SliderBannercontent>
            <div>
              <h4>the best</h4>
              <h1>loffer shoes</h1>
              <h2>minimum 30% off</h2>
              <a className="btn btn-rounded">Shop Now</a>
            </div>
          </SliderBannercontent>  */}

          {/* <CollectionItem
            customStyles={{
              height: "400px",
            }}
          ></CollectionItem> */}
          <MainSlider
            responsive={responsive}
            ProductsByCategory={ThemeSlider}
            customStyles={{
              width: "100%",
          
            }}
          />
        </SliderBanner>
        <RightSlider>
  <p>hjkkkkkhsdsddd</p>
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
    grid-template-columns: 25% 50% 20%;
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



