import React from "react";
import styled from "styled-components";

const PageHeader = ({ children }) => {
  return (
    <PageHeaderContainer>
      <HeaderText>{children}</HeaderText>
    </PageHeaderContainer>
  );
};

export default PageHeader;

const PageHeaderContainer = styled.div`
  background-color: #fff;
  padding: 50px 0;
  width: 100%;
  margin: 0 auto;
`;

const HeaderText = styled.h2`
  text-align: center;
  font-size: calc(20px + (28 - 20) * ((100vw - 320px) / (1920 - 320)));
  color: #333;
  font-weight: 700;
`;
