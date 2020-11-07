import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import component
import { PageHeader } from "../../components/common/PageHeader";
import { PersonalDetails } from "../../containers/PersonalDetails";
import { ShippingAddress } from "../../containers/ShippingAddress";

const Profile = () => {
  return (
    <ProfileContainer>
      <PageHeader>Profile</PageHeader>
      <FormWrapper>
        <InnerContainer>
          <Row>
            <PersonalDetails />
            <ShippingAddress />
          </Row>
        </InnerContainer>
      </FormWrapper>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  background-color: #f9f9f9 !important;
  padding: 50px 0;
`;

const InnerContainer = styled.div`
  @media screen and (max-width: 1470px) {
    max-width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;
