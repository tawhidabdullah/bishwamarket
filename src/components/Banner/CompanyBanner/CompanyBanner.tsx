import React from "react";
import styled from "styled-components";

// import dummy image
import Logo from "../../../assets/logo.png";

const CompanyBanner = () => {
  return (
    <CompanyBannerWrapper>
      <CompanyBannerContainer>
        <CompanyBannerItem>
          <img src={Logo} alt="" />
        </CompanyBannerItem>
        <CompanyBannerItem>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution.
        </CompanyBannerItem>
      </CompanyBannerContainer>
    </CompanyBannerWrapper>
  );
};

export default CompanyBanner;

const CompanyBannerWrapper = styled.section`
  width: 100%;
  background: white;
  font-family: PT Sans, sans-serif;
  color: #777;
`;

const CompanyBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 85vw;
  padding: 35px 0;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    width: 75vw;

    & div {
      padding: 8px 0;
    }

    & div:first-child {
      border-right: none;
      margin-right: 0;

      & img {
        margin-right: 0;
      }
    }
  }
`;

const CompanyBannerItem = styled.div`
  font-size: 14px;
  letter-spacing: 0.8px;
  line-height: 1.8;

  :first-child {
    border-right: 1px solid #ddd;
    margin-right: 50px;

    & img {
      margin-right: 50px;
    }
  }
`;
