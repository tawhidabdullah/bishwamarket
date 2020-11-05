import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// import header element
import { PageHeader } from "../../components/common/PageHeader";

// import side bar component
import { DashboardSideBar } from "../../containers/DashboardSidebar";
import { DashboardContent } from "../../containers/DashboardContent";

const Dashboard = () => {
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
