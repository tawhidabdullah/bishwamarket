//@ts-nocheck
import React, { Fragment } from "react";
import styled from "styled-components";

// import elements
import { Header } from "../../components/elements/Header";
import { Text } from "../../components/elements/Text";

// import styles
import {
  textStyles,
  accountTittleInfo,
  ModalActionStyle,
} from "./Dashboard.styles";

const AccountInfo = ({ title, infoList, modal, showModal, openModal }) => {
  return (
    <Fragment>
      <TitleContainer>
        <Header customStyle={accountTittleInfo} content={title} />
        <Text customStyle={ModalActionStyle} clickAction={() => openModal()}>
          Edit
        </Text>
        {showModal && modal}
      </TitleContainer>

      <AccountInfoBox>
        {infoList.map((info, idx) => (
          <Fragment key={idx}>
            <Text customStyle={textStyles}>{info}</Text> <br />
          </Fragment>
        ))}
      </AccountInfoBox>
    </Fragment>
  );
};

export default AccountInfo;

const TitleContainer = styled.div`
  border-bottom: 1px solid #ddd;
  display: inline-block;
  margin-bottom: 5px;
  padding: 12px 0;
  position: relative;
  width: 100%;
`;

const AccountInfoBox = styled.div``;
