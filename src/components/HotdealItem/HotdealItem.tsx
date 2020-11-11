import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import html_parser from "html-react-parser";

// import redux ops
import { cartOperations } from "../../state/ducks/cart";

const HotdealItem = ({ offerProduct }) => {
  return (
    <HotDealContainer>
      <HotContainer>
        <div className="right-slick-img">
          <img src={offerProduct.image} />
        </div>
        <HotdealCenter>
          <div>
            <Text>{offerProduct.name}</Text>
            <PriceBox>
              {html_parser(offerProduct.description.substring(0, 150) || "")}

              <Price>
                <span>Regular Price: ৳ {offerProduct.price}</span> <br />
                <span>Offer Price: ৳ {offerProduct.offerPrice}</span>
              </Price>
            </PriceBox>
            <div>
              <span>
                <i className="fa fa-shopping-bag" />
              </span>
            </div>
          </div>
        </HotdealCenter>
      </HotContainer>
    </HotDealContainer>
  );
};

const mapDispatchToProps = {
  addToCart: cartOperations.addToCart,
};

export default connect()(HotdealItem);

const HotDealContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media only screen and (max-width: 580px) {
    width: 90%;
  }
`;

const HotDeal = styled.div`
  margin-bottom: 25px;

  & h5 {
    font-size: 18px;
    text-transform: uppercase;
    color: #444;
  }
  @media only screen and (max-width: 580px) {
    text-align: center;
  }
`;
const HotContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
`;

const HotdealCenter = styled.div`
  display: flex;

  align-items: start;
  justify-content: start;
  height: 100%;
  margin: 0 30px;
  width: 100%;

  @media only screen and (max-width: 580px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const HotRating = styled.div`
  line-height: 1;
  margin: 20px 10px;
  color: #ffa800;
`;
const Timer = styled.div`
  & p {
    line-height: 1.6;
    margin: 20px 10px;
    letter-spacing: 0.05em;
  }

  & span {
    display: inline-grid;
    background-color: transparent;
    text-align: center;
    font-weight: 700;
    color: #000;
    margin: 0 4px;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
    font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
    padding: 0;
  }
  & h5 {
    color: #444;
    text-transform: capitalize;
    letter-spacing: 0.05em;

    font-weight: 700;
    margin-bottom: 0;
    font-size: 16px;
  }
`;
const PriceBox = styled.div`
  line-height: 1.6;
  margin: 20px 10px;
  letter-spacing: 0.05em;
`;

const Price = styled.div`
  & p {
    margin: 20px 10px;
  }

  & span {
    font-size: 16px;
    color: #5a514b !important;
    font-weight: 700;
    margin-right: 10px;
    line-height: 1;
  }
`;

const Text = styled.div`
  color: #444;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  font-weight: bold;
  margin: 0 10px;
`;

const HotsideImage = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  & p {
    width: 100%;
    background-color: red;
  }
`;
