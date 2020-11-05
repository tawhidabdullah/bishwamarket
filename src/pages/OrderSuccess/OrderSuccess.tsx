import React, {useEffect} from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

// import component
import { OrderSuccessMessage } from "../../components/OrderSuccessMessage";
import { OrderDetails } from "../../containers/OrderDetails";
import { OrderInfo } from "../../containers/OrderInfo";

const OrderSuccess = ({isAuthenticated}) => {

  const history = useHistory();
  const alert = useAlert();
  
  useEffect(() => {
    if(!isAuthenticated) {
      alert.error("Unauthorized access");
      history.push('/');
    }
  }, [isAuthenticated])

  return (
    <section>
      <OrderSuccessMessage />
      <OrderSuccessContainer>
        <CustomContainer>
          <Row>
            <Col lg={6}>
              <OrderDetails />
            </Col>

            <Col lg={6}>
              <OrderInfo />
            </Col>
          </Row>
        </CustomContainer>
      </OrderSuccessContainer>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
})

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
