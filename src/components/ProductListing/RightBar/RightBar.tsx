import React from 'react'
import styled from "styled-components";

import image1 from "../../../assets/dropdown.png"
import { ProductsByCategory } from '../../Slider/ProductsByCategory';
const RightBar=()=> {
    return (
      <RightContainer>
        <Titel>
          <h5>Showing Products Results</h5>
          <TitelBottom>
            <Dropdowncategory>
              <select>
                <option>50 Products Per Page</option>
                <option>20 Products Per Page</option>
                <option>10 Products Per Page</option>
              </select>
            </Dropdowncategory>
            
            <Dropdowncategory>
              <select>
                <option>50 Products Per Page</option>
                <option>20 Products Per Page</option>
                <option>10 Products Per Page</option>
              </select>
            </Dropdowncategory>
          </TitelBottom>
        </Titel>
        <Products>
          <ProductsByCategory
            customStyles={{
              productBackgroundColor: "#fff",
              Levelvisibility: "hidden",
              ProductDetailVisibility: "hidden",
              containerDirection: "row",
              containerright: "10%",
              containerTransform: "translateY(100%)",
              containertop: "80%",
            }}
          />
          <ProductsByCategory
            customStyles={{
              productBackgroundColor: "#fff",
              Levelvisibility: "hidden",
              ProductDetailVisibility: "hidden",
              containerDirection: "row",
              containerright: "10%",
              containerTransform: "translateY(100%)",
              containertop: "80%",
            }}
          />
          <ProductsByCategory
            customStyles={{
              productBackgroundColor: "#fff",
              Levelvisibility: "hidden",
              ProductDetailVisibility: "hidden",
              containerDirection: "row",
              containerright: "10%",
              containerTransform: "translateY(100%)",
              containertop: "80%",
            }}
          />
          <ProductsByCategory
            customStyles={{
              productBackgroundColor: "#fff",
              Levelvisibility: "hidden",
              ProductDetailVisibility: "hidden",
              containerDirection: "row",
              containerright: "10%",
              containerTransform: "translateY(100%)",
              containertop: "80%",
            }}
          />
          <ProductsByCategory
            customStyles={{
              productBackgroundColor: "#fff",
              Levelvisibility: "hidden",
              ProductDetailVisibility: "hidden",
              containerDirection: "row",
              containerright: "10%",
              containerTransform: "translateY(100%)",
              containertop: "80%",
            }}
          />
          <ProductsByCategory
            customStyles={{
              productBackgroundColor: "#fff",
              Levelvisibility: "hidden",
              ProductDetailVisibility: "hidden",
              containerDirection: "row",
              containerright: "10%",
              containerTransform: "translateY(100%)",
              containertop: "80%",
            }}
          />
          <ProductsByCategory
            customStyles={{
              productBackgroundColor: "#fff",
              Levelvisibility: "hidden",
              ProductDetailVisibility: "hidden",
              containerDirection: "row",
              containerright: "10%",
              containerTransform: "translateY(100%)",
              containertop: "80%",
            }}
          />
        </Products>
      </RightContainer>
    );
}


export default RightBar;

const RightContainer=styled.div`


`;

const Titel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h5 {
    border: 1px solid black;
    margin-bottom: 0px;
    border-bottom: 0px;
    padding: 20px;
    text-align: center;
    margin-bottom: 0;
    color: #333;
   
  }
`;
const TitelBottom = styled.div`
  border: 1px solid black;

  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 580px) {
 flex-direction:column;
  }
`;


const Dropdowncategory = styled.div`
  padding-right: 30px;
  border-right: 1px solid black;

  &:nth-child(2) {
    border-right: 0px solid black;
  }
  & select {
    appearance: none;
    outline: none;
    border: 0;
    padding: 28px 30px;
    border-right: 1px solid #ddd;
    width: 100%;

    background-image: url(${image1});
    background-position-x: 100%;
    background-position-y: 50%;
    background-size: 10px 10px;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: scroll;
    background-origin: initial;

    background-color: initial;
    text-align: center;
    text-align-last: center;

    text-transform: uppercase;

    border: none;

    & option {
      padding: 10px;
      margin: 10px;
    }
  }

  @media only screen and (max-width: 580px) {
    &:nth-child(2) {
      border-top: 1px solid black;
    }
  }
`;



const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(240, auto);

  max-width: 1400px;
  margin: 0 auto;
  justify-items: center;

  margin-left: 10px;
  margin-right: 20px;

  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 650px) and (min-width: 300px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media only screen and (max-width: 980px) and (min-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (max-width: 1260px) and (min-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (min-width: 1261px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
`;
