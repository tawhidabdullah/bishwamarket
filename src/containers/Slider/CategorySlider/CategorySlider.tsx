












import React from "react";

import styled from "styled-components";
import { MainSlider } from "../../../components/Slider/MainSlider";
import { DealBanner } from "../../../components/Banner/DealBanner";
import { CategoryItem } from "../../../components/Slider/CategoryItem";

const CategorySlider = () => {
  const responsive = {
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section>
      <DealBanner />

      <MainSlider
        responsive={responsive}
        ProductsByCategory={CategoryItem}
        customStyles={{
          backgroundColor: "#ffa800",

          padding: "30px  70px 20px",
        }}
      />
    </Section>
  );
};
export default CategorySlider;

const Section = styled.div``;






// const CategorySlider=()=> {
  
//   const [activeSlide, setactiveSlide] = useState(0);
//   const [activeSlide2, setactiveSlide2] = useState(0);
//   const settings = {
//     // dots: false,
//     // infinite: true,
//     speed: 500,

//     beforeChange: (current, next) => setactiveSlide(next),
//     afterChange: (current) => setactiveSlide2(current),
//     responsive: [
//       {
//         breakpoint: 1524,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <MainContent>
//       <Slider {...settings}>
//         <CategoryItem />
//         <CategoryItem />
//         <CategoryItem />
//         <CategoryItem />
//         <CategoryItem /> 
//         <CategoryItem />
//         <CategoryItem />
//         <CategoryItem />
//         <CategoryItem />
//       </Slider>
//     </MainContent>
//   );
// };


// export default CategorySlider;
// const MainContent = styled.div`
//   outline: none;
//   border: none;
//   

//   & .slick-slide {
//     outline: none;
   
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;

//     &:hover{

//     }
//   }
// `;