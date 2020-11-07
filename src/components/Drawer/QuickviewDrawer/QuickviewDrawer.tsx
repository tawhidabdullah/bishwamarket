// @ts-nocheck
import React, { useEffect, Fragment, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";

// import elements
import { BackDrop } from "../../elements/Backdrop";
import { Text } from "../../elements/Text";
import { Color, Size } from "../../elements/RoundButton/RoundButton";

// import toggle drawer action
import { toggleQuickviewDrawer } from "../../../state/ducks/globalState/actions";

// import drawer button
import { DrawerButton } from "../../common/Button/DrawerButton";

// toggle cart action
import { globalOperations } from "../../../state/ducks/globalState";

// import cart store
import { cartOperations, cartSelectors } from "../../../state/ducks/cart";

import { useAlert } from "react-alert";

import { useSelector } from "react-redux";

// import hooks
import { useHandleFetch } from "../../../hooks";
import { useProductVariation } from "./hooks";

// import utils
import { getPricingOptions } from "../../../utils";

const QuickviewDrawer = ({
  open,
  toggleQuickviewDrawer,
  cartItems,
  changeQuantity,
  addToCart,
  removeFromCart,
  session,
}) => {
  const alert = useAlert();
  const Item = useSelector((state) => state.Item);

  // state for default item quantity
  const [quantity, setQuantity] = useState(1);

  // handler for increasing and decreasing quantity
  const addQuantity = () => setQuantity(quantity + 1);
  const minusQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const {
    price,
    attributes,
    setSelectedVariationId,
    selectedVariationId,
  } = useProductVariation(Item?.[0]?.pricing);

  // this hook send POST request to server to add item to cart
  const [addToCartState, handleAddtoCartFetch] = useHandleFetch(
    [],
    "addtoCart"
  );

  console.log("attributes", attributes);

  useEffect(() => {
    if (Item.length > 0) {
      Item[0].quantity = 1;
    }
  }, [Item.length]);

  const handleAddToCart = () => {
    if (!Item[0].inStock) {
      alert.error("Out of stock");
      return;
    }

    const cartItem = {
      id: Item[0]._id,
      product: Item[0]._id,
      variation: selectedVariationId,
      name: Item[0].name,
      quantity: quantity,
      cover: Item[0].cover,
      price,
      url: Item[0].url,
    };

    addToCart && addToCart(cartItem);
    toggleQuickviewDrawer();
    alert.success("Product added to the cart");

    if (session.isAuthenticated) {
      (async () => {
        const addToCartRes: any = await handleAddtoCartFetch({
          body: {
            items: [cartItem],
          },
        });

        if (addToCartRes && Object.keys(addToCartRes).length === 0) {
          removeFromCart(cartItem);
          alert.error("Something went wrong!");
        }
      })();
    }
  };

  return (
    <Fragment>
      <BackDrop show={open} clicked={() => toggleQuickviewDrawer()} />

      {Item.length > 0 ? (
        <QuickviewDrawerContainer show={open}>
          <ImageContainer>
            <img src={Item[0].cover} alt="quick product preview" />
            <Text clickAction={() => toggleQuickviewDrawer()}>
              <Text1>&#10005;</Text1>
            </Text>
          </ImageContainer>
          <DetailsContainer>
            {/* <Text clickAction={() => toggleQuickviewDrawer()}> */}
            <Text2 onClick={() => toggleQuickviewDrawer()}>&#10005;</Text2>
            {/* </Text> */}
            <DrawerHeader>
              <Text>{Item[0].name}</Text>
            </DrawerHeader>
            <Text customStyle={{ "font-weight": "bold", "padding-top": "0" }}>
              Price: ${price}
            </Text>

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
              <div dangerouslySetInnerHTML={{ __html: Item[0].description }} />
            </ProductDetailTextContainer>
            <SizeContainer
              customStyle={{
                padding: "unset",
                padding: "20px 0 15px 0",
              }}
            >
              <ParentSize>
                {attributes.length > 0 &&
                  attributes.map((attribute) => {
                    return (
                      <Size
                        customStyle={{
                          background:
                            attribute.value === selectedVariationId
                              ? "#ddd"
                              : "#fff",
                        }}
                        onClick={() => {
                          setSelectedVariationId(attribute.value);
                          setQuantity(1);
                        }}
                      >
                        {attribute.label}
                      </Size>
                    );
                  })}
              </ParentSize>
            </SizeContainer>

            <QuantityCounterBox>
              <p>Quantity</p>
              <div>
                <span onClick={addQuantity}>
                  <i className="fa fa-plus"></i>
                </span>
                <span>{quantity}</span>
                <span onClick={minusQuantity}>
                  <i className="fa fa-minus"></i>
                </span>
              </div>
            </QuantityCounterBox>

            <SizeContainer>
              <ButtonContainer>
                <DrawerButton
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart();
                  }}
                  customStyle={{
                    "font-weight": "bold",
                    "margin-right": "7px",
                    padding: "7px",
                  }}
                >
                  Add To Cart
                </DrawerButton>
              </ButtonContainer>
            </SizeContainer>
          </DetailsContainer>
        </QuickviewDrawerContainer>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

const QuantityCounterBox = styled.div`
  & p {
    font-weight: bold;
    margin-bottom: 0;
  }

  & div {
    margin-top: 10px;
    border: 1px solid #eee;
    width: fit-content;
  }

  & div span {
    padding: 5px 20px;
  }

  & div span:nth-child(2n + 1) {
    cursor: pointer;
    background-color: #eee;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  toggleQuickviewDrawer: () => dispatch(toggleQuickviewDrawer()),
  changeQuantity: cartOperations.changeQuantity,
  addToCart: (value) => dispatch(cartOperations.addToCart(value)),
  removeFromCart: (value) => dispatch(cartOperations.removeFromCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickviewDrawer);

const Text1 = styled.div`
  cursor: pointer;
  @media only screen and (min-width: 590px) {
    display: none;
  }
`;
const Text2 = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: right;
  padding-right: 25px;

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
    flex-direction: column;
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
  padding-top: 40px;
  @media screen and (max-width: 590px) {
    width: 100%;
    text-align: center;
  }
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 200px;
`;

const QuantityAction = styled(InputGroup.Text)`
  background-color: white;
  cursor: pointer;
  width: 50px;
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
    justify-content: center;
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

  & span {
    margin-right: 20px;
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

  ${(props) => props.customStyle}
  @media screen and (max-width: 590px) {
    justify-content: center;
  }
`;
