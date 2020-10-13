import React from "react";
import styled from "styled-components";
import slider1 from "../../assets/1.1.png";
import image from "../../assets/banner/1.jpg";
import image2 from "../../assets/1.png"
const  ImageBanner=()=> {
    return (
      <NavigationContainer>
      

        <Content>
          <GiftItem>
            <div>
              <img src={image2} alt="image" />
            </div>
            <div>
              <h5>title </h5>
              <p>10 taka per product</p>
            </div>
          </GiftItem>
        </Content>

        <SliderBanner>
          <SliderImage>
            <ul className="layout2-slide-1">
              <li
                id="img-1"
                style={{ transform: "translateX(1.9%) translateY(0.02%)" }}
              >
                <img src={slider1} className="img-fluid" alt="slider" />
              </li>
            </ul>
          </SliderImage>
          <SliderBannercontent>
            <div>
              <h4>the best</h4>
              <h1>loffer shoes</h1>
              <h2>minimum 30% off</h2>
              <a className="btn btn-rounded">Shop Now</a>
            </div>
          </SliderBannercontent>
        </SliderBanner>

        <BottomImage>
          <Item>
            <div className="collection-banner-main p-left">
              <div className="collection-banner-contain">
                <div>
                  <h3>vivo</h3>
                  <h4>smart phone</h4>
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
          <Item>
            <div className="collection-banner-main p-left">
              <div className="collection-banner-contain">
                <div>
                  <h3>vivo</h3>
                  <h4>smart phone</h4>
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

          <Item>
            <div className="collection-banner-main p-left">
              <div className="collection-banner-contain">
                <div>
                  <h3>vivo</h3>
                  <h4>smart phone</h4>
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
        </BottomImage>
      </NavigationContainer>
    );
}


const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 10fr;
  grid-auto-rows: minmax(200px, auto);
  justify-content: center;
  background-color:gray;
`;

const Content = styled.div`

display: grid;
  grid-row: 1/ 3;
  width: 250px;
  height:2px;
  background-color: #fff;
  

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


const SliderBanner = styled.div`
  position: relative;
  background-color: #eddbd1;
  margin-top:10px;

`;
const SliderImage = styled.div`
  height: 455px;
  


`;
const SliderBannercontent = styled.div`
  position: absolute;
  top: 0;
  right:0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
 
  padding: 0 100px;
`;




const BottomImage = styled.div`
 
  margin-top: 10px;
  display: grid;
  
  grid-gap:10px;
  grid-template-columns: 2fr 2fr 1fr;
  margin-right:30px;
`;

const Item = styled.div`
  background-color: red;
 
  background-image: url(${image});
  background-size: cover;
  background-position: center center;
  display: flex;
 
  align-items: center;
  padding-left:10px;
  
  & h3 {
    color: #ff6000;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 1;
    margin-bottom: 8px;
  }
  & h4 {
    color: #444;
    font-size: 30px;
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

export default ImageBanner;

