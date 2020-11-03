import React from 'react'
import styled from "styled-components";
import image1 from "../../assets/banner/1.jpg";
import image from "../../assets/collection/3.jpg";
const CollectionItem = ({ item,customStyles,...props}) => {
  return (
    <Item
 
    >
      {/* <div className="collection-banner-main p-left">
        <div className="collection-banner-contain">
          <div>
            <h3>vivo</h3>
            <h4>smart phone </h4>
            <div className="shop">
              <a>
                shop now
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}
<img src={item.src} />
    </Item>
  );
};


export default CollectionItem;

const Item = styled.div`


&img{
  height:100%;
  width:100%;
  object-fit:fill;
}

  /* background-size: 100% 100%;
  background-repeat: no-repeat;
  object-fit: fill;
  display: flex;

  align-items: center;
  padding-left: 10px;
  margin: 10px;
  ${(props) => props.customStyles}; */
/* 
  transition: all 0.5s; */

  /* & h3 {
    color: #ff6000;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 8px;
  }
  & h4 {
    color: #444;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1;
  }

  & .shop {
    margin-top: 13px;
  }

  & .shop a {
    text-transform: capitalize;
    color: #ffa800;
    font-weight: 700;
  }

  & .shop a i {
    margin-left: 8px;
  }

  &:hover {
    /* transform: scale(1.2);
    overflow:hidden; */
  } */
`;