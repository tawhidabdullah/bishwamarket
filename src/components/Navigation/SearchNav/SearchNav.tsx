import React from 'react';
import styled from 'styled-components';
import image1 from "../../../assets/dropdown.png"
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
const  SearchNav = (props) => {
  

  return (
    <SearchNavContainer>
      <NavCategory>
        <IconButton />
        Shop By Category
        <Contents>
          <CategoryItem>
            <ul className="nav-cat title-font">
              <li>
                {" "}
                <img src={nav1} alt="catergory-product" /> <a>western ware</a>
              </li>
              <li>
                {" "}
                <img src={nav2} alt="catergory-product" /> <a>TV, Appliances</a>
              </li>
              <li>
                {" "}
                <img src={nav3} alt="catergory-product" /> <a>Pets Products</a>
              </li>
              <li>
                {" "}
                <img src={nav4} alt="catergory-product" /> <a>Car, Motorbike</a>
              </li>
              <li>
                {" "}
                <img src={nav5} alt="catergory-product" />{" "}
                <a>Industrial Products</a>
              </li>
              <li>
                {" "}
                <img src={nav6} alt="catergory-product" />{" "}
                <a>Beauty, Health Products</a>
              </li>
              <li>
                {" "}
                <img src={nav7} alt="catergory-product" />{" "}
                <a>Grocery Products </a>
              </li>
              <li>
                {" "}
                <img src={nav8} alt="catergory-product" /> <a>Sports</a>
              </li>
              {/*   <li>
                {" "}
                <img src={nav9} alt="catergory-product" /> <a>Bags, Luggage</a>
              </li>
              <li>
                {" "}
                <img src={nav9} alt="catergory-product" /> <a>Movies, Music </a>
              </li> */}

              {/* <li className="mor-slide-open" style={{ display: " none" }}>
                <ul>
                  <li>
                    {" "}
                    <img src={nav1} alt="catergory-product" /> <a>Sports</a>
                  </li>
                  <li>
                    {" "}
                    <img src={nav1} alt="catergory-product" />{" "}
                    <a>Bags, Luggage</a>
                  </li>
                  <li>
                    {" "}
                    <img src={nav1} alt="catergory-product" />{" "}
                    <a>Movies, Music </a>
                  </li>
                  <li>
                    {" "}
                    <img src={nav1} alt="catergory-product" />{" "}
                    <a>Video Games</a>
                  </li>
                  <li>
                    {" "}
                    <img src={nav1} alt="catergory-product" />{" "}
                    <a>Toys, Baby Products</a>
                  </li>
                </ul>
              </li> */}
              <li>
                {" "}
                <a className="mor-slide-click">
                  mor category <i className="fa fa-angle-down pro-down"></i>
                  <i
                    className="fa fa-angle-up pro-up"
                    style={{ display: "none" }}
                  ></i>
                </a>
              </li>
            </ul>
          </CategoryItem>
        </Contents>
      </NavCategory>
      <SearchCategory>
        <span>
          <i className="fa fa-search"></i>
        </span>
        <input type="text" placeholder="Search a Product"></input>
        <Dropdowncategory>
          <SelectCategory />
        </Dropdowncategory>
      </SearchCategory>
      <Rightcontent>
        <Call>
          <i className="fas fa-phone"></i>
          <span>
            <span>123-456-76890</span>
          </span>
        </Call>
        
        <Gift>
          <div className="gift-block" data-toggle="dropdown">
            <div className="grif-icon">
              <i className="fas fa-phone"></i>
            </div>
            <GiftOffer>
              <p>gift box</p>
              <p>Festival Offer</p>
            </GiftOffer>
          </div>
        </Gift>
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
      </Rightcontent>
    </SearchNavContainer>
  );
}

export default SearchNav;

const SearchNavContainer = styled.div`
  height: 70px;
  background-color: #ff6000;
  display: flex;
  align-items: center;
  justify-content: space-around;
 
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

  // transition: height 2s;
  // transition-timing-function: ease-in-out;

  // :hover {
  //   opacity: 1;
  //   height: 300px;
  // }
`;
const NavCategory = styled.div`
  height: 70px;
  background-color: #212529;
  color: #fff;
  font-size: 14px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  position: relative;
  width: 250px;
  z-index: 9;
  justify-content:center;

  & button {
    width: 20px;
    height: 20px;

    background-color: #fff;
    color: #444;
    border-radius: 50%;
    font-size: 12px;

    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
    -webkit-transition: all 0.5s ease;
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

const Rightcontent=styled.div`
display:flex;
position:relative;
`;
const Call=styled.div`
padding:20px 0;
margin-left:20px;
`;
const Gift = styled.div`
  color: orange;
  
  & div {
    background-color: #ffa800;
    padding: 8px 6px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    margin-left: 15px;
    border: 0;
  }
`;

const GiftOffer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
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
  height:200px;
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