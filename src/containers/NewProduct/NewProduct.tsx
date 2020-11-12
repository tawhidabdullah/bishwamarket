import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import elements
import { Header } from "../../components/elements/Header";

// import product card
import { NewProductCard } from "../../components/NewProductCard";
import { MediaBanner } from "../../components/Slider/MediaBanner";
// hooks for data fetching
import { useHandleFetch, useQueryFetch } from "../../hooks";

const NewProduct = () => {
  // const [newProduct, setNewProduct] = useState([])
  // this hook fetch data in sorted order
  const [newProductState, handleNewProductFetch] = useHandleFetch(
    {},
    "productList"
  );

  useEffect(() => {
    const fetchNewProducts = async () => {
      await handleNewProductFetch({
        urlOptions: {
          params: {
            sortValue: "added",
            sortOrderValue: -1,
            limitValue: 8,
          },
        },
      });
    };

    fetchNewProducts();
  }, []);

  // useEffect(() => {
  //   if(newProductState.done && newProductState.data && newProductState.data.data.length > 0) {

  //   }
  // })

  // const newProductState = useQueryFetch("productList");

  console.log("newProduct", newProductState);

  return (
    <Wrapper>
      <NewProductContainer>
        <Header
          content="NEWLY ARRIVED!"
          customStyle={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "30px",
          }}
        />

        <ProductDisplayContainer>
          {newProductState.done &&
            newProductState.data &&
            newProductState.data.data.length > 0 &&
            newProductState.data.data.map((item, idx) => (
              <NewProductCard key={idx} product={item} />
              // <MediaBanner
              //   key={idx}
              //   product={[item]}
              //   customStyle={{
              //     backgroundColor: "#fff",
              //     border: "1px solid #f2f2f2",
              //   }}
              // />
            ))}
        </ProductDisplayContainer>
      </NewProductContainer>
    </Wrapper>
  );
};

export default NewProduct;

const Wrapper = styled.section``;

const NewProductContainer = styled.div`
  width: 95%;
  margin: 50px auto;
  background-color: #fff;
  padding: 30px 20px;
`;

const ProductDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  /* align-items: center;
  justify-content: center; */
  grid-auto-rows: max-content;

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 578px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;
