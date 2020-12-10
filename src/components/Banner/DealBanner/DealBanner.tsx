import React from "react";
import styled from "styled-components";
const DealBanner = () => {
  return (
    <Section>
      <BannerContaine>
        <h2>save up to 30% to 40% off</h2>
        <h1>omg! just look at the great deals!</h1>
      </BannerContaine>
      <BannerContaine>
        <Button>
          <a className="btn-white">View more</a>
        </Button>
      </BannerContaine>
    </Section>
  );
};

export default DealBanner;
const Section = styled.div`
  height: 120px;
  background-color: #5c2c90;
  padding: 40px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BannerContaine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320)));
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 5px;
  }
  & h1 {
    font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.5px;
  }

  & a {
    font-size: calc(12px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
    padding: 16px 45px;
    font-weight: 700;
    color: #444 !important;
    background-color: #fff;
    border-radius: 25px;
    width: 400px;
    text-decoration: none;

    line-height: 1;

    @media only screen and (max-width: 900px) and (min-width: 581px) {
      padding: 8px 25px;
      font-size: 8px;
      width: 120px;
      text-align: center;
    }
    @media only screen and (max-width: 580px) {
      padding: 8px 25px;
      font-size: 8px;
      width: 100px;
      text-align: center;
    }

    &:hover {
      background-color: black;
      color: ghostwhite !important;
    }
  }
`;

const Button = styled.div``;
