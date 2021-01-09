import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { createTrue } from "typescript";
import { categoryOperations } from "../../state/ducks/category";

// import utils
import { addFilterToStorage } from "../../utils";

const ImageBannerCategoryItem = ({ category }) => {
  const history = useHistory();
  const [showMore, setShowMore] = useState(false);

  const handleDisplayMoreClick = () => {
    setShowMore(!showMore);
  };

  const globalState = useSelector((state) => state.globalState);
  if (globalState.openShopByCategory) {
    return (
      <CategoryItem>
        <ul className="nav-cat title-font">
          {category.slice(0, 9).map((cat, it) => {
            return (
              <div className="topCategory">
                <li
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  key={it}
                  onClick={() =>
                    addFilterToStorage({ category: cat.id }, () => {
                      history.push("/product");
                    })
                  }
                >
                  <div>
                    <img src={cat.icon || cat.cover} />

                    <SubCategoryItem>{cat.name}</SubCategoryItem>
                  </div>
                  {cat.subCategory && cat.subCategory.length > 0 && (
                    <span className="dropdownArrow ">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  )}
                </li>
                <div className="dropdown-container">
                  {cat.subCategory &&
                    cat.subCategory.length > 0 &&
                    cat.subCategory.map((sub) => {
                      return (
                        <SubCategoryItem
                          // onClick={(e) => {
                          //   e.preventDefault();
                          //   sub.url &&
                          //     history.push({
                          //       pathname: `/category/${sub.url.replace(
                          //         "/category/",
                          //         ""
                          //       )}`,
                          //       state: {
                          //         catId: sub.id,
                          //       },
                          //     });
                          //   // closeSidebar();
                          //   // closeBackdrop();
                          // }}
                          onClick={() =>
                            addFilterToStorage({ category: sub.id }, () => {
                              history.push("/product");
                            })
                          }
                          className="dropdownBtn"
                          href="#"
                        >
                          <div className="sideDrawer2__categoryItem">
                            {/* <div className="d-flex align-items-center ml-2">
                              
                            </div> */}
                            <div className="sideDrawer2__categoryItem-cover">
                              <img src={sub.cover || sub.icon} alt="" />
                            </div>
                            <span className="sideDrawer2__categoryItem__subtitle">
                              {sub.name}{" "}
                            </span>
                            {/* <span className="dropdownArrow "><i className="fas fa-angle-down"></i></span> */}
                          </div>
                        </SubCategoryItem>
                      );
                    })}

                  {/* <a ref={dropRef2} onClick={() => handleClick(dropRef2)} className="dropdownBtn" href="#">Hew Sayed</a> */}
                  {/* <div className="dropdown-container">
                    {item.subCategory && item.subCategory.length > 0 && item.subCategory.map(sub => {
                        return <a href="">{sub.name}</a>
                    })}

                </div> */}
                  {/* <a href="">Sayed</a> */}
                </div>
              </div>
            );
          })}

          <li
            style={{
              cursor: "pointer",
              display: showMore ? "none" : "block",
              marginTop: "-10px",
              fontWeight: 600,
            }}
          >
            <a onClick={handleDisplayMoreClick} className="mor-slide-click">
              more category <i className="fa fa-angle-down pro-down"></i>
              <i
                className="fa fa-angle-up pro-up"
                style={{ display: "none" }}
              ></i>
            </a>
          </li>
          <div
            className="imageBannerCategoryItem"
            style={{
              display: showMore ? "block" : "none",
              visibility: showMore ? "visible" : "hidden",
              cursor: "pointer",
              opacity: showMore ? "1" : "0.2",
            }}
          >
            {category.slice(9).map((cat, it) => {
              return (
                <Fragment key={it}>
                  <li
                    style={{ transition: "all 3s" }}
                    // key={it}
                    onClick={() =>
                      addFilterToStorage({ category: cat.id }, () => {
                        history.push("/product");
                      })
                    }
                  >
                    <img src={cat.icon || cat.cover} />

                    <a>{cat.name}</a>
                  </li>
                </Fragment>
              );
            })}
            <li
              style={{
                cursor: "pointer",
                display: showMore ? "block" : "none",
              }}
            >
              <a onClick={handleDisplayMoreClick} className="mor-slide-click">
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
    );
  } else {
    return null;
  }
};

export default ImageBannerCategoryItem;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background: #fff;
  position: absolute;
  width: 100%;
  z-index: 500;

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
    &:hover a {
      color: #5c2c90 !important;
    }
    &:hover img {
      border: 2px solid #5c2c90;
    }
  }

  & a {
    color: #444 !important;
    text-decoration: none !important;
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: 0.03em;
  }
`;

//style is already in the parent

const SubCategoryItem = styled.a`
  /* text-decoration: none !important;
  border: 1px solid red; */
`;
