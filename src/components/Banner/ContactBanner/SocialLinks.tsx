import React from "react";
import styled from "styled-components";

// import dummy image
import PlayStoreImage from "../../../assets/banner/playstore.png";
import AppleStoreImage from "../../../assets/banner/appleStore.png";

// import component fetcher component
import ComponentFetcher from "../../ComponentFetcher";

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <div>
        <ComponentFetcher type="linkList" apiMapKey="appStoresLink">
          {(links) => (
            <>
              {links["google"] && (
                <SocialLinksItem
                  href={links["google"]["target"]}
                  target="_open"
                >
                  <img src={PlayStoreImage} alt="" />
                </SocialLinksItem>
              )}

              {links["apple"] && (
                <SocialLinksItem href={links["apple"]["target"]} target="_open">
                  <img src={AppleStoreImage} alt="" />
                </SocialLinksItem>
              )}
            </>
          )}
        </ComponentFetcher>
      </div>

      <ComponentFetcher type="linkList" apiMapKey="socialLInk">
        {(links) => (
          <ExternalLinkContainer>
            <FollowUsText>Follow Us</FollowUsText>

            {links["facebook"] && (
              <ExternalLinkItem
                href={links["facebook"]["target"]}
                target="_open"
              >
                <i className="fa fa-facebook"></i>
              </ExternalLinkItem>
            )}

            {links["instagram"] && (
              <ExternalLinkItem
                href={links["instagram"]["target"]}
                target="_open"
              >
                <i className="fa fa-instagram"></i>
              </ExternalLinkItem>
            )}

            {links["twitter"] && (
              <ExternalLinkItem
                href={links["twitter"]["target"]}
                target="_open"
              >
                <i className="fa fa-twitter"></i>
              </ExternalLinkItem>
            )}

            {links["youtube"] && (
              <ExternalLinkItem
                href={links["youtube"]["target"]}
                target="_open"
              >
                <i className="fa fa-youtube"></i>
              </ExternalLinkItem>
            )}
          </ExternalLinkContainer>
        )}
      </ComponentFetcher>
    </SocialLinksContainer>
  );
};

export default SocialLinks;

const FollowUsText = styled.span`
  display: inline-block;
  font-weight: 600;
  margin-right: 25px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

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

const SocialLinksItem = styled.a`
  padding: 15px 10px;
`;

const ExternalLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;

  span {
    @media screen and (max-width: 991px) {
      display: none;
      margin-top: 15px;
    }
  }
`;

const ExternalLinkItem = styled.a`
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
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;

    :hover {
      border-radius: 50%;
      background-color: #5c2c90;
      color: ghostwhite;
    }
  }

  @media screen and (max-width: 991px) {
    margin-top: 20px;
  }
`;
