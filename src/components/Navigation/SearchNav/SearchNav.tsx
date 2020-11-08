//@ts-nocheck
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import image1 from "../../../assets/dropdown.png";
import { IconButton } from "../../../elemens";
import { useQueryFetch } from "../../../hooks";
import { categoryOperations } from "../../../state/ducks/category";
import { globalOperations } from "../../../state/ducks/globalState";
// import utils
import { addFilterToStorage } from "../../../utils";
// import component fetcher
import ComponentFetcher from "../../ComponentFetcher";

const SearchNav = ({
  toggleShopByCategory,
  setToggleCategory,
  toggleCategory,
  toggleGiftBox,
  setToggleGiftBox,
  categoryListData,
  addCategory,
}) => {
  const [subcategory, setSubCategory] = useState([]);
  const [minlength, setminlength] = useState(8);
  const history = useHistory();
  const globalState = useSelector((state) => state.globalState);

  const location = useLocation();

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

  //search
  const [searchValue, setSearchValue] = useState("");

  const onSearchBarChange = (e) => {
    e.preventDefault();

    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    history.push({
      pathname: "/product",
      search: `?search=${""}&query=${searchValue || ""}`,
    });
  };
  //search

  const isHomePage = () => {
    return location.pathname === "/";
  };

  console.log("routeMatch", location);
  useEffect(() => {
    if (categoryListData && categoryListData.length > 0) {
      setSubCategory(categoryListData[0].subCategory);

      addCategory(categoryListData);
    }
  }, [categoryListData.length]);

  const updateLength = () => {
    if (subcategory.length < minlength) setminlength(minlength + 8);
    else setminlength(subcategory.length);
  };

  const categoryList = useQueryFetch("categoryList");

  const [showMore, setShowMore] = useState(false);

  const handleDisplayMoreClick = () => {
    setShowMore(!showMore);
  };
  return (
    <SearchNavContainer>
      <NavCategory>
        <ShopCategory
          onClick={() => toggleShopByCategory && toggleShopByCategory()}
        >
          <IconButton /> &nbsp; Shop By Category
        </ShopCategory>

        {!isHomePage() && globalState.openShopByCategory ? (
          <Contents>
            <CategoryItem>
              <ul className="nav-cat title-font">
                {categoryList.isSuccess &&
                  categoryList.data?.length > 0 &&
                  categoryList.data.slice(0, 6).map((cat) => {
                    return (
                      <li
                        style={{ cursor: "pointer" }}
                        key={cat.id}
                        onClick={() =>
                          addFilterToStorage({ category: cat.id }, () => {
                            history.push("/product");
                          })
                        }
                      >
                        <img src={cat.icon || cat.thumbnail} />

                        <a>{cat.name}</a>
                      </li>
                    );
                  })}

                {/* <li style={{ cursor: "pointer" }} onClick={updateLength}>
                  <a className="mor-slide-click">
                    more category <i className="fa fa-angle-down pro-down"></i>
                    <i
                      className="fa fa-angle-up pro-up"
                      style={{ display: "none" }}
                    ></i>
                  </a>
                </li>

                //=============================== */}
                <li
                  style={{
                    cursor: "pointer",
                    display: showMore ? "none" : "block",
                  }}
                >
                  <a
                    onClick={handleDisplayMoreClick}
                    className="mor-slide-click"
                  >
                    more category <i className="fa fa-angle-down pro-down"></i>
                    <i
                      className="fa fa-angle-up pro-up"
                      style={{ display: "none" }}
                    ></i>
                  </a>
                </li>
                <div
                  style={{
                    display: showMore ? "block" : "none",
                    cursor: "pointer",
                  }}
                >
                  {categoryList.data.slice(6).map((cat, it) => {
                    return (
                      <>
                        <li
                          style={{ transition: "opacity 3s" }}
                          key={it}
                          onClick={() =>
                            addFilterToStorage({ category: cat.id }, () => {
                              history.push("/product");
                            })
                          }
                        >
                          <img src={cat.thumbnail || cat.cover} />

                          <a>{cat.name}</a>
                        </li>
                      </>
                    );
                  })}
                  <li
                    style={{
                      cursor: "pointer",
                      display: showMore ? "block" : "none",
                    }}
                  >
                    <a
                      onClick={handleDisplayMoreClick}
                      className="mor-slide-click"
                    >
                      more category <i className="fa fa-angle-up pro-up"></i>
                      <i
                        className="fa fa-angle-up pro-up"
                        style={{ display: "none" }}
                      ></i>
                    </a>
                  </li>
                </div>
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
        <input
          type="text"
          style={{
            flex: 1,
          }}
          placeholder="Search a Product"
          value={searchValue}
          onChange={onSearchBarChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
        ></input>
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
              return (
                <option key={i} value={i}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </Dropdowncategory>
      </SearchCategory>
      <Rightcontent>
        <ComponentFetcher type="text" apiMapKey="phone">
          {(phoneText) => (
            <Call href={`tel:${phoneText}`}>
              <i className="fa fa-phone"></i> &nbsp;
              <span>
                <span>{phoneText}</span>
              </span>
            </Call>
          )}
        </ComponentFetcher>

        {/* <Gift
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
        )} */}
      </Rightcontent>
    </SearchNavContainer>
  );
};

const mapDispatchToProps = {
  addCategory: categoryOperations.addCategory,
  toggleShopByCategory: globalOperations.toggleShopByCategory,
};
export default connect(null, mapDispatchToProps)(SearchNav);

const SearchNavContainer = styled.div`
  height: 70px;
  background-color: #ff6000;
  display: flex;
  align-items: center;

  /* justify-content: space-between; */

  @media only screen and (max-width: 580px) {
    display: none;
  }
`;

const SearchNavContainerChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  position: absolute;
  top: 70px;
  left: 30%;
  width: 240px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin-top: 10px;
  /* background-color: #fff; */
  /* margin-left: 35px; */
  border-radius: 0;
  /* padding: 20px 10px 20px 10px; */
  /* border: 2px solid #f1f1f1; */
  z-index: 10;
  -webkit-transition: height 2s;
  transition: height 2s;
  -webkit-transition-timing-function: ease-in-out;
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
  width: 25%;
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

  width: 100%;
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
  background: #fff;
  position: absolute;
  width: 100%;

  & img {
    margin-right: 10px;
    border: 2px solid #f0f0f0;
    border-radius: 50%;
    padding: 3px;
    height: 40px;
    width: 40px;
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
  height: 58px;
  display: flex;
  flex: 1;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 0px 10px;
  margin: 0px 10px;

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
  padding-left: 30px;
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
  margin-right: 100px;

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;
const Call = styled.a`
  padding: 20px 0;
  margin-left: 20px;
  color: #fff !important;
  font-size: 18px;
  font-weight: 600;

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;
// const Gift = styled.div`
//   background-color: orange;
//   margin-left: 40px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   padding: 12px 10px;
//   color: #fff;
//   cursor: pointer;
// `;
// const GiftIcon = styled.div`
//   padding: 12px 10px;
//   @media only screen and (max-width: 980px) and (min-width: 750px) {
//     display: none;
//   }
// `;

// const GiftOffer = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-transform: uppercase;
//   justify-content: center;
//   align-items: center;
//   @media only screen and (max-width: 750px) {
//     display: none;
//   }
// `;

// const Giftcontent = styled.div`
//   position: absolute;
//   top: 70px;
//   right: 110px;
//   height: fit-content;
//   width: 250px;
//   background-color: #fff;
//   display: flex;
//   flex-direction: column;
//   border: 2px solid #f1f1f1;

//   border-radius: 0;
//   padding: 20px 10px 20px 20px;
//   z-index: 10;
// `;

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
// const GiftItem = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: start;
//   align-items: center;
//   margin-top: 12px;
//   padding-top: 12px;
//   border-top: 1px solid #f1f5f8;

//   & img {
//     height: 45px;
//     width: 45px;
//     background-color: #ffefe6;
//     padding: 7px;
//     border-radius: 100%;
//     margin-right: 12px !important;
//   }

//   & h5 {
//     padding-bottom: 2px;
//     font-weight: 700;
//     margin-bottom: 0;
//     font-size: 16px;
//   }
// `;
