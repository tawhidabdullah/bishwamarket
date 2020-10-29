//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import elements
import { Header } from "../../components/elements/Header";
import { Text } from "../../components/elements/Text";

// import account info component
import AccountInfo from "./AccountInfo";

// import styles
import { headerStyles, textStyles } from "./Dashboard.styles";

const DashboardContent = () => {
  return (
    <DashboardContentWrapper>
      <InnerContainer>
        <Header customStyle={headerStyles} content="My Dashboard" />

        <Text customStyle={textStyles}>Hello, MARK JECNO !</Text>
        <br />
        <Text customStyle={textStyles}>
          From your My Account Dashboard you have the ability to view a snapshot
          of your recent account activity and update your account information.
          Select a link below to view or edit information.
        </Text>

        <AccountInfoContainer>
          <Header customStyle={headerStyles} content="Account Information" />
          <Row>
            <Col sm={6}>
              <AccountInfo
                title="Contact Information"
                infoList={[
                  "MARK JECNO",
                  "MARK-JECNO@gmail.com",
                  "+8801234-458-987",
                ]}
              />

              <Text
                customStyle={{
                  ...textStyles,
                  "font-weight": "700",
                  cursor: "pointer",
                  color: "#00baf2",
                  "letter-spacing": "unset",
                }}
              >
                Change Password
              </Text>
            </Col>

            <Col sm={6}>
              <AccountInfo
                title="Address"
                infoList={[
                  "First name: Mark",
                  "Last name: Jecno",
                  "City/Town: Dhaka",
                  "Country: Bangladesh",
                  " Address: Nikunjo-2, Khilkhet, Dhaka",
                  "Phone: 123-456-789",
                ]}
              />
            </Col>
          </Row>
        </AccountInfoContainer>
      </InnerContainer>
    </DashboardContentWrapper>
  );
};

export default DashboardContent;

const DashboardContentWrapper = styled.div`
  background-color: #fff;
`;

const InnerContainer = styled.div`
  padding: 30px;
`;

const AccountInfoContainer = styled.div`
  margin: 20px 0;
`;
