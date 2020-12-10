import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const DiscountBanner = () => {
  return (
    <DiscountBannerContainer>
      <Container>
        <Row>
          <Col md={12}>
            <InnerContainer>
              <OfferText>Special Discout Offer For You</OfferText>
              <DiscountText>
                EVERY <span>DISCOUNT</span> DISCOUNT WE{" "}
                <span> OFFER IS THE BEST IN MARKET!</span>
              </DiscountText>

              <RoundButtonContainer>
                <RoundedButton>
                  DON'T JUST SCROLL, YOUR FRIENDS HAVE ALREADY STARTED BUYING!
                </RoundedButton>
              </RoundButtonContainer>
            </InnerContainer>
          </Col>
        </Row>
      </Container>
    </DiscountBannerContainer>
  );
};

export default DiscountBanner;

const DiscountBannerContainer = styled.div`
  background-color: #fff;
`;

const InnerContainer = styled.div`
  padding: 47px 0;
  text-align: center;
`;

const OfferText = styled.h2`
  font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320)));
  text-transform: capitalize;
  margin-bottom: 3px;
  margin-top: -5px;
  color: rgb(119, 119, 119);
`;

const DiscountText = styled.h1`
  font-size: calc(18px + (42 - 18) * ((100vw - 320px) / (1920 - 320)));
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #444;

  & span:first-child {
    color: #5c2c90;
  }

  & span:nth-child(2) {
    color: #ffa800;
    font-weight: 700;
  }
`;

const RoundButtonContainer = styled.div`
  border: 2px dashed #ffa800;
  border-radius: 50px;
  padding: 5px;
`;

const RoundedButton = styled.div`
  background-color: #5c2c90;
  color: #fff;
  text-transform: uppercase;
  padding: 18px 0;
  font-weight: 600;
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
  letter-spacing: 0.08em;
  line-height: 1;
  border-radius: 50px;
`;
