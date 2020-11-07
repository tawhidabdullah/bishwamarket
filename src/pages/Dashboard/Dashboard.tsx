import React, {useEffect} from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

// import header element
import { PageHeader } from "../../components/common/PageHeader";

// import side bar component
import { DashboardSideBar } from "../../containers/DashboardSidebar";
import { DashboardContent } from "../../containers/DashboardContent";

const Dashboard = ({isAuthenticated}) => {

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

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
})

export default connect(mapStateToProps)(Dashboard);

const DashboardContainer = styled.div`
  background-color: #f9f9f9 !important;
  padding: 50px 0;
  color: #777;
`;
