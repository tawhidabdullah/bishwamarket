//@ts-nocheck
import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// import backdrop element
import { BackDrop } from "../../elements/Backdrop";
// import button
import { DrawerButton } from "../../common/Button/DrawerButton";
// import drawer header element
import DrawerHeader from "../DrawerElements/DrawerHeader";

// import dummy image
import wishListImage from "../../../assets/wishListDrawerImage.jpg";

// toggle cart action
import { globalOperations } from "../../../state/ducks/globalState";

const buttonStyles = {
  wrapperStyle: {
    margin: "unset",
    width: "unset",
  },

  customStyle: {
    "font-weight": "bold",
    "margin-right": "5px",
    padding: "10px",
  },
};

const CartDrawer = ({ open, toggleCartDrawer }) => {
  const history = useHistory();

  const gotoPage = (path) => history.push(path);

  return (
    <Fragment>
      <BackDrop show={open} clicked={() => toggleCartDrawer()} />
      <CartDrawerContainer show={open}>
        <DrawerHeader
          customStyle={{ "font-size": "18px", "font-weight": "normal" }}
          content="MY CART"
          handleClose={() => toggleCartDrawer()}
        />

        <CartContainer>
          <DrawerItemContainer>
            <DrawerItem>
              <QuantityContainer>
                <i className="fa fa-plus" />
                <Quantity>1</Quantity>
                <i className="fa fa-minus" />
              </QuantityContainer>

              <Image src={wishListImage} />

              <ItemInfo>
                <ItemHeader>White Cotton Shirt</ItemHeader>
                <Price>$50.65</Price>
              </ItemInfo>

              <CartItemTotal>$50.65</CartItemTotal>

              <RemoveItem>
                <i className="fa fa-trash" />
              </RemoveItem>
            </DrawerItem>
          </DrawerItemContainer>
          <CTAContainer>
            <SubTotalContainer>
              <span>Subtotal</span>
              <span>$220</span>
            </SubTotalContainer>

            <ButtonContainer>
              <div
                onClick={() => {
                  gotoPage("/cart");
                  toggleCartDrawer();
                }}
              >
                <DrawerButton
                  wrapperStyle={buttonStyles.wrapperStyle}
                  customStyle={buttonStyles.customStyle}
                >
                  View Cart
                </DrawerButton>
              </div>

              <div
                onClick={() => {
                  gotoPage("/checkout");
                  toggleCartDrawer();
                }}
              >
                <DrawerButton
                  wrapperStyle={buttonStyles.wrapperStyle}
                  customStyle={buttonStyles.customStyle}
                >
                  Checkout
                </DrawerButton>
              </div>
            </ButtonContainer>
          </CTAContainer>
        </CartContainer>
      </CartDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = {
  toggleCartDrawer: globalOperations.toggleCartDrawer,
};

export default connect(null, mapDispatchToProps)(CartDrawer);

const RemoveItem = styled.span`
  margin-right: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: normal;
`;

const CartItemTotal = styled.h5`
  color: #071029;
  font-weight: 700;
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-right: 15px !important;
  min-width: 30px;
`;

const Price = styled.h5`
  max-width: 120px;
  color: #071029;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const ItemHeader = styled.h4`
  max-width: 120px;
  color: #071029;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const QuantityContainer = styled.div`
  background-color: #e7d59e;
  padding: 6px;
  border-radius: 35px;
  margin-right: 20px;

  & i {
    cursor: pointer;
  }
`;

const Quantity = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 0;
`;

const ItemInfo = styled.div`
  margin: 0 15px;
  flex: 1 1;
`;

const CartDrawerContainer = styled.div`
  font-family: PT Sans, sans-serif;
  position: fixed;
  width: 28rem;
  height: 100%;

  overflow-x: hidden;
  overflow-y: scroll;
  right: 0;
  top: 0;

  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.6s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Image = styled.img`
  cursor: pointer;
  width: 70px;
  height: auto;
  vertical-align: middle;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  width: 100%;
`;

const CartContainer = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  padding-bottom: 30px;
  flex-direction: column;
`;

const DrawerItemContainer = styled.div`
  /* height: calc(100vh - 50px); */
  overflow-y: auto;
  margin-bottom: 40px;
  /* padding-bottom: 100px; */
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DrawerItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  font-size: 14px;
  font-weight: bold;
  color: #999999;
  border-top: 2px solid #eee;
  border-bottom: 2px solid #ddd;
`;
