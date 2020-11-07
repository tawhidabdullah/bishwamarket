import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import form props
import { PersonalDetailFormProps } from "./PersonalDetailsFormProps";

// import header elements
import { FormHeader } from "../../components/elements/FormHeader";

// import common components
import { InputField } from "../../components/common/InputField";
import { TextArea } from "../../components/common/TextArea";

const PersonalDetails = () => {
  return (
    <Col lg={6}>
      <FormHeader content="PERSONAL DETAIL" />
      <FormContainer>
        <Row>
          {PersonalDetailFormProps.map((props) => (
            <CustoColumn key={props.id} md={props.sizes.md}>
              {props.isTextarea && <TextArea {...props} />}
              {!props.isTextarea && <InputField {...props} />}
            </CustoColumn>
          ))}
        </Row>
      </FormContainer>
    </Col>
  );
};

export default PersonalDetails;

const FormContainer = styled.form`
  padding: 30px;
  background-color: #f1f4f7;
  border: 30px solid #fff;
`;

const CustoColumn = styled(Col)`
  padding: unset;
  padding: 0 5px;
`;
