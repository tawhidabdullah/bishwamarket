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

// import form validation schema
import { udpateConatctInfoValidationSchema } from "../../../validation/UpdateContactInfo.validator";

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

const ContactModal = ({ show, onHide, size, info }) => {
  const alert = useAlert();

  // this hook update profile
  const [updateContactState, handleUpdateContact] = useHandleFetch(
    {},
    "updateCurrentCustomerData"
  );

  const handleUpdateContactInfoSubmit = async (values, actions) => {
    const updateContactRes = await handleUpdateContact({
      body: values,
    });

    if (updateContactRes && updateContactRes.status === "ok") {
      const { token } = updateContactRes.data;

      // update token
      localStorage.removeItem("authToken");
      localStorage.setItem("authToken", token);

      alert.success("Contact Info updated successfully");
    }

    onHide();
  };

  return (
    <Modal size={size} show={show} onHide={onHide}>
      <ContactModalContainer>
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
          <Formik
            initialValues={info}
            validationSchema={udpateConatctInfoValidationSchema}
            validateOnBlur={false}
            onSubmit={(values, actions) =>
              handleUpdateContactInfoSubmit(values, actions)
            }
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
                      updateContactState.error["error"]["firstName"])}
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
                      updateContactState.error["error"]["lastName"])}
                </ErrorText>

                <InputField
                  type="text"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  customStyle={inputStyles}
                  value={values.email}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("email");
                  }}
                />

                <ErrorText>
                  {(touched.email && errors.email) ||
                    (!isSubmitting &&
                      updateContactState.error["error"]["email"])}
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
                      updateContactState.error["error"]["phone"])}
                </ErrorText>

                <DrawerButton
                  type="submit"
                  customStyle={buttonStyles}
                  wrapperStyle={{}}
                >
                  {isSubmitting ? "Updating..." : "Update"}
                </DrawerButton>
              </form>
            )}
          </Formik>
        </ModalBody>
      </ContactModalContainer>
    </Modal>
  );
};

export default ContactModal;

const ErrorText = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 13px;
  margin-top: -11px;
  position: absolute;
`;

const ContactModalContainer = styled.div`
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
