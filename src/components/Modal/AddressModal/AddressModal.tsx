import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

// import elements
import { Header } from "../../elements/Header";
import { Text } from "../../elements/Text";
import { InputField } from "../../common/InputField";
import { DrawerButton } from "../../common/Button/DrawerButton";
import { Select } from "../../common/Select";

const headerStyles = {
  "font-size": "16px",
  "font-weight": "700",
};

const closeButtonStyles = {
  cursor: "pointer",
};

const inputStyles = {
  padding: "5px",
};

const buttonStyles = {
  padding: "6px 0",
  "font-weight": "bold",
};

const selectStyles = {
  padding: "6px 0",
};

// dummy country list
const countryList = [
  { value: "1", name: "Bangladesh" },
  { value: "2", name: "India" },
  { value: "3", name: "Pakistan" },
  { value: "4", name: "Sri Lanka" },
  { value: "5", name: "Bhutan" },
];

const AddressModal = ({ show, onHide, size }) => {
  return (
    <Modal size={size} show={show} onHide={onHide}>
      <AddressModalContainer>
        <ModalHeader>
          <Header
            customStyle={headerStyles}
            content="Update Contact Information"
          />
          <Text customStyle={closeButtonStyles} clickAction={onHide}>
            &#10005;
          </Text>
        </ModalHeader>
        <ModalBody>
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            customStyle={{ ...inputStyles, label: { "padding-top": 0 } }}
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            customStyle={inputStyles}
          />

          <Select
            customStyle={selectStyles}
            label="Country"
            options={countryList}
            name="country"
          />

          <InputField
            label="City/Town"
            type="text"
            name="city"
            customStyle={inputStyles}
          />

          <InputField
            label="Address"
            type="text"
            name="address1"
            customStyle={inputStyles}
          />

          <InputField
            label="Phone"
            type="text"
            name="phone"
            customStyle={inputStyles}
          />

          <DrawerButton customStyle={buttonStyles} wrapperStyle={{}}>
            Update
          </DrawerButton>
        </ModalBody>
      </AddressModalContainer>
    </Modal>
  );
};

export default AddressModal;

const AddressModalContainer = styled.div`
  padding: 20px 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;
