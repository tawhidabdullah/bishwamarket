// @ts-nocheck
import React, { useState, Fragment } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { withAlert } from "react-alert";

import { withRouter } from "react-router-dom";

// import common elements
import { Checkbox } from "../../components/common/Checkbox";

// delivery area info component
import { DeliveryAreaInfo } from "../../components/DeliveryAreaInfo";
// import { DrawerButton } from "../../components/common/Button/DrawerButton";

// reducer ops

import { cartSelectors } from "../../state/ducks/cart";
import { useHandleFetch } from "../../hooks";
import { Spinner } from "../../components/loading";
import { AuthButton } from "../../components/Button";
import { cacheOperations } from "../../state/ducks/cache";
import {
  checkIfItemExistsInCache,
  getDeliveryChargeTotal,
  getCity,
  saveCity,
  deleteCity,
  getCustomerData,
  saveCustomerData,
  deleteCustomerData,
} from "../../utils";
import { cartOperations } from "../../state/ducks/cart";
import { sessionOperations } from "../../state/ducks/session";
import PaymentForm from "./PaymentForm";
import CheckoutCartItem from "./CheckoutCartItem";

// constant  styles
// radio buttons
const radioButtonStyles = {
  label: { "font-size": "14px", padding: "unset" },
};

const checkButtonStyles = {
  label: { "font-size": "16px", padding: "unset" },
};

// TODO refactor into smaller component

const CheckoutDetails = ({
  cartItems,
  totalPrice,
  shippingCost,
  deliveryInfo,
  history,
  session,
  logout,
  addItemToCache,
  cache,
  clearCart,
  alert,
  login,
  lingual,
}) => {
  const [payment, setPayment] = useState(null);

  const handleSetPayment = (opts) => setPayment(opts);

  const [coupon, setCoupon] = useState("");
  const [validateCoupon, handleValidateCoupon] = useHandleFetch(
    {},
    "validateCoupon"
  );
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [showCouponPrice, setShowCouponPrice] = useState(false);

  const handleCoupon = async () => {
    const items =
      cartItems.map((item) => {
        return {
          product: item.product,
          quantity: item.quantity,
          variation: item.variation,
        };
      }) || [];

    const validateCouponRes = await handleValidateCoupon({
      body: {
        items,
        coupon,
      },
    });

    setCoupon("");

    if (validateCouponRes && Object.keys(validateCouponRes).length > 0) {
      setShowCouponPrice(true);
      debugger;
      setDiscountAmount(validateCouponRes.discountAmount);
      setDiscountPrice(validateCouponRes.discountPrice);
      alert.success("Coupon applied successfully");
    } else {
      setShowCouponPrice(false);
      setDiscountAmount(0);
      setDiscountPrice(0);
    }
  };

  return (
    <Fragment>
      <DeliveryAreaInfo deliveryInfo={deliveryInfo} />
      <CheckoutDetailsContainer>
        <OrderBox>
          <TitleBox>
            <div>
              Product <span>Total</span>
            </div>
          </TitleBox>
          <QuantityList>
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item, idx) => (
                <QuantityListItem key={idx}>
                  {item.name} X {item.quantity}
                  <span>৳ {item.quantity * item.price}</span>
                </QuantityListItem>
              ))}
          </QuantityList>

          <SubTotalList>
            <SubTotalListItem>
              SubTotal <SubTotal>৳ {totalPrice}</SubTotal>
            </SubTotalListItem>

            <SubTotalListItem>
              Shipping <SubTotal>৳ {shippingCost}</SubTotal>
            </SubTotalListItem>

            <SubTotalListItem>
              Payment Method <SubTotal>Cash on Delivery</SubTotal>
            </SubTotalListItem>
          </SubTotalList>

          <TotalPriceList>
            <TotalPriceItem>
              Total{" "}
              <SubTotal>
                ৳ {parseInt(totalPrice) + parseInt(shippingCost)}
              </SubTotal>
            </TotalPriceItem>
          </TotalPriceList>
        </OrderBox>

        <PaymentBox>
          <PaymentOptionsContainer>
            {/* <PaymentOptionItem>
            <Checkbox
              label="Check Payments"
              customStyle={radioButtonStyles}
              type="radio"
              id="checkPayment"
              handleChange={handleSetPayment}
              checked={payment === "checkPayment"}
            />
          </PaymentOptionItem> */}

            {/* <PaymentOptionItem>
              <Checkbox
                label="Cash on Delivery"
                customStyle={radioButtonStyles}
                type="radio"
                id="cod"
                handleChange={handleSetPayment}
                checked={true}
                value="cod"
                // checked={payment === "cod"}
              />
            </PaymentOptionItem> */}

            {/* <PaymentOptionItem>
            <Checkbox
              label="Paypal"
              customStyle={radioButtonStyles}
              type="radio"
              id="paypal"
              handleChange={handleSetPayment}
              checked={payment === "paypal"}
            />
          </PaymentOptionItem> */}
          </PaymentOptionsContainer>
        </PaymentBox>
        <CouponBox>
          {showCouponPrice ? (
            <>
              <OrderSummaryPriceContainerMain>
                <span>Discount Amount</span>
                <span>-৳{discountAmount}</span>
              </OrderSummaryPriceContainerMain>

              <div className="order-summaryPriceCotainerMain">
                <span>Discount Price</span>
                <span>৳ {discountPrice}</span>
              </div>
            </>
          ) : (
            ""
          )}
          <CouponContainer>
            <CouponHeader>* Add Gift or Coupon Code</CouponHeader>
            <CouponForm>
              <Input
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
                type="text"
                placeholder="i.e. A123"
              />
              <Button onClick={handleCoupon}>
                {validateCoupon.isLoading ? "Applying..." : "Apply"}
              </Button>
            </CouponForm>

            {validateCoupon.error &&
              validateCoupon.error.error &&
              validateCoupon.error.error.coupon && (
                <ErrorText>{validateCoupon.error.error.coupon}</ErrorText>
              )}
          </CouponContainer>
        </CouponBox>
      </CheckoutDetailsContainer>
    </Fragment>
  );
};

