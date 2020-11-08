import React, { useState } from 'react'; 
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { createTrue } from 'typescript';

// import utils
import { addFilterToStorage } from "../../utils";

const ImageBannerCategoryItem = ({category}) => {
    const history = useHistory(); 
    const [showMore, setShowMore]= useState(false);
    const handleDisplayMoreClick= ()=> {
      setShowMore(!showMore);
    }
    return (
      <CategoryItem>
      <ul style={{marginBottom: "0 !important"}} className="nav-cat title-font">
        {category.slice(0, 6).map((cat, it) => {
          return (
            <li key={it} onClick={() => addFilterToStorage({'category': cat.id},() => {
              history.push('/product')
            })}>
              <img src={cat.thumbnail || cat.cover} />
  
              <a>{cat.name}</a>
            </li>
          );
        })}
  
        <li >
          <a
          onClick={handleDisplayMoreClick}
           className="mor-slide-click">
            more category <i className="fa fa-angle-down pro-down"></i>
            <i
              className="fa fa-angle-up pro-up"
              style={{ display: "none" }}
            ></i>
          </a>
        </li>

          {category.slice(6).map((cat, it) => {
            return (
              <div style={{display: showMore? "block" : 'none'}}>
                <li key={it} onClick={() => addFilterToStorage({ 'category': cat.id }, () => {
                  history.push('/product')
                })}>
                  <img src={cat.thumbnail || cat.cover} />

                  <a>{cat.name}</a>
                </li>
              </div>
            );
          })}
        </ul>
    </CategoryItem>
    )
  }
  

  export default ImageBannerCategoryItem; 

  const CategoryItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background: #fff;

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
