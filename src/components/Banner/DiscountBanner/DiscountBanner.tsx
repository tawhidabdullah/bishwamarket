import React from 'react'
import styled from "styled-components";
const  DiscountBanner=() =>{
    return (
      
        <BannerContainer>
          <ContentRow>
            <div>
              <h2>Special discout Offer for you</h2>
            </div>
            <h1>
              every <span> discount </span> we{" "}
              <span> offer is the best in market!</span>
            </h1>

            <div className="rounded-contain">
              <div className="rounded-subcontain">
                don't just scroll, your friends have already started buying!
              </div>
            </div>
          </ContentRow>
        </BannerContainer>
  
    );
}


export default DiscountBanner;



const BannerContainer = styled.div`
  width: 100%;
  padding: 30px 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const ContentRow = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320)));
    text-transform: capitalize;
    margin-bottom: 3px;
    margin-top: -5px;
    color:gray;
  }

  & h1 {
    font-size: calc(18px + (42 - 18) * ((100vw - 320px) / (1920 - 320)));
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #444;
  }

  & .rounded-contain {
    border: 2px dashed #ffa800;
    border-radius: 50px;
    padding: 5px;
  }

  & .rounded-subcontain {
    background-color: #ff6000;
    color: #fff;
    text-transform: uppercase;
    padding: 22px;
    font-weight: 600;
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
    letter-spacing: 0.08em;
    line-height: 1;
    border-radius: 50px;
  }

  & span {
    color: #ffa800;
    font-weight: 700;
  }
`;