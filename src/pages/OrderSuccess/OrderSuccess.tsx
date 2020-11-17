//@ts-nocheck
import React, { useEffect, useState, Fragment } from "react";
import { useAlert } from "react-alert";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

// import component
import { OrderSuccessMessage } from "../../components/OrderSuccessMessage";
import { OrderDetails } from "../../containers/OrderDetails";
import { OrderInfo } from "../../containers/OrderInfo";

// import loader
import SpinnerHOC from "../../components/Spinner/SpinnerHOC";

// hook
import { useHandleFetch } from "../../hooks";

const OrderSuccess = ({ isAuthenticated }) => {
  const history = useHistory();
  const alert = useAlert();
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState("");

  const [orderHistoryState, handleOrderHistoryFetch] = useHandleFetch(
    {},
    "getSingleOrderHistory"
  );

  useEffect(() => {
    if (!isAuthenticated) {
      alert.error("Unauthorized access");
      history.push("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchOrderData = async () => {
      await handleOrderHistoryFetch({
        urlOptions: {
          placeHolders: {
            orderId: params.orderId,
          },
        },
      });
    };

    fetchOrderData();
  }, []);

  useEffect(() => {
    if (orderHistoryState.done && orderHistoryState.data) {
      const { order } = orderHistoryState.data;
      setProducts(order.products);
      setTotalPrice(order.totalPrice);
      setOrder(order);
      setOrderStatus(order.status.name);

      setDeliveryCharge(
        Object.values(orderHistoryState.data.order.deliveryRegion.charge)[0]
      );
    }
  }, [orderHistoryState]);

  return (
    <section>
      {orderHistoryState.isLoading ? (
        <SpinnerHOC />
      ) : (
        <Fragment>
          <OrderSuccessMessage orderStatus={orderStatus} />
          <OrderSuccessContainer>
            <CustomContainer>
              <Row>
                <Col lg={6}>
                  <OrderDetails
                    totalPrice={totalPrice}
                    deliveryCharge={deliveryCharge}
                    products={products}
                  />
                </Col>

                <Col lg={6}>
                  <OrderInfo order={order} />
                </Col>
              </Row>
            </CustomContainer>
          </OrderSuccessContainer>
        </Fragment>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

export default connect(mapStateToProps)(OrderSuccess);

// TODO this style is repeating. must refactor into one unified styles
const OrderSuccessContainer = styled.div`
  background-color: #f9f9f9 !important;
  padding: 50px 0;
  color: #777;
`;

const CustomContainer = styled.div`
  @media screen and (max-width: 1470px) {
    max-width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    /* padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto; */
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;
