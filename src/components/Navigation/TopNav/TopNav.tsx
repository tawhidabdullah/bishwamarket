// @ts-nocheck

import React from "react";
import styled from "styled-components";

// unify components
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
// import hooks
import { useQueryFetch } from "../../../hooks";

import facebook from "../../../assets/social/facebook.svg";
import insta from "../../../assets/social/instagram.svg";
import twitter from "../../../assets/social/twitter.svg";
import youtube from "../../../assets/social/youtube.svg";

const SocialIcon = ({ name, children }) => {
  const socialLInk = useQueryFetch("socialLink");

  return name ? children(socialLInk?.data?.[name]?.target) : <> </>;
};

const TopNav = (props) => {
  return (
    <TopNavContainer>
      <LeftNav />
      {/* <RightNav
        languageList={props.languageList}
        toggleLingual={props.toggleLingual}
        setToggleLingual={props.setToggleLingual}
        currencyList={props.currencyList}
        toggleCurrency={props.toggleCurrency}
        setToggleCurrency={props.setToggleCurrency}
      /> */}
      <SocialMediaContainer>
        <SocialIcon name="facebook">
          {(target) => {
            return (
              <a target="_blank" href={target}>
                <img
                  src={facebook}
                  style={{ width: "30px", marginRight: "10px" }}
                  alt=""
                />
              </a>
            );
          }}
        </SocialIcon>
        <SocialIcon name="youtube">
          {(target) => {
            return (
              <a target="_blank" href={target}>
                <img
                  src={youtube}
                  style={{ width: "30px", marginRight: "10px" }}
                  alt=""
                />
              </a>
            );
          }}
        </SocialIcon>

        <SocialIcon name="twitter">
          {(target) => {
            return (
              <a target="_blank" href={target}>
                <img
                  src={twitter}
                  style={{ width: "30px", marginRight: "10px" }}
                  alt=""
                />
              </a>
            );
          }}
        </SocialIcon>

        <SocialIcon name="instagram">
          {(target) => {
            return (
              <a target="_blank" href={target}>
                <img
                  src={insta}
                  style={{ width: "30px", marginRight: "" }}
                  alt=""
                />
              </a>
            );
          }}
        </SocialIcon>
      </SocialMediaContainer>
    </TopNavContainer>
  );
};

export default TopNav;

const TopNavContainer = styled.div`
  background: #5c2c90;
  padding: 13px 20px;
  width: 100%;
  display: flex;
`;

const SocialMediaContainer = styled.div`
  /* margin: 30px 0; */
  margin-left: auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 578px) {
    display: none;
  }
`;
