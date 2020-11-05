// @ts-nocheck

import React, {useEffect, Fragment, useState } from "react";
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

// toggle cart action
import { globalOperations } from "../../../state/ducks/globalState";

// import cart store
import { cartOperations, cartSelectors } from "../../../state/ducks/cart";

import {useSelector} from "react-redux"
const QuickviewDrawer = ({
  open,
  toggleQuickviewDrawer,
  cartItems,
  changeQuantity,
  addToCart,
}) => {
  const Item = useSelector((state) => state.Item);
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   if (Item.length > 0) {
  //     Item[0].quantity = 1;
  //     console.log(Item[0], "boss");
  //   }
  // }, [Item.length]);

  // const handleChangeQuantity = async (value) => {
  //   if (value === "minus") {
  //     if (quantity === 1) return;
  //      let quant = quantity - 1;
  //     setQuantity(quant);

  //   } else {
  //     let quant = quantity + 1;
  //      setQuantity(quant);

  //   }

  // };
const handleCart=()=>{
  /// addToCart(Item[0]);
   console.log("YYYYYYY")
}
  return (
    <Fragment>
      <BackDrop show={open} clicked={() => toggleQuickviewDrawer()} />
<<<<<<< HEAD
      <QuickviewDrawerContainer show={open}>
        <ImageContainer>
          <img src={quickViewImage} alt="quick product preview" />
          <Text clickAction={() => toggleQuickviewDrawer()}>
            <Text1>&#10005;</Text1>
          </Text>
        </ImageContainer>

        <DetailsContainer>
          <DrawerHeader>
            <Text>Woman T-shirt</Text>
            <Text clickAction={() => toggleQuickviewDrawer()}>
              <Text2>&#10005;</Text2>
            </Text>
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
=======

      {Item.length > 0 ? (
        <QuickviewDrawerContainer show={open}>
          <ImageContainer>
            <img src={Item[0].cover} alt="quick product preview" />
            <Text clickAction={() => toggleQuickviewDrawer()}>
              <Text1>&#10005;</Text1>
            </Text>
          </ImageContainer>
          <DetailsContainer>
            <DrawerHeader>
              <Text>{Item[0].name}</Text>
              <Text clickAction={() => toggleQuickviewDrawer()}>
                <Text2>&#10005;</Text2>
              </Text>
            </DrawerHeader>
            <Text customStyle={{ "font-weight": "bold", "padding-top": "0" }}>
              {Item[0].price || ""}
            </Text>

            {/* <ColorContainer>
              <ParentSize>
                <Color customStyle={{ "background-color": "#f1e7e6" }} />
                <Color customStyle={{ "background-color": "#d0edff" }} />
                <Color customStyle={{ "background-color": "#bfbfbf" }} />
              </ParentSize>
            </ColorContainer> */}
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
                {Item[0].description || ""}
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
>>>>>>> 3b905ffb2b8febd865fed900e99e28906877e8d9
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
<<<<<<< HEAD
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
=======
            <SizeContainer>
              <QuantityBox>
                <InputGroup>
                  {/* <InputGroup.Prepend> */}
                  {/* <QuantityAction
                      onClick={() => handleChangeQuantity("plus")}
                    >
                      <i className="fa fa-angle-left"></i>
                    </QuantityAction>
                  </InputGroup.Prepend>
                  <div style={{ padding: "10px" }}>{quantity}</div>
                  <InputGroup.Append>
                    <QuantityAction
                      onClick={() => handleChangeQuantity("minus")}
                    >
                      <i className="fa fa-angle-right"></i>
                    </QuantityAction> */}
                  {/* </InputGroup.Append> */}
                </InputGroup>
              </QuantityBox>
            </SizeContainer>
            <SizeContainer>
              <ButtonContainer >
                {/* <DrawerButton
                  customStyle={{
                    "font-weight": "bold",
                    "margin-right": "7px",
                    padding: "7px",
                  }}
                >
                  Add To Cart
                </DrawerButton> */}
                {/* <DrawerButton
                  customStyle={{
                    "font-weight": "bold",
                    "margin-left": "7px",
                    padding: "7px",
                  }}
                >
                  View Details
                </DrawerButton> */}
              </ButtonContainer>
            </SizeContainer>
          </DetailsContainer>
        </QuickviewDrawerContainer>
      ) : (
        <>Loading </>
      )}
>>>>>>> 3b905ffb2b8febd865fed900e99e28906877e8d9
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleQuickviewDrawer: () => dispatch(toggleQuickviewDrawer()),
  changeQuantity: cartOperations.changeQuantity,
  addToCart:cartOperations.addToCart,
});

export default connect(null, mapDispatchToProps)(QuickviewDrawer);
const Text1 = styled.div`
  cursor: pointer;
  @media only screen and (min-width: 590px) {
   display:none;
  }
`;
const Text2 = styled.div`
  cursor: pointer;
  @media only screen and (max-width: 590px) {
    display: none;
  }
`;
const QuickviewDrawerContainer = styled.div`


  position: fixed;
  left: 0;
  right: 0;
  top: 0%;
  height: 500px;
  width: 70%;
    margin: 50px auto;
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
  display: flex;
  justify-content: space-between;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 590px) {
    height: 50%;
    width: 100%;

    & img {
      width: 80%;
      height: 100%;
    }
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 50%;
  overflow-y: auto;
  padding-bottom: 40px;
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
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 590px) {
    justify-content: center;;
  }
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
