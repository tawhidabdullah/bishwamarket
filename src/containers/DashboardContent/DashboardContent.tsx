//@ts-nocheck
import React from "react";
import styled from "styled-components";

// import elements
import { Header } from "../../components/elements/Header";
import { Text } from "../../components/elements/Text";

const DashboardContent = () => {
  return (
    <DashboardContentWrapper>
      <InnerContainer>
        <Header
          customStyle={{
            "font-weight": "400",
            "font-size":
              "calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))",
            "margin-bottom": "15px",
          }}
          content="My Dashboard"
        />

        <Text
          customStyle={{
            "font-size":
              "calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))",
            "line-height": "1.6",
          }}
        >
          Hello, MARK JECNO !
        </Text>
        <br />
        <Text
          customStyle={{
            "font-size":
              "calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))",
            "line-height": "1.6",
          }}
        >
          From your My Account Dashboard you have the ability to view a snapshot
          of your recent account activity and update your account information.
          Select a link below to view or edit information.
        </Text>
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