const mapDispatchToProps = {
  logout: sessionOperations.logout,
  login: sessionOperations.login,
  addItemToCache: cacheOperations.addItemToCache,
  clearCart: cartOperations.clearCart,
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  totalPrice: cartSelectors.getTotalPriceOfCartItems(state.cart),
  session: state.session,
  cache: state.cache,
  lingual: state.lingual,
});

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(withRouter(withAlert()(CheckoutDetails)));

const OrderSummaryPriceContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 0;

  span {
    color: #333;
    font-size: 14px;
    font-weight: 700;
  }
`;

const ErrorText = styled.p`
  color: red;
  padding: 5px;
`;

const CouponContainer = styled.div`
  margin-top: 20px;
`;

const CouponHeader = styled.div`
  font-weight: 500;
  padding: 8px 0;
`;

const CouponForm = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;

  @media screen and (max-width: 578px) {
    /* flex-wrap: wrap; */
    // flex-direction: column;
    // justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  border: 1px solid #bfbfbf;
  padding: 4px 3px;
  text-indent: 5px;
  /* letter-spacing: 1.5px; */
  outline: none;
  width: 100%;
  border-radius: 3px;
  font-size: 13px;

  @media screen and (max-width: 578px) {
    margin: 5px 0;
  }
`;

const Button = styled.button`
  border: none;
  padding: 5px 25px;
  background: #5c2c90;
  color: #fff;
  margin-left: 10px;
  outline: none;
  border-radius: 3px;
  cursor: pointer;

  @media screen and (max-width: 578px) {
    padding: 9px 15px;
    font-size: 1.3rem;
  }
`;

const ListContainerStyles = css`
  position: relative;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  font-family: PT Sans, sans-serif;
`;

const CheckoutDetailsContainer = styled.div`
  padding: 30px;
  background-color: #f1f4f7;
  border: 30px solid #fff;

  @media screen and (max-width: 400px) {
    padding: 10px;
    border: 10px solid #fff;
  }
`;

const OrderBox = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

const CouponBox = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

const TitleBox = styled.div`
  position: relative;
  padding-bottom: 25px;
  color: #444;
  font-weight: 600;
  font-size: 22px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;

  & div span {
    position: relative;
    width: 35%;
    float: right;
    line-height: 1.2em;
  }
`;

const QuantityList = styled.ul`
  ${ListContainerStyles}
`;

const QuantityListItem = styled.li`
  position: relative;
  display: block;
  font-size: 15px;
  color: #444;
  line-height: 20px;
  margin-bottom: 20px;

  & span {
    float: right;
    font-size: 18px;
    line-height: 20px;
    color: #333;
    font-weight: 400;
    width: 35%;
  }
`;

const SubTotalList = styled.ul`
  ${ListContainerStyles}
`;

const SubTotalListItem = styled.li`
  position: relative;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  line-height: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const SubTotal = styled.span`
  position: relative;
  font-size: 18px;
  line-height: 20px;
  color: #00baf2;
  font-weight: 400;
  width: 35%;
  float: right;
  font-family: PT Sans, sans-serif;
`;

const ShippingOptions = styled.div`
  width: 35%;
  float: right;
`;

const TotalPriceList = styled.ul`
  position: relative;
  margin-bottom: 40px;
`;

const TotalPriceItem = styled.li`
  position: relative;
  display: block;
  font-weight: 400;
  color: #333;
  line-height: 20px;
  margin-bottom: 10px;
  font-size: 18px;
`;

const PaymentBox = styled.div`
  position: relative;
`;

const PaymentOptionsContainer = styled.div`
  position: relative;
  margin: 20px 0 30px 0;
`;

const PaymentOptionItem = styled.li`
  display: flex;
  /* margin-bottom: 15px; */
`;
