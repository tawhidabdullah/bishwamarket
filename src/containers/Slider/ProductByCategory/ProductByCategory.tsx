///@ts-nocheck
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { ProductsByCategory } from "../../../components/Slider/ProductsByCategory";
import { MainSlider } from "../../../components/Slider/MainSlider";
import { Blog } from "../../../components/Banner/Blog";
import { Productcontain } from "../../../components/Navigation/ProductConatain";

import { useSelector } from "react-redux";

// import hooks
import { useQueryFetch, useHandleFetch } from "../../../hooks";

const ProductByCategory = () => {
  //previously saving category data in redux is getting back
  let category = useSelector((state) => state.category);



  //state
  const [selectedCateoryId, setSelectedCategoryId] = useState("");
const[indexColor,setColor]=useState(0)
  const [products, setproducts] = useState([]);
  

  //setting initial selectedCateoryId
  useEffect(() => {
    if (category.length > 0) {
      setSelectedCategoryId(category[0].id);
    } 
  }, [category.length]);

  //for data fetching hooks
  const [categoryProductsState, handleCategoryProductsFetch] = useHandleFetch(
    [],
    "categoryProducts"
  );
  //generating fetching url
  useEffect(() => {
    const setCategoryProducts = async () => {
      const newProductsRes = await handleCategoryProductsFetch({
        urlOptions: {
          placeHolders: {
            id: selectedCateoryId,
          },
          params: {
            isRecursive: true,
          },
        },
      });

      console.log(newProductsRes, "newProductsRes");
    };

    if (selectedCateoryId) {
      setCategoryProducts();
    }
  }, [selectedCateoryId]);

  //setting products for category state
  useEffect(() => {
    if (
      categoryProductsState.done === true &&
      categoryProductsState.data.data
    ) {
      setproducts(categoryProductsState.data.data);
      let p=document.getElementsByClassName("categoryName");
      console.log(p[0],"p");
      p[indexColor].style.color = "red";
    } 
   
    else {
      setproducts([]);
   
    
    
    }
  }, [categoryProductsState.data]);

  const responsive = {
    responsive: [
      {
        breakpoint: 3224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },

      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
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
          arrows: false,
        },
      },

      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const handleCategoryId = (id,index) => {
    setSelectedCategoryId(id);
    let p = document.getElementsByClassName("categoryName");
   
    p[index].style.color = "red";
    p[indexColor].style.color="#444"
    setColor(index);
  };

  return (
    <Section>
      <BB>
        {category.map((item,i) => (
          <Span className="categoryName" key={i} onClick={() => handleCategoryId(item.id,i)}>{item.name}</Span>
        ))}
      </BB>
      {products.length>0?  <MainSlider
        responsive={responsive}
        ProductsByCategory={ProductsByCategory}
        data={products}
        customStyles={{
          Levelvisibility: "visible",
        }}
      />:(<p>No data found</p>)}
    
    </Section>
  );
};
export default ProductByCategory;

const Section = styled.div`
margin-top:10px;
`;

const BB = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  flex-wrap: wrap;
  background-color: #fff;

  padding-bottom: 16px;
  padding-top: 16px;
  padding-left:10px;
`;

const Span = styled.div`
  padding-right: 10px;
  padding-left: 5px;
  padding-bottom: 10px;
  padding-top: 10px;

  margin-right: 10px;
  margin-bottom: 10px;

  letter-spacing: 0.05em;
  cursor: pointer;
  color: #444;
  text-transform: uppercase;
  font-weight: 400;

  background-color: #f2f2f2;

  &:hover {
    color: #ffcccb;
  }
`;
