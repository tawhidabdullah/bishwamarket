//@ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Modal } from "react-bootstrap";

// import elements
import { Header } from "../../components/elements/Header";
import { Text } from "../../components/elements/Text";

// import account info component
import AccountInfo from "./AccountInfo";

// import styles
import { headerStyles, textStyles } from "./Dashboard.styles";

// import modals
import { ContactModal } from "../../components/Modal/ContactModal";
import { ChangePasswordModal } from "../../components/Modal/ChangePasswordModal";
import { AddressModal } from "../../components/Modal/AddressModal";

const DashboardContent = () => {
  // TODO should all these state be repeated?
  // contact update modal state and handlers
  const [isContactModal, setIsContactModal] = useState(false);
  const openContactModal = () => setIsContactModal(true);
  const closeContactModal = () => setIsContactModal(false);

  // Password update modal state and handlers
  const [isPasswordModal, setIsPasswordModal] = useState(false);
  const openPasswordModal = () => setIsPasswordModal(true);
  const closePasswordModal = () => setIsPasswordModal(false);

  // address update modal state and handlers
  const [isAddressModal, setIsAddressModal] = useState(false);
  const openAddressModal = () => setIsAddressModal(true);
  const closeAddressModal = () => setIsAddressModal(false);

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
                showModal={isContactModal}
                openModal={openContactModal}
                modal={
                  <ContactModal
                    show={isContactModal}
                    onHide={closeContactModal}
                    size="md"
                  />
                }
              />

              <Text
                customStyle={{
                  ...textStyles,
                  "font-weight": "700",
                  cursor: "pointer",
                  color: "#00baf2",
                  "letter-spacing": "unset",
                }}
                clickAction={openPasswordModal}
              >
                Change Password
              </Text>
              <ChangePasswordModal
                show={isPasswordModal}
                onHide={closePasswordModal}
                size="md"
              />
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
                showModal={isAddressModal}
                openModal={openAddressModal}
                modal={
                  <AddressModal
                    show={isAddressModal}
                    onHide={closeAddressModal}
                    size="md"
                  />
                }
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
