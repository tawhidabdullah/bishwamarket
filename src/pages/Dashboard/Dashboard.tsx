import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// import header element
import { PageHeader } from "../../components/common/PageHeader";
import { DashboardContent } from "../../containers/DashboardContent";

// import side bar component
import { DashboardSideBar } from "../../containers/DashboardSidebar";

const Dashboard = () => {

  const history = useHistory();
  const alert = useAlert();

  const isAuthenticated = useSelector(state => state.session.isAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      alert.error("Unauthorized access");
      history.push("/");
    }
  }, [isAuthenticated]);

  return (
    <section>
      <PageHeader>Dashboard</PageHeader>
      <DashboardContainer>
        <Container>
          <Row>
            <Col lg={3}>
              <DashboardSideBar />
            </Col>
            <Col lg={9}>
              <DashboardContent />
            </Col>
          </Row>
        </Container>
      </DashboardContainer>
    </section>
  );
};


export default Dashboard;

const DashboardContainer = styled.div`
  background-color: #f9f9f9 !important;
  padding: 50px 0;
  color: #777;
`;
