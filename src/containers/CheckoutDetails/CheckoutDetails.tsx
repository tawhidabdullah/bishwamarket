// @ts-nocheck
import React, { useState, Fragment } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

// import common elements
import { Checkbox } from "../../components/common/Checkbox";

// delivery area info component
import { DeliveryAreaInfo } from "../../components/DeliveryAreaInfo";
// import { DrawerButton } from "../../components/common/Button/DrawerButton";

// reducer ops
import { cartSelectors } from "../../state/ducks/cart";

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
}) => {
  const [payment, setPayment] = useState(null);

  const handleSetPayment = (opts) => setPayment(opts);

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
                  <span>${item.quantity * item.price}</span>
                </QuantityListItem>
              ))}
          </QuantityList>

          <SubTotalList>
            <SubTotalListItem>
              SubTotal <SubTotal>${totalPrice}</SubTotal>
            </SubTotalListItem>

            <SubTotalListItem>
              Shipping <SubTotal>${shippingCost}</SubTotal>
            </SubTotalListItem>

            <SubTotalListItem>
              Payment <SubTotal>${shippingCost}</SubTotal>
            </SubTotalListItem>
          </SubTotalList>

          <TotalPriceList>
            <TotalPriceItem>
              Total{" "}
              <SubTotal>
                ${parseInt(totalPrice) + parseInt(shippingCost)}
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

            <PaymentOptionItem>
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
            </PaymentOptionItem>

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
      </CheckoutDetailsContainer>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  totalPrice: cartSelectors.getTotalPriceOfCartItems(state.cart),
});

export default connect(mapStateToProps)(CheckoutDetails);

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
