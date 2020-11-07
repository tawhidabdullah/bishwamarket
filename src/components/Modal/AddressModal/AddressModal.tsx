//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { Formik } from "formik";
import { useAlert } from "react-alert";

// import elements
import { Header } from "../../elements/Header";
import { Text } from "../../elements/Text";
import { InputField } from "../../common/InputField";
import { DrawerButton } from "../../common/Button/DrawerButton";

// import validation schema
import { udpateAddressValidationSchema } from "../../../validation/UpdateAddress.validator";

// import hook
import { useHandleFetch } from "../../../hooks";

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

const AddressModal = ({ show, onHide, size, info }) => {
  const alert = useAlert();

  // this hook update profile
  const [updateAddressState, handleUpdateAddress] = useHandleFetch(
    {},
    "updateCurrentCustomerData"
  );

  const handleUpdateAddressSubmit = async (values, actions) => {
    const updateAddressRes = await handleUpdateAddress({
      body: values,
    });

    if (updateAddressRes && updateAddressRes.status === "ok") {
      const { token } = updateAddressRes.data;

      // update token
      localStorage.removeItem("authToken");
      localStorage.setItem("authToken", token);

      alert.success("Address info updated successfully");
      onHide();
    }
  };

  return (
    <Modal size={size} show={show} onHide={onHide}>
      <AddressModalContainer>
        <ModalHeader>
          <Header
            customStyle={headerStyles}
            content="Update Address Information"
          />
          <Text customStyle={closeButtonStyles} clickAction={onHide}>
            &#10005;
          </Text>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={info}
            validationSchema={udpateAddressValidationSchema}
            validateOnBlur={false}
            onSubmit={(values, actions) => {
              return handleUpdateAddressSubmit(values, actions);
            }}
          >
            {({
              handleChange,
              values,
              handleSubmit,
              errors,
              isSubmitting,
              touched,
              setFieldTouched,
            }) => (
              <form onSubmit={handleSubmit}>
                <InputField
                  type="text"
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  customStyle={{ ...inputStyles, label: { "padding-top": 0 } }}
                  value={values.firstName}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("firstName");
                  }}
                />

                <ErrorText>
                  {(touched.firstName && errors.firstName) ||
                    (!isSubmitting &&
                      updateAddressState.error["error"]["firstName"])}
                </ErrorText>

                <InputField
                  type="text"
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  customStyle={inputStyles}
                  value={values.lastName}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("lastName");
                  }}
                />

                <ErrorText>
                  {(touched.lastName && errors.lastName) ||
                    (!isSubmitting &&
                      updateAddressState.error["error"]["lastName"])}
                </ErrorText>

                <InputField
                  type="text"
                  label="City"
                  name="city"
                  placeholder="City"
                  customStyle={inputStyles}
                  value={values.city}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("city");
                  }}
                />

                <ErrorText>
                  {(touched.city && errors.city) ||
                    (!isSubmitting &&
                      updateAddressState.error["error"]["city"])}
                </ErrorText>

                <InputField
                  type="text"
                  label="Address"
                  name="address1"
                  placeholder="Address"
                  customStyle={inputStyles}
                  value={values.address1}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("address1");
                  }}
                />

                <ErrorText>
                  {(touched.address1 && errors.address1) ||
                    (!isSubmitting &&
                      updateAddressState.error["error"]["address1"])}
                </ErrorText>

                <InputField
                  type="text"
                  label="Phone"
                  name="phone"
                  placeholder="Phone"
                  customStyle={inputStyles}
                  value={values.phone}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("phone");
                  }}
                />

                <ErrorText>
                  {(touched.phone && errors.phone) ||
                    (!isSubmitting &&
                      updateAddressState.error["error"]["phone"])}
                </ErrorText>

                <DrawerButton
                  type="submit"
                  customStyle={buttonStyles}
                  wrapperStyle={{}}
                >
                  {isSubmitting ? "Updating..." : "Update"}
                </DrawerButton>
                {/* </div> */}
              </form>
            )}
          </Formik>
        </ModalBody>
      </AddressModalContainer>
    </Modal>
  );
};

export default AddressModal;

const ErrorText = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 13px;
  margin-top: -11px;
  position: absolute;
`;

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
