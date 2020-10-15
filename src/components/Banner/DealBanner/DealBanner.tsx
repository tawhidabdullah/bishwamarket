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
  background-color: #ff6000;
  padding: 40px 0;
  display:flex;
  justify-content:space-around;
  align-items:center;
`;

const BannerContaine = styled.div`
  & h2 {
    font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320)));
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 5px;
  }
  & h1 {
    font-size: calc(16px + (40 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.5px;
  }

  & a {
    font-size: 14px;
    padding: 16px 45px;
    font-weight: 700;
    color: #444 !important;
    background-color: #fff;
    border-radius: 25px;
    position: relative;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    display: inline-block;
    line-height: 1;
    letter-spacing: 0.05em;
  }
`;

const Button = styled.div`
`;