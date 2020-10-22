// @ts-nocheck

import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";

// import elements
import { BackDrop } from "../../elements/Backdrop";
import { Text } from "../../elements/Text";
import { Color, Size } from "../../elements/RoundButton/RoundButton";

// import toggle drawer action
import { toggleQuickviewDrawer } from "../../../redux/global/global.actions";

// import dummy quick view image
import quickViewImage from "../../../assets/quickview.jpg";

// import drawer button
import { DrawerButton } from "../../common/Button/DrawerButton";

const QuickviewDrawer = ({ open, toggleQuickviewDrawer }) => {
  return (
    <Fragment>
      <BackDrop show={open} clicked={() => toggleQuickviewDrawer()} />
      <QuickviewDrawerContainer show={open}>
        <ImageContainer>
          <img src={quickViewImage} alt="quick product preview" />
        </ImageContainer>

        <DetailsContainer>
          <DrawerHeader>
            <Text>Woman T-shirt</Text>
            <Text
              customStyle={{ cursor: "pointer" }}
              clickAction={() => toggleQuickviewDrawer()}
            >
              &#10005;
            </Text>
          </DrawerHeader>
          <Text customStyle={{ "font-weight": "bold", "padding-top": "0" }}>
            $32.00
          </Text>

          <ColorContainer>
            <Color customStyle={{ "background-color": "#f1e7e6" }} />
            <Color customStyle={{ "background-color": "#d0edff" }} />
            <Color customStyle={{ "background-color": "#bfbfbf" }} />
          </ColorContainer>

          <ProductDetailTextContainer>
            <Text
              customStyle={{
                "font-size": "16px",
                "font-weight": "700",
                color: "#333",
                padding: "5px 0",
              }}
            >
              Product Details
            </Text>
            <Text
              customStyle={{
                "font-size": "14px",
                padding: "5px 0",
                "line-height": "1.5em",
              }}
            >
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </Text>
          </ProductDetailTextContainer>

          <SizeContainer>
            <Size>S</Size>
            <Size>M</Size>
            <Size>L</Size>
            <Size>XL</Size>
          </SizeContainer>
          <Text
            customStyle={{
              "font-weight": "bold",
              "font-size": "16px",
              padding: "0",
              color: "#333",
            }}
          >
            Quantity
          </Text>

          <QuantityBox>
            <InputGroup>
              <InputGroup.Prepend>
                <QuantityAction>
                  <i className="fa fa-angle-left"></i>
                </QuantityAction>
              </InputGroup.Prepend>
              <FormControl />
              <InputGroup.Append>
                <QuantityAction>
                  <i className="fa fa-angle-right"></i>
                </QuantityAction>
              </InputGroup.Append>
            </InputGroup>
          </QuantityBox>

          <ButtonContainer>
            <DrawerButton
              customStyle={{
                "font-weight": "bold",
                "margin-right": "7px",
                padding: "7px",
              }}
            >
              Add To Cart
            </DrawerButton>
            <DrawerButton
              customStyle={{
                "font-weight": "bold",
                "margin-left": "7px",
                padding: "7px",
              }}
            >
              View Details
            </DrawerButton>
          </ButtonContainer>
        </DetailsContainer>
      </QuickviewDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleQuickviewDrawer: () => dispatch(toggleQuickviewDrawer()),
});

export default connect(null, mapDispatchToProps)(QuickviewDrawer);

const QuickviewDrawerContainer = styled.div`
  position: fixed;
  width: 800px;
  height: 500px;
  right: 20%;
  top: 10%;
  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.5s ease-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-120%)")};

  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 45%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 50%;
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 10vw;
`;

const QuantityAction = styled(InputGroup.Text)`
  background-color: white;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10vw;
  margin-bottom: 10px;
`;

const ProductDetailTextContainer = styled.div`
  padding: 20px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

const SizeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15vw;
  padding: 15px 0 8px 0;
`;
