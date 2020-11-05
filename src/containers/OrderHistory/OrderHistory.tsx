//@ts-nocheck
import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// import OrderHistory item
// import { OrderHistoryItem } from "../../components/OrderHistoryItem";

// import drawer button
import { DrawerButton } from "../../components/common/Button/DrawerButton";

// hooks for fetching order history
import { useHandleFetch } from "../../hooks";

//TODO must refactor this ugly piece of shit

const OrderHistory = () => {
  const history = useHistory();

  // this hook gets current user order history
  const [orderHistoryState, handleOrderHistoryFetch] = useHandleFetch(
    {},
    "getCurrentUserOrders"
  );

  useEffect(() => {
    const fetchOrderHistory = async () => {
      await handleOrderHistoryFetch({});
    };

    fetchOrderHistory();
  }, []);

  console.log("order history state", orderHistoryState);

  return (
    <OrderHistoryContainer>
      <InnerContainer>
        <Row>
          <Col sm={12}>
            <CustomTable responsive="xs">
              <thead>
                <tr>
                  <TableHeader scope="col">Order CODE</TableHeader>
                  <TableHeader scope="col">DESCRIPTION</TableHeader>
                  <TableHeader scope="col">PRICE</TableHeader>
                  <TableHeader scope="col">STATUS</TableHeader>
                </tr>
              </thead>
              <tbody>
                {orderHistoryState.done &&
                  orderHistoryState.data &&
                  orderHistoryState.data["data"].length > 0 &&
                  orderHistoryState.data["data"].map((order) => (
                    <tr>
                      <TableDataContainer
                        onClick={() =>
                          history.push(`/order-success/${order.id}`)
                        }
                      >
                        <strong style={{ cursor: "pointer" }}>
                          {order.shortCode}
                        </strong>
                      </TableDataContainer>

                      <TableDataContainer
                        onClick={() =>
                          history.push(`/order-success/${order.id}`)
                        }
                      >
                        <TableData>
                          <TableText customStyle={{ "font-weight": "bold" }}>
                            Ordered:{" "}
                            {new Date(order.date_created).toDateString()})
                          </TableText>
                          <TableText>Orderer by: {order.name}</TableText>
                        </TableData>

                        <MobileRow>
                          <TableText customStyle={{ color: "#000" }}>
                            Total Price: ${order.totalPrice}
                          </TableText>

                          <TableText>
                            <strong>{order.status} </strong>(
                            {new Date(order.date_created).toDateString()})
                          </TableText>
                        </MobileRow>
                      </TableDataContainer>

                      <TableDataContainer>
                        <TableText
                          customStyle={{ "font-size": "22px", color: "#000" }}
                        >
                          ${order.totalPrice}
                        </TableText>
                      </TableDataContainer>

                      <TableDataContainer>
                        <TableText>
                          <strong>{order.status} </strong>
                        </TableText>
                      </TableDataContainer>
                    </tr>
                  ))}
              </tbody>
            </CustomTable>
          </Col>
        </Row>
        <ButtonContainer>
          <DrawerButton customStyle={{ "font-weight": "bold" }}>
            Show All Orders
          </DrawerButton>
        </ButtonContainer>
      </InnerContainer>
    </OrderHistoryContainer>
  );
};

export default OrderHistory;

const MobileRow = styled.div`
  display: none;
  /* margin-top: 10px; */
  justify-content: center;
  flex-direction: column;

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
  align-items: center;
  width: 20%;
  margin-left: auto;

  & div button {
    padding: 8px 0;
  }

  @media screen and (max-width: 768px) {
    width: 30%;
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

const TableData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  ${(props) => props.customStyle}
`;

const TableText = styled.p`
  color: #777;
  font-weight: 400;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
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

const OrderHistoryContainer = styled.div`
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
