//@ts-nocheck

import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import form props
import { ShippinAddressFormProps } from "./ShippinAddressFormProps";

// import header elements
import { FormHeader } from "../../components/elements/FormHeader";

// import common components
import { InputField } from "../../components/common/InputField";
import { Select } from "../../components/common/Select";
import { DrawerButton } from "../../components/common/Button/DrawerButton";

// dummy country list
const countryList = [
  { value: "1", name: "Bangladesh" },
  { value: "2", name: "India" },
  { value: "3", name: "Pakistan" },
  { value: "4", name: "Sri Lanka" },
  { value: "5", name: "Bhutan" },
];

const ShippinAddress = () => {
  return (
    <Col lg={6}>
      <FormHeader content="SHIPPING ADDRESS" />
      <FormContainer>
        <Row>
          {ShippinAddressFormProps.map((props) => (
            <CustoColumn
              customstyle={{ padding: "0 5px" }}
              key={props.id}
              md={props.sizes.md}
            >
              {props.isSelect && <Select {...props} options={countryList} />}
              {!props.isSelect && <InputField {...props} />}
            </CustoColumn>
          ))}

          <CustoColumn
            customstyle={{ "padding-right": "5px", "margin-bottom": "50px" }}
            md={6}
          >
            <DrawerButton
              wrapperStyle={{
                width: "50%",
                margin: "unset",
                "margin-right": "auto",
              }}
            >
              Save Settings
            </DrawerButton>
          </CustoColumn>
        </Row>
      </FormContainer>
    </Col>
  );
};

export default ShippinAddress;

const FormContainer = styled.form`
  padding: 30px;
  background-color: #f1f4f7;
  border: 30px solid #fff;
`;

const CustoColumn = styled(Col)`
  padding: unset;

  ${(props) => props.customstyle}
`;
