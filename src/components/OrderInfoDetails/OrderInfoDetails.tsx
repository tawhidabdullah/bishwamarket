// @ts-nocheck
import React from "react";
import styled from "styled-components";

import { Header } from "../elements/Header";
import { Text } from "../elements/Text";

const OrderInfoDetails = ({ header, infos, customStyle }) => {
  return (
    <OrderInfoDetailsContainer>
      <Header customStyle={customStyle} content={header} />
      <InfoList>
        {Array.isArray(infos) ? (
          infos.map((info, idx) => (
            <InfoListItem key={idx}>{info}</InfoListItem>
          ))
        ) : (
          <Text customStyle={customStyle}>{infos}</Text>
        )}
      </InfoList>
    </OrderInfoDetailsContainer>
  );
};

export default OrderInfoDetails;

const OrderInfoDetailsContainer = styled.div`
  padding-bottom: 30px;
`;

const InfoList = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
`;

const InfoListItem = styled.li`
  display: flex;
  text-transform: capitalize;
  font-size: 16px;
`;
