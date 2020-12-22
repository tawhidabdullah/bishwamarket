import React from "react";
import styled from "styled-components";
import MediaBannerProductCard from "./MediaBannerProductCard";

const MediaBanner = ({ product }) => {
  return (
    <MediaBannercontainer>
      {product &&
        product.map((item, idx: any) => {
          return <MediaBannerProductCard key={idx} product={item} />;
        })}

      {/* <MediaBannerBox>
        <div className="media-view">
          <h5>View More</h5>
        </div>
      </MediaBannerBox> */}
    </MediaBannercontainer>
  );
};

const MediaBannercontainer = styled.div`
  background-color: #f2f2f2;
  /* ${(props) => props.customStyle} */
`;

export default MediaBanner;
