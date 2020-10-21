import React from 'react'
import styled from "styled-components"
import img1 from "../../assets/hotDeal/1.jpg";
const HotdealItem =()=> {
    return (
      <HotDealContainer>
        <HotDeal>
          <h5>today’s hot deal</h5>
        </HotDeal>

        <HotContain>
          <div className="right-slick-img" style={{ width: "100%" }}>
            <img src={img1} alt="hot-deal" className="img-fluid" />
          </div>
          <HotdealCenter>
            <div>
              <Timer>
                <p className="demo">
                  <span>
                    25
                    <span>days</span>
                  </span>
                  <span>:</span>
                  <span>
                    12
                    <span>hrs</span>
                  </span>
                  <span>:</span>
                  <span>
                    45
                    <span>min</span>
                  </span>
                  <span>:</span>
                  <span>
                    03
                    <span>sec</span>
                  </span>
                </p>
              </Timer>
              <HotRating>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </HotRating>
              <Text>
                <h5>simply dummy text of the printing</h5>
              </Text>
              <PriceBox>
                <p>it is a long established fact that a reader.</p>
                <Price>
                  <span>$45.00</span>
                  <span>$50.30</span>
                </Price>
              </PriceBox>
            </div>
          </HotdealCenter>
          {/* <h5>today’s hot deal</h5> */}
        </HotContain>
      </HotDealContainer>
    );
}
export default HotdealItem;


const HotDealContainer = styled.div`
  background-color: #f2f2f2;
`;

const HotDeal = styled.div`
  margin-bottom: 25px;

  & h5 {
    font-size: 18px;
    text-transform: uppercase;
    color: #444;
  }
`;
const HotContain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const HotdealCenter = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: start;
  justify-content: start;
  height: 100%;
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
  margin: 20px 10px;
`;