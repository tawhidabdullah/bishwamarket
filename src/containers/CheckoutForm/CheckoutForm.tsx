// @ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useAlert } from "react-alert";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

// import common elements
import { InputField } from "../../components/common/InputField";
import { Select } from "../../components/common/Select";
// import { Checkbox } from "../../components/common/Checkbox";
import { DrawerButton } from "../../components/common/Button/DrawerButton";

// hooks for fetching data
import { useHandleFetch } from "../../hooks";

// // form props are separated

// redux ops
import { cartOperations } from "../../state/ducks/cart";
import { sessionOperations } from "../../state/ducks/session";

const inputStyles = { label: { "font-weight": "bold" } };

const CheckoutForm = ({
  clearCart,
  customStyle,
  getShippingCost,
  getDeliveryInfo,
  session,
  cartItems,
  login,
  checkout,
  checkoutState,
  cityList
}) => {
  const alert = useAlert();
  const history = useHistory();

  const [createAccount, setCreateAccount] = useState(false);
  // const toggleAccount = () => setCreateAccount(!createAccount);

  // state for managing server errors
  const [errors, setErrors] = useState({});
  const [alertError, setAlertError] = useState("Failed to Checkout!");
  const [deliveryError, setDeliveryError] = useState(null);

  // state for default/selected city
  const [selectedCity, setSelectedCity] = useState(null);
  // state for default/selected area
  const [selectedArea, setSelectedArea] = useState({});

  // state for setting delivery area
  const [deliveryArea, setDeliveryArea] = useState([]);

  // checkout state
  const [checkoutBodyData, setCheckoutBodyData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    deliveryArea: {
      id: "",
      name: "",
    },
    address1: "",
    password: "",
    password2: "",
    createAccount: false,
  });

  // hooks for fetching delivery region within a city
  const [deliveryAreaState, handleDeliveryAreaFetch] = useHandleFetch(
    [],
    "getDeliveryCharge"
  );

  // hooks for clearing out cart
  const [clearCartState, handleClearCart] = useHandleFetch({}, "clearCart");



  // fetch respective delivery area of a city
  useEffect(() => {
    const fetchDeliveryArea = async () => {
      const res = await handleDeliveryAreaFetch({
        urlOptions: {
          placeHolders: {
            cityName: selectedCity,
          },
        },
      });

      setDeliveryArea(res);
    };

    fetchDeliveryArea();
  }, [selectedCity]);

  const handleCityListChange = (e) => {
    setSelectedCity(e.target.value);
    setDeliveryArea({});
    getShippingCost(0);
  };

  const handleDeliveryAreaChange = (e) => {
    const _id = e.target.value;
    let selectedRegion = deliveryArea.filter((a) => a._id === _id)[0];

    let charge = Object.values(selectedRegion.charge)[0];
    setSelectedArea({ _id: selectedRegion._id, name: selectedRegion.name });
    getShippingCost(charge);
    getDeliveryInfo(selectedRegion);
  };

  useEffect(() => {
    if (session.isAuthenticated) {
      if (localStorage.getItem("authToken")) {
        try {
          const customerData = jwt_decode(localStorage.getItem("authToken"));

          setCheckoutBodyData({
            firstName: customerData.firstName,
            lastName: customerData.lastName,
            city: customerData.city,
            address1: customerData.address1,
            phone: customerData.phone,
            email: customerData.email,
            deliveryArea: customerData.deliveryArea,
          });
        } catch (error) {
          alert.error("Something went wrong!");
        }
      }
    }
  }, [session.isAuthenticated]);
  

  // this effect sets error from checkoutState
  useEffect(() => {
    if (checkoutState.error.isError) {
      let { error } = checkoutState.error;
      setAlertError(error.error);
      setErrors(error.checkoutError);
      setDeliveryError(error.delivery);
    }
  }, [checkoutState.error]);

  const handleCheckoutInputChange = (e) => {
    setCheckoutBodyData({ ...checkoutBodyData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert.error("Your cart is empty");
      return;
    }

    const items = cartItems.map((item) => {
      return {
        product: item.product,
        quantity: item.quantity,
        variation: item.variation,
        cover: item.cover,
      };
    });

    const orderData = {
      shippingAddress: {
        firstName: checkoutBodyData.firstName,
        lastName: checkoutBodyData.lastName,
        phone: checkoutBodyData.phone,
        email: checkoutBodyData.email,
        address1: checkoutBodyData.address1,
        country: "Bangladesh",
        city: selectedCity,
      },
      items,
      paymentMethod: "cod",
      delivery: selectedArea["_id"],
      password: checkoutBodyData.password,
      password2: checkoutBodyData.password2,
      createAccount: !session.isAuthenticated ? true : false,
    };

    const orderRes = await checkout({ body: orderData });
    if (
      orderRes &&
      Object.keys(orderRes).length > 0 &&
      orderRes.statusRes === "ok"
    ) {
      // check for new register
      if (orderRes.token) {
        localStorage.removeItem("authToken");
        localStorage.setItem("authToken", orderRes.token);
        login();
      }

      // clear redux cart store
      clearCart();
      setCheckoutBodyData({});
      await handleClearCart({});

      if (orderRes._id) {
        history.push(`/order-success/${orderRes._id}`);
      } else {
        alert.success("Order placed successfully");
        history.push("/");
      }
    } else {
      alert.error(alertError);
    }
  };

  return (
    <CheckoutFormContainer customStyle={customStyle}>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="First Name"
            type="text"
            name="firstName"
            value={checkoutBodyData.firstName}
            onChange={handleCheckoutInputChange}
          />
          <ErrorText>
            {errors && errors.firstName && errors.firstName}
          </ErrorText>
        </Col>

        <Col md={6} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Last Name"
            type="text"
            name="lastName"
            value={checkoutBodyData.lastName}
            onChange={handleCheckoutInputChange}
          />
          <ErrorText>{errors && errors.lastName && errors.lastName}</ErrorText>
        </Col>

        <Col md={6} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Phone"
            type="text"
            name="phone"
            value={checkoutBodyData.phone}
            onChange={handleCheckoutInputChange}
          />
          <ErrorText>{errors && errors.phone && errors.phone}</ErrorText>
        </Col>

        <Col md={6} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Email"
            type="email"
            name="email"
            value={checkoutBodyData.email}
            onChange={handleCheckoutInputChange}
          />
          <ErrorText>{errors && errors.email && errors.email}</ErrorText>
        </Col>

        <Col md={12} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Address"
            type="text"
            name="address1"
            placeholder="Street address"
            value={checkoutBodyData.address1}
            onChange={handleCheckoutInputChange}
          />
          <ErrorText>{errors && errors.address1 && errors.address1}</ErrorText>
        </Col>

        <Col md={6} sm={12} xs={12}>
          <Select
            label="Select City"
            customStyle={inputStyles}
            name="city"
            options={cityList}
            handleChange={handleCityListChange}
          />
          <ErrorText>{errors && errors.city && errors.city}</ErrorText>
        </Col>

        <Col md={6} sm={12} xs={12}>
          <Select
            label="Select Delivery Area"
            customStyle={inputStyles}
            name="deliveryArea"
            options={deliveryArea}
            handleChange={handleDeliveryAreaChange}
          />
          <ErrorText>{deliveryError && deliveryError}</ErrorText>
        </Col>

        <Col md={12} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Postal Code"
            type="text"
            name="postalCode"
            value={checkoutBodyData.postalCode}
            onChange={handleCheckoutInputChange}
          />
          <ErrorText>
            {errors && errors.postalCode && errors.postalCode}
          </ErrorText>
        </Col>

        {/* {!session.isAuthenticated && (
          <Col md={12} sm={12} xs={12}>
            <Checkbox
              customStyle={inputStyles}
              label="Create An Account?"
              type="checkbox"
              name="createAccount"
              handleChange={toggleAccount}
            />
          </Col>
        )} */}

        {!session.isAuthenticated && (
          <>
            <Col md={12} sm={12} xs={12}>
              <InputField
                label="Password"
                customStyle={inputStyles}
                name="password"
                type="password"
                value={checkoutBodyData.password}
                onChange={handleCheckoutInputChange}
              />
              <ErrorText>
                {errors && errors.password && errors.password}
              </ErrorText>
            </Col>

            <Col md={12} sm={12} xs={12}>
              <InputField
                label="Confirm Password"
                customStyle={inputStyles}
                name="password2"
                type="password"
                value={checkoutBodyData.password2}
                onChange={handleCheckoutInputChange}
              />
              <ErrorText>
                {errors && errors.password2 && errors.password2}
              </ErrorText>
              <p>This will create a new account with the given information</p>
            </Col>
          </>
        )}

        <Col onClick={handleCheckout} md={12} sm={12} xs={12}>
          <DrawerButton>
            {checkoutState.isLoading ? "Placing Order..." : "Place Order"}
          </DrawerButton>
        </Col>
      </Row>
    </CheckoutFormContainer>
  );
};

const mapStateToProps = (state) => ({
  session: state.session,
  cartItems: state.cart,
});

const mapDispatchToProps = {
  clearCart: cartOperations.clearCart,
  login: sessionOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);

const ErrorText = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 15px;
  margin-top: -10px;
  position: relative;
  padding: 5px 10px;
`;

const CheckoutFormContainer = styled.form`
  padding: 30px;
  background-color: #f1f4f7;
  border: 30px solid #fff;

  ${(props) => props.customStyle}

  @media screen and (max-width: 400px) {
    padding: 10px;
    border: 10px solid #fff;
  }
`;
