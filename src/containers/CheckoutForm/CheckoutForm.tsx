//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import common elements
import { InputField } from "../../components/common/InputField";
import { Select } from "../../components/common/Select";
import { Checkbox } from "../../components/common/Checkbox";

// form props are separated
import { FormProps } from "./formProps";

// dummy country list
const countryList = [
  { value: "1", name: "Bangladesh" },
  { value: "2", name: "India" },
  { value: "3", name: "Pakistan" },
  { value: "4", name: "Sri Lanka" },
  { value: "5", name: "Bhutan" },
];

const CheckoutForm = ({ customStyle }) => {
  return (
    <Col lg={6} sm={12} xs={12}>
      <CheckoutFormContainer customStyle={customStyle}>
        <Row>
          {FormProps.map((props) => (
            <Col
              key={props.id}
              md={props.sizes.md}
              sm={props.sizes.sm}
              xs={props.sizes.xs}
            >
              {props.isSelect && <Select options={countryList} {...props} />}
              {props.isCheckbox && <Checkbox {...props} />}
              {!props.isSelect && !props.isCheckbox && (
                <InputField {...props} />
              )}
            </Col>
          ))}
        </Row>
      </CheckoutFormContainer>
    </Col>
  );
};

export default CheckoutForm;

const CheckoutFormContainer = styled.div`
  padding: 30px;
  background-color: #f1f4f7;
  border: 30px solid #fff;

  ${(props) => props.customStyle}

  @media screen and (max-width: 400px) {
    padding: 10px;
    border: 10px solid #fff;
  }
`;
