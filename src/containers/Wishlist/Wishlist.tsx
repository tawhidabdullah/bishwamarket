//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { Row, Col, Table } from "react-bootstrap";

// import wishlist item
// import { WishlistItem } from "../../components/WishlistItem";

// import drawer button
import { DrawerButton } from "../../components/common/Button/DrawerButton";

// import dummy images
import image1 from "../../assets/wishlist/image1.jpg";

//TODO must refactor this ugly piece of shit

const Wishlist = () => {
  return (
    <WishlistContainer>
      <InnerContainer>
        <Row>
          <Col sm={12}>
            <CustomTable responsive="xs">
              <thead>
                <tr>
                  <TableHeader scope="col">IMAGE</TableHeader>
                  <TableHeader scope="col">PRODUCT NAME</TableHeader>
                  <TableHeader scope="col">PRICE</TableHeader>
                  <TableHeader scope="col">AVAILABILITY</TableHeader>
                  <TableHeader scope="col">ACTION</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TableDataContainer>
                    <img src={image1} alt="" />
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText customStyle={{ cursor: "pointer" }}>
                      Cotton Shirt
                    </TableText>

                    <MobileRow>
                      <TableText>In Stock</TableText>
                      <TableText>&#2547;&nbsp;250.15</TableText>
                      <TableText>
                        <ActionContainer
                          customStyle={{
                            "flex-direction": "column",
                            "margin-top": "-10px",
                          }}
                        >
                          <ActionButton>&#10005;</ActionButton>
                          <ActionButton>
                            <i className="fa fa-shopping-cart"></i>
                          </ActionButton>
                        </ActionContainer>
                      </TableText>
                    </MobileRow>
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText
                      customStyle={{ "font-size": "22px", color: "#000" }}
                    >
                      &#2547;&nbsp;250.15
                    </TableText>
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText>In Stock</TableText>
                  </TableDataContainer>

                  <TableDataContainer>
                    <ActionContainer>
                      <ActionButton>&#10005;</ActionButton>
                      <ActionButton>
                        <i className="fa fa-shopping-cart"></i>
                      </ActionButton>
                    </ActionContainer>
                  </TableDataContainer>
                </tr>

                <tr>
                  <TableDataContainer>
                    <img src={image1} alt="" />
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText customStyle={{ cursor: "pointer" }}>
                      Cotton Shirt
                    </TableText>

                    <MobileRow>
                      <TableText>In Stock</TableText>
                      <TableText>&#2547;&nbsp;250.15</TableText>
                      <TableText>
                        <ActionContainer
                          customStyle={{
                            "flex-direction": "column",
                            "margin-top": "-10px",
                          }}
                        >
                          <ActionButton>&#10005;</ActionButton>
                          <ActionButton>
                            <i className="fa fa-shopping-cart"></i>
                          </ActionButton>
                        </ActionContainer>
                      </TableText>
                    </MobileRow>
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText
                      customStyle={{ "font-size": "22px", color: "#000" }}
                    >
                      &#2547;&nbsp;250.15
                    </TableText>
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText>In Stock</TableText>
                  </TableDataContainer>

                  <TableDataContainer>
                    <ActionContainer>
                      <ActionButton>&#10005;</ActionButton>
                      <ActionButton>
                        <i className="fa fa-shopping-cart"></i>
                      </ActionButton>
                    </ActionContainer>
                  </TableDataContainer>
                </tr>

                <tr>
                  <TableDataContainer>
                    <img src={image1} alt="" />
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText customStyle={{ cursor: "pointer" }}>
                      Cotton Shirt
                    </TableText>
                    <MobileRow>
                      <TableText>In Stock</TableText>
                      <TableText>&#2547;&nbsp;250.15</TableText>
                      <TableText>
                        <ActionContainer
                          customStyle={{
                            "flex-direction": "column",
                            "margin-top": "-10px",
                          }}
                        >
                          <ActionButton>&#10005;</ActionButton>
                          <ActionButton>
                            <i className="fa fa-shopping-cart"></i>
                          </ActionButton>
                        </ActionContainer>
                      </TableText>
                    </MobileRow>
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText
                      customStyle={{
                        "font-size": "22px",
                        color: "#000",
                      }}
                    >
                      &#2547;&nbsp;250.15
                    </TableText>
                  </TableDataContainer>

                  <TableDataContainer>
                    <TableText>In Stock</TableText>
                  </TableDataContainer>

                  <TableDataContainer>
                    <ActionContainer>
                      <ActionButton>&#10005;</ActionButton>
                      <ActionButton>
                        <i className="fa fa-shopping-cart"></i>
                      </ActionButton>
                    </ActionContainer>
                  </TableDataContainer>
                </tr>
              </tbody>
            </CustomTable>
          </Col>
        </Row>
        <ButtonContainer>
          <DrawerButton wrapperStyle={{ "margin-right": "10px" }}>
            Continue Shopping
          </DrawerButton>
          <DrawerButton wrapperStyle={{ "margin-left": "10px" }}>
            Checkout
          </DrawerButton>
        </ButtonContainer>
      </InnerContainer>
    </WishlistContainer>
  );
};

export default Wishlist;

const MobileRow = styled.div`
  display: none;
  margin-top: 10px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;

    & p {
      padding: 0 10px;
    }

    & p:nth-child(2) {
      color: #000;
    }
  }
`;

const ButtonContainer = styled.div`
  padding-top: 35px;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin-left: auto;

  @media screen and (max-width: 991px) {
    width: 50%;

    & div button {
      padding: 8px 0;
    }
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
    flex-direction: column;
    margin: unset;
    margin: 0 auto;

    & div {
      margin: unset;
    }
  }
`;

const TableDataContainer = styled.td`
  /* min-width: 210px; */
  vertical-align: middle;
  color: #444;
  text-align: center;
  font-family: PT Sans, sans-serif;

  & img {
    height: 90px;
  }

  @media screen and (max-width: 768px) {
    :nth-child(n + 3) {
      display: none;
    }
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.customStyle}
`;

const ActionButton = styled.span`
  padding: 0 5px;
  cursor: pointer;
  color: #000;
`;

const TableText = styled.p`
  color: #777;
  font-weight: 400;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  text-transform: capitalize;
  margin-bottom: 0;

  ${(props) => props.customStyle}
`;

const TableHeader = styled.th`
  font-weight: 900;
  color: #333;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  padding: 0 0.75rem 0.75rem 0.75rem;
  letter-spacing: 0.05em;
  line-height: 1;
`;

const CustomTable = styled(Table)`
  & thead th {
    border: 0;
    border-bottom: 1px solid #dee2e6;
  }

  & td {
    vertical-align: unset;
  }

  @media screen and (max-width: 768px) {
    & td {
      vertical-align: top;
    }

    & thead th:nth-child(n + 3) {
      display: none;
    }
  }
`;

const WishlistContainer = styled.div`
  background-color: #f9f9f9 !important;
  padding: 50px 0;
`;

const InnerContainer = styled.div`
  @media screen and (max-width: 1470px) {
    max-width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;
