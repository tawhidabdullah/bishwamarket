import React,{useState,useEffect} from 'react'
import {Blog } from "../../components/Banner/Blog"
import { MainSlider } from "../../components/Slider/MainSlider";
import styled from "styled-components";

import {BlogItem} from "../../components/Slider/BlogItem"
import { useQueryFetch, useHandleFetch } from "../../hooks";
const LatestBlog=()=> {



  //postList;

    const postList = useQueryFetch("postList");
    // const [categoryListData, setCategoryListData] = useState([]);

    // useEffect(() => {
    //   if (categoryListState.isSuccess && categoryListState.data) {
    //     setCategoryListData(categoryListState.data);
    //   }
    // }, [categoryListState.isSuccess]);

    console.log(postList, "postList ");

    const responsive = {
      responsive: [
        {
          breakpoint: 3224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
    <Section>
      <Blog
        title="Latest Blog"
        customStyles={{
          height: "100px",
          backgroundColor: "#f2f2f2",
        }}
      />
      <BottomSection>
        <MainSlider
          responsive={responsive}
          ProductsByCategory={BlogItem}
          customStyles={{
           
          }}
        />
      </BottomSection>
    </Section>
  );
}
export default LatestBlog;
const Section = styled.div``;
const BottomSection = styled.div`
  width: 100%;

 
 
`;
