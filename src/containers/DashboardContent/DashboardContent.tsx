//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import jwt_decode from "jwt-decode";

// import elements
import { Header } from "../../components/elements/Header";
import { Text } from "../../components/elements/Text";

// import modals
import { ContactModal } from "../../components/Modal/ContactModal";
import { AddressModal } from "../../components/Modal/AddressModal";
import { ChangePasswordModal } from "../../components/Modal/ChangePasswordModal";

// import account info component
import AccountInfo from "./AccountInfo";

// import styles
import { headerStyles, textStyles } from "./Dashboard.styles";

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

  const [customerData, setCustomerData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setToken(authToken);
  });

  useEffect(() => {
    try {
      setCustomerData(jwt_decode(token));
    } catch (error) {
      return;
    }
  }, [token]);

  return (
    <DashboardContentWrapper>
      <InnerContainer>
        <Header customStyle={headerStyles} content="My Dashboard" />

        <Text customStyle={textStyles}>
          Hello,{" "}
          {customerData && `${customerData.firstName} ${customerData.lastName}`}
        </Text>
        <br />
        <Text customStyle={textStyles}>
          From your My Account Dashboard you have the ability to view a snapshot
          of your recent account activity and update your account information.
          Select a link below to view or edit information.
        </Text>

        <AccountInfoContainer>
          <Header customStyle={headerStyles} content="Account Information" />
          <Row>
            {customerData && (
              <>
                <Col sm={6}>
                  <AccountInfo
                    title="Contact Information"
                    infoList={[
                      `${customerData.firstName} ${customerData.lastName}`,
                      `${customerData.email}`,
                      ` ${customerData.phone}`,
                    ]}
                    showModal={isContactModal}
                    openModal={openContactModal}
                    modal={
                      <ContactModal
                        show={isContactModal}
                        onHide={closeContactModal}
                        size="md"
                        info={customerData}
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
                      `First name: ${customerData.firstName}`,
                      `Last name: ${customerData.lastName}`,
                      `City: ${customerData.city || "no city found"}`,
                      `Country: ${customerData.country || "no country found"}`,
                      `Address: ${customerData.address1 || "no address found"}`,
                      `Phone: ${customerData.phone || "no phone found"}`,
                    ]}
                    showModal={isAddressModal}
                    openModal={openAddressModal}
                    modal={
                      <AddressModal
                        show={isAddressModal}
                        onHide={closeAddressModal}
                        size="md"
                        info={customerData}
                      />
                    }
                  />
                </Col>
              </>
            )}
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
