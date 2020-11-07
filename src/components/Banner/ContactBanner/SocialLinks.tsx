import React from "react";
import styled from "styled-components";

// import dummy image
import PlayStoreImage from "../../../assets/banner/playstore.png";
import AppleStoreImage from "../../../assets/banner/appleStore.png";

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <div>
        <SocialLinksItem>
          <img src={PlayStoreImage} alt="" />
        </SocialLinksItem>

        <SocialLinksItem>
          <img src={AppleStoreImage} alt="" />
        </SocialLinksItem>
      </div>

      <ExternalLinkContainer>
        <ExternalLinkItem>Follow Us</ExternalLinkItem>
        <ExternalLinkItem>
          <i className="fa fa-facebook"></i>
        </ExternalLinkItem>

        <ExternalLinkItem>
          <i className="fa fa-google-plus"></i>
        </ExternalLinkItem>

        <ExternalLinkItem>
          <i className="fa fa-twitter"></i>
        </ExternalLinkItem>

        <ExternalLinkItem>
          <i className="fa fa-instagram"></i>
        </ExternalLinkItem>

        <ExternalLinkItem>
          <i className="fa fa-rss"></i>
        </ExternalLinkItem>
      </ExternalLinkContainer>
    </SocialLinksContainer>
  );
};

export default SocialLinks;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 40px 0;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const SocialLinksItem = styled.span`
  padding: 15px 10px;
`;

const ExternalLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;

const ExternalLinkItem = styled.span`
  :first-child {
    padding: 0 20px;
  }

  :not(:first-child) {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    background-color: #f7f7f7;
    transition: all 0.3s ease;
    cursor: pointer;

    :hover {
      border-radius: 50%;
      background-color: #ffa800;
      color: ghostwhite;
    }
  }
`;
