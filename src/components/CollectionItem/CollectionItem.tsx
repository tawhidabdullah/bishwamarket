import React from 'react'
import styled from "styled-components";
import image1 from "../../assets/banner/1.jpg";
import image from "../../assets/collection/3.jpg";
const CollectionItem = ({ customStyles}) => {
  return (
    <Item
      style={{ backgroundImage: `url(${image})` }}
      customStyles={customStyles}
    >
      <div className="collection-banner-main p-left">
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
      </div>
    </Item>
  );
};


export default CollectionItem;

const Item = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  object-fit:fill;
  display: flex;

  align-items: center;
  padding-left: 10px;
  margin: 10px;
  ${(props) => props.customStyles};

  & h3 {
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
`;