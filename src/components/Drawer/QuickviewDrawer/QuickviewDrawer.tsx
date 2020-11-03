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
import { toggleQuickviewDrawer } from "../../../state/ducks/globalState/actions";

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
            {/* <Text
              customStyle={{ cursor: "pointer" }}
              clickAction={() => toggleQuickviewDrawer()}
            >
              &#10005;
            </Text> */}
          </DrawerHeader>
          <Text customStyle={{ "font-weight": "bold", "padding-top": "0" }}>
            $32.00
          </Text>
          <ColorContainer>
            <ParentSize>
              <Color customStyle={{ "background-color": "#f1e7e6" }} />
              <Color customStyle={{ "background-color": "#d0edff" }} />
              <Color customStyle={{ "background-color": "#bfbfbf" }} />
            </ParentSize>
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
            <ParentSize>
              <Size>S</Size>
              <Size>M</Size>
              <Size>L</Size>
              <Size>XL</Size>
            </ParentSize>
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
          <SizeContainer>
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
          </SizeContainer>
          <SizeContainer>
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
          </SizeContainer>
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
  margin: 0 auto;

  position: fixed;
  left: 0;
  right: 0;
  top: 10%;
  height: 500px;
  width: 60%;
  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.5s ease-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-120%)")};

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    right: 10%;
  }

  @media screen and (max-width: 991px) {
    right: 8%;
  }
  @media screen and (max-width: 590px) {
    justify-content: center;
    flex-direction:column;
  }
`;

const ImageContainer = styled.div`
  width: 45%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 590px) {
    height: 50%;
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 50%;
  overflow-y: auto;
  padding-bottom: 100px;
  padding-top:40px;
  @media screen and (max-width: 590px) {
    width: 100%;
    text-align: center;
   
  }
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 10px;
  width:200px;
`;

const QuantityAction = styled(InputGroup.Text)`
  background-color: white;
  cursor: pointer;
  width:50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
`;

const DrawerHeader = styled.div`
  
`;

const ColorContainer = styled.div`
  display: flex;
  justify-content: start;

  margin-bottom: 10px;
  @media screen and (max-width: 590px) {
    justify-content: center;
  }
`;

const ParentSize = styled.div`
  display: flex;
  justify-content: center;

  & Size{
    margin-right:5px;
  }
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
  justify-content: start;

  padding: 15px 0 8px 0;
  @media screen and (max-width: 590px) {
    justify-content: center;
  }
`;
