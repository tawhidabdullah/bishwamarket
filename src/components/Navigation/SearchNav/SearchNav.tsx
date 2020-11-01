//@ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "../../../assets/dropdown.png";
import image2 from "../../../assets/1.png";
import { IconButton, SelectCategory } from "../../../elemens";

import nav1 from "../../../assets/nav/01.png";
import nav2 from "../../../assets/nav/02.png";
import nav3 from "../../../assets/nav/03.png";
import nav4 from "../../../assets/nav/04.png";
import nav5 from "../../../assets/nav/05.png";
import nav6 from "../../../assets/nav/06.png";
import nav7 from "../../../assets/nav/07.png";

import nav8 from "../../../assets/nav/08.png";
import nav9 from "../../../assets/nav/09.png";
const SearchNav = ({
  setToggleCategory,
  toggleCategory,
  toggleGiftBox,
  setToggleGiftBox,
  categoryListData,
}) => {
  const [subcategory, setSubCategory] = useState([]);
  const [minlength, setminlength]=useState(8);

  const handleSub = (value) => {
    if (
      categoryListData[value] &&
      categoryListData[value].hasOwnProperty("subCategory")
    ) {
      setSubCategory(categoryListData[value].subCategory);
    } else {
      setSubCategory([]);
    }
    console.log(categoryListData[value].subCategory);
  };
  useEffect(() => {
    if (categoryListData && categoryListData.length > 0) {
      setSubCategory(categoryListData[0].subCategory);
      console.log(
        categoryListData[0].subCategory,
        "categoryListData[0].subCategory"
      );
    }
  }, [categoryListData.length]);


  const updateLength=()=>{
    if (subcategory.length<minlength) 
        setminlength(minlength + 8);
    else
      setminlength(subcategory.length);
  }
  return (
    <SearchNavContainer>
      <NavCategory>
        <ShopCategory
          onClick={() =>
            setToggleCategory && setToggleCategory(!toggleCategory)
          }
        >
          <IconButton />
          Shop By Category
        </ShopCategory>

        {toggleCategory ? (
          <Contents>
            <CategoryItem>
              <ul className="nav-cat title-font">
                {subcategory.slice(0,minlength).map((subitem, it) => {
                  return (
                    <li key={it}>
                      <img
                        src={subitem.thumbnail || subitem.cover}
                        alt="catergory-product"
                      />
                      <a>{subitem.name || plabon}</a>
                    </li>
                  );
                })}

                <li onClick={updateLength}>
                  <a className="mor-slide-click" >
                    more category <i className="fa fa-angle-down pro-down"></i>
                    <i
                      className="fa fa-angle-up pro-up"
                      style={{ display: "none" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </CategoryItem>
          </Contents>
        ) : (
          ""
        )}
      </NavCategory>
      <SearchCategory>
        <span>
          <i className="fa fa-search"></i>
        </span>
        <input type="text" placeholder="Search a Product"></input>
        <Dropdowncategory>
          <select
          
            onChange={(e) =>
              categoryListData[e.target.value] &&
              categoryListData[e.target.value].hasOwnProperty("subCategory")
                ? setSubCategory(categoryListData[e.target.value].subCategory)
                : setSubCategory([])
            }
          >
            {categoryListData.map((item, i) => {
              return <option value={i}>{item.name}</option>;
            })}
          </select>
        </Dropdowncategory>
      </SearchCategory>
      <Rightcontent>
        <Call>
          <i className="fa fa-phone"></i>
          <span>
            <span>123-456-76890</span>
          </span>
        </Call>

        <Gift
          onClick={() => setToggleGiftBox && setToggleGiftBox(!toggleGiftBox)}
        >
          <GiftIcon>
            <i className="fa fa-phone"></i>
          </GiftIcon>
          <GiftOffer>
            <span>gift box</span>
            <span>Festivel Offer</span>
          </GiftOffer>
        </Gift>

        {toggleGiftBox ? (
          <Giftcontent>
            <GiftItem>
              <div>
                <img src={image2} alt="image" />
              </div>
              <div>
                <h5>title </h5>
                <p>10 taka per product</p>
              </div>
            </GiftItem>
          </Giftcontent>
        ) : (
          ""
        )}
      </Rightcontent>
    </SearchNavContainer>
  );
};

export default SearchNav;

const SearchNavContainer = styled.div`
  height: 70px;
  background-color: #ff6000;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 580px) {
    display: none;
  }
`;

const Contents = styled.div`
  position: absolute;
  top: 70px;
  left: -40px;
  width: 250px;
  height: fit-content;
  margin-top: 10px;
  background-color: #fff;
  margin-left: 35px;
  border-radius: 0;
  padding: 20px 10px 20px 20px;
  border: 2px solid #f1f1f1;
  z-index: 10;

  transition: height 2s;
  transition-timing-function: ease-in-out;

  @media only screen and (max-width: 1150px) {
    display: none;
  }

  // :hover {
  //   opacity: 1;
  //   height: 300px;
  // }
`;
const NavCategory = styled.div`
  position: relative;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
const ShopCategory = styled.div`
  height: 70px;
  background-color: #212529;
  color: #fff;
  font-size: 14px;
  padding: 0px 30px;
  display: flex;
  align-items: center;

  width: 250px;
  z-index: 9;
  justify-content: center;
  cursor: pointer;

  & button {
    width: 20px;
    height: 20px;

    background-color: #fff;
    color: #444;
    border-radius: 50%;
    font-size: 12px;

    display: flex;

    justify-content: center;

    align-items: center;
    outline: none;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;

  & img {
    margin-right: 10px;
    border: 2px solid #f0f0f0;
    border-radius: 50%;
    padding: 3px;
    height: 46.5px;
    transition: all 0.5s ease;
  }

  & li {
    list-style-type: none;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
  }

  & a {
    color: #444;
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: 0.03em;
  }
`;
const SearchCategory = styled.div`
  background-color: #fff;
  height: 63px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 0px 10px;

  & span {
    padding: 10px 20px;
    background-color: #fff;
    align-self: center;
    cursor: pointer;
  }
  & input {
    border-radius: 0;
    border: none;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    outline: none;

    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
  }
`;

const Dropdowncategory = styled.div`
  margin-right: -1px;
  display: flex;
  position: relative;
  & select {
    appearance: none;
    outline: none;
    font-weight: 700;
    color: #444;
    padding: 0 25px;

    background-image: url(${image1});
    background-position-x: 10px;
    background-position-y: 26px;
    background-size: 10px 10px;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: scroll;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    text-align: center;
    text-align-last: center;

    text-transform: uppercase;

    border: none;
  }

  & i {
    position: absolute;
    top: 25px;
    left: 20px;
  }
`;

const Rightcontent = styled.div`
  display: flex;
  position: relative;
`;
const Call = styled.div`
  padding: 20px 0;
  margin-left: 20px;
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;
const Gift = styled.div`
  background-color: orange;
  margin-left: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 10px;
  color: #fff;
  cursor: pointer;
`;
const GiftIcon = styled.div`
  padding: 12px 10px;
  @media only screen and (max-width: 980px) and (min-width: 750px) {
    display: none;
  }
`;

const GiftOffer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

const Giftcontent = styled.div`
  position: absolute;
  top: 70px;
  right: 110px;
  height: fit-content;
  width: 250px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 2px solid #f1f1f1;

  border-radius: 0;
  padding: 20px 10px 20px 20px;
  z-index: 10;
`;

const Content = styled.div`
  position: absolute;
  top: 80px;
  left: 0px;
  width: 250px;
  height: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 2px solid #f1f1f1;

  border-radius: 0;
  padding: 20px 10px 20px 20px;
  z-index: 10;

  transition: height 2s;
  transition-timing-function: linear;

  :hover {
    height: 300px;
  }
`;
const GiftItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f1f5f8;

  & img {
    height: 45px;
    width: 45px;
    background-color: #ffefe6;
    padding: 7px;
    border-radius: 100%;
    margin-right: 12px !important;
  }

  & h5 {
    padding-bottom: 2px;
    font-weight: 700;
    margin-bottom: 0;
    font-size: 16px;
  }
`;
