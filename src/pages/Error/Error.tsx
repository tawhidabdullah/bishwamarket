import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

// common elements
import { Header } from "../../components/elements/Header";
import { DrawerButton } from "../../components/common/Button/DrawerButton";

// header styles
const headerStyles = {
  "font-size": "200px",
  "font-weight": 900,
  margin: 0,
  "line-height": 0.8,
  color: "#444",
  " margin-top": " -11px",
};

const subHeaderStyles = {
  color: "#333",
  "font-weight": 700,
  "letter-spacing": "3px",
  "margin-top": "100px",
  "text-transform": "uppercase",
};

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <Container>
        <Row>
          <Col sm={12}>
            <ErrorContent>
              <Header content="404" customStyle={headerStyles} />

              <Header content="Page Not Found" customStyle={subHeaderStyles} />
              {/* <DrawerButton customStyle={{}} wrapperStyle={{}}>
                Back To Home
              </DrawerButton> */}
            </ErrorContent>
          </Col>
        </Row>
      </Container>
    </ErrorPageContainer>
  );
};

export default ErrorPage;

const ErrorPageContainer = styled.section`
  background-color: #f9f9f9;
`;

const ErrorContent = styled.div`
  padding: 130px 0;
  text-align: center;

  @media screen and (max-width: 578px) {
    & h2:first-child {
      font-size: 105px;
    }

    & h2:last-child {
      font-size: 25px;
    }
  }
`;
