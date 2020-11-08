import React from "react";
import styled from "styled-components"
import image1 from "../../../assets/media/1.jpg"
import image2 from "../../../assets/media/2.jpg";
const MediaBanner = () => {
  return (
    <MediaBannercontainer>
      <MediaBannerBox>
        <div className="media-heading">
          <h5>New Products</h5>
        </div>
      </MediaBannerBox>
      <MediaBannerBox>
        <Media>
          <img src={image1} className="img-fluid" alt="banner" />
          <MediaBody>
            <MediaContent>
              <div>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>Generator on Internet.</p>
                <h6>&#2547;&nbsp;153.00</h6>
              </div>
            </MediaContent>
          </MediaBody>
        </Media>
      </MediaBannerBox>

      <MediaBannerBox>
        <Media>
          <img src={image2} className="img-fluid  " alt="banner" />
          <MediaBody>
            <MediaContent>
              <div>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>Generator on Internet.</p>
                <h6>&#2547;&nbsp;153.00</h6>
              </div>
            </MediaContent>
          </MediaBody>
        </Media>
      </MediaBannerBox>

      <MediaBannerBox>
        <div className="media-view">
          <h5>View More</h5>
        </div>
      </MediaBannerBox>
    </MediaBannercontainer>
  );
};

export default MediaBanner;

const MediaBannercontainer = styled.div`
  
  background-color: #f2f2f2;
`;
const MediaBannerBox = styled.div`
  margin-bottom: 20px;

  & h5 {
    font-size: 16px;
    color: #444;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.5px;
  }
`;

const Media = styled.div`
  display: flex;

  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  
`;

const MediaBody = styled.div`
  flex: 1;
`;
const MediaContent = styled.div`
  margin-left: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100px;

  & i {
    color: #ffa800;
  }
  & p {
    font-family: Raleway, sans-serif;
    font-size: 14px;
    margin-bottom: 0;
  }
  & h6 {
    color: #ff6000;
    font-weight: 700;
    margin-top: 3px;
    font-size: 14px;
    margin-bottom: 0;
  }
`;