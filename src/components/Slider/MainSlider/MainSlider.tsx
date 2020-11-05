import React, { useState } from "react";
import Slider from "react-slick";

import styled from "styled-components";

const MainSlider=({responsive,ProductsByCategory,customStyles,...props})=> {

<<<<<<< HEAD
    responsive: responsive.responsive,
  };
  return (
    <Layout customStyles={customStyles}>
      <MainContent customStyles={customStyles}>
        <Slider {...settings}>
          {props.data && props.data.length > 0
            ? props.data.map((item, idx) => {
                return (
                  <ProductsByCategory
                    key={idx}
                    item={item}
                    customStyles={customStyles}
                  />
                );
              })
            : " "}
        </Slider>
      </MainContent>
    </Layout>
  );
};
=======
 const [activeSlide, setactiveSlide] = useState(0);
   const [activeSlide2, setactiveSlide2] = useState(0);
   const settings = {
     dots: false,
     infinite: true,
     speed: 500,

     responsive: responsive.responsive,
   };
    return (
      <Layout customStyles={customStyles}>
        <MainContent customStyles={customStyles}>
          <Slider {...settings}>
            {props.data && props.data.length > 0
              ? props.data.map((item) => {
                  return (
                    <ProductsByCategory
                      item={item}
                      customStyles={customStyles}
                    />
                  );
                })
              : ""}
         
          </Slider>
        </MainContent>
      </Layout>
    );
}

   
>>>>>>> 3b905ffb2b8febd865fed900e99e28906877e8d9

export default MainSlider;
const Layout = styled.div`
  margin: 0 auto;
  background-color: ${(props) =>
    props.customStyles ? props.customStyles.backgroundColor : "#f2f2f2"};
`;
const MainContent = styled.div`
  outline: none;
  border: none;
  max-width: 1400px;
  background-color: ${(props) =>
    props.customStyles ? props.customStyles.backgroundColor : "#f2f2f2"};

  display: grid;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: ${(props) => (props.customStyles ? props.customStyles.padding : "")};

  grid-template-columns: minmax(60px, auto);

  width: 100%;

  @media only screen and (max-width: 560px) and(min-width:200px) {
    padding-right: 0px;
    padding-left: 8px;
    padding: ${(props) =>
      props.customStyles
        ? props.customStyles.padding
          ? props.customStyles.padding
          : ""
        : ""};
  }

  & .slick-slide {
    outline: none;
    border: none;
    display: flex;
    justify-content: start;
    align-items: start;

    width: 100%;

    @media only screen and (max-width: 580px) {
      justify-content: center;
      align-items: center;
    }
  }

  & div {
    width: ${(props) => (props.customStyles ? props.customStyles.width : "")};
  }
`;
