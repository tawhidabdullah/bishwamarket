import React, { useEffect } from "react";
import styled from "styled-components";

// import elements
import { Header } from "../../components/elements/Header";

// import product card
import { NewProductCard } from "../../components/NewProductCard";

// hooks for data fetching
import { useHandleFetch } from "../../hooks";

const NewProduct = () => {
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
            newProductState.data.data &&
            newProductState.data.data.length > 0 &&
            newProductState.data.data.map((item, idx) => (
              <NewProductCard key={idx} product={item} />
            ))}
        </ProductDisplayContainer>
      </NewProductContainer>
    </Wrapper>
  );
};

export default NewProduct;

const Wrapper = styled.section``;

const NewProductContainer = styled.div`
  background-color: #fff;
  padding: 30px 20px;
`;

const ProductDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  /* align-items: center;
  justify-content: center; */
  padding: 30px;
  background: #f2f2f2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  grid-auto-rows: max-content;

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
