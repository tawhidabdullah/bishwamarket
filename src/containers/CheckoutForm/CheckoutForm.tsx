//@ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import common elements
import { InputField } from "../../components/common/InputField";
import { Select } from "../../components/common/Select";
import { Checkbox } from "../../components/common/Checkbox";

// hooks for fetching data
import { useHandleFetch } from "../../hooks";

// form props are separated
import { FormProps } from "./formProps";

const inputStyles = { label: { "font-weight": "bold" } };

const CheckoutForm = ({ customStyle }) => {
  const [createAccount, setCreateAccount] = useState(false);
  const toggleAccount = () => setCreateAccount(!createAccount);
  // const [countryList, setCountryList] = useState([]);

  // const [countryListState, handleContryList] = useHandleFetch(
  //   [],
  //   "countryList"
  // );

  // useEffect(() => {
  //   const fetchCountryData = async () => {
  //     const countryListRes = await handleContryList([]);
  //     setCountryList(countryListRes);
  //   };
  //   fetchCountryData();
  // }, []);

  return (
    <CheckoutFormContainer customStyle={customStyle}>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="First Name"
            type="text"
            name="firstName"
          />
        </Col>

        <Col md={6} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Last Name"
            type="text"
            name="lastName"
          />
        </Col>

        <Col md={6} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Phone"
            type="text"
            name="phone"
          />
        </Col>

        <Col md={6} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Email"
            type="email"
            name="email"
          />
        </Col>

        <Col md={12} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Address"
            type="text"
            name="address"
            placeholder="Street address"
          />
        </Col>

        <Col md={12} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="City"
            type="text"
            name="city"
          />
        </Col>

        <Col md={12} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Delivery Area"
            type="text"
            name="deliveryArea"
          />
        </Col>

        <Col md={12} sm={12} xs={12}>
          <InputField
            customStyle={inputStyles}
            label="Postal Code"
            type="text"
            name="postalCode"
          />
        </Col>

        <Col md={12} sm={12} xs={12}>
          <Checkbox
            customStyle={inputStyles}
            label="Create An Account?"
            type="checkbox"
            name="createAccount"
            handleChange={toggleAccount}
          />
        </Col>

        {createAccount && (
          <Col md={12} sm={12} xs={12}>
            <InputField
              label="Password"
              customStyle={inputStyles}
              name="password"
              type="password"
            />
          </Col>
        )}

        {/* {FormProps.map((props) => (
          <Col
            key={props.id}
            md={props.sizes.md}
            sm={props.sizes.sm}
            xs={props.sizes.xs}
          >
            {props.isSelect && <Select options={countryList} {...props} />}
            {props.isCheckbox && <Checkbox {...props} />}
            {!props.isSelect && !props.isCheckbox && <InputField {...props} />}
          </Col>
        ))} */}
      </Row>
    </CheckoutFormContainer>
  );
};

export default CheckoutForm;

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
