import React from "react";
import styled from "styled-components";

// import dummy image
import Logo from "../../../assets/logo.png";

// import config 
import config from "../../../config.json";



// import Component fetcher component
import ComponentFetcher from "../../ComponentFetcher";




const CompanyBanner = () => {
  return (
      <ComponentFetcher type='text' apiMapKey='aboutText'>
      {(aboutText) => (
            <CompanyBannerWrapper>
            <CompanyBannerContainer>
              <CompanyBannerItem>
                <CompanyLogoImageWrapper>
                  <img src={`${config.baseURL}/images/logo.png`} alt="" />
                </CompanyLogoImageWrapper>
              </CompanyBannerItem>
              <CompanyBannerItem>
               {aboutText}
              </CompanyBannerItem>
            </CompanyBannerContainer>
          </CompanyBannerWrapper>
      )}
    </ComponentFetcher>
  );
};

export default CompanyBanner;

const CompanyBannerWrapper = styled.section`
  width: 100%;
  background: white;
  font-family: PT Sans, sans-serif;
  color: #777;
`;


const CompanyLogoImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 30px !important;

  
  & img {
    width: 100%; 
    height: 100%;
    object-fit: contain;
  }
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
    text-align: center;

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
