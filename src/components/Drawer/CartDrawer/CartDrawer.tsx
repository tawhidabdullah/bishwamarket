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

// import toggle drawer action
import { toggleCartDrawer } from "../../../redux/global/global.actions";

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
              <span>
                <ImageContainer>
                  <img src={wishListImage} alt="wish list image" />
                </ImageContainer>
              </span>

              <WishListText>
                <span>Item name</span>
                <span>1 X $250</span>
              </WishListText>
              <span>
                <i className="fa fa-trash"></i>
              </span>
            </DrawerItem>

            <DrawerItem>
              <span>
                <ImageContainer>
                  <img src={wishListImage} alt="wish list image" />
                </ImageContainer>
              </span>

              <WishListText>
                <span>Item name</span>
                <span>1 X $250</span>
              </WishListText>

              <span>
                <i className="fa fa-trash"></i>
              </span>
            </DrawerItem>

            <DrawerItem>
              <span>
                <ImageContainer>
                  <img src={wishListImage} alt="wish list image" />
                </ImageContainer>
              </span>

              <WishListText>
                <span>Item name</span>
                <span>1 X $250</span>
              </WishListText>

              <span>
                <i className="fa fa-trash"></i>
              </span>
            </DrawerItem>
          </DrawerItemContainer>
          <CTAContainer>
            <SubTotalContainer>
              <span>Subtotal</span>
              <span>$220</span>
            </SubTotalContainer>

            <ButtonContainer>
              <DrawerButton
                wrapperStyle={{
                  margin: "unset",
                  width: "unset",
                }}
                customStyle={{
                  "font-weight": "bold",
                  "margin-right": "5px",
                  padding: "10px",
                }}
              >
                View Cart
              </DrawerButton>

              <div
                onClick={() => {
                  gotoPage("/checkout");
                  toggleCartDrawer();
                }}
              >
                <DrawerButton
                  wrapperStyle={{
                    margin: "unset",
                    width: "unset",
                  }}
                  customStyle={{
                    "font-weight": "bold",
                    "margin-left": "5px",
                    padding: "10px",
                  }}
                >
                  Checkout
                </DrawerButton>
              </div>
            </ButtonContainer>
          </CTAContainer>
          {/* 
          <DrawerButton customStyle={{ "font-weight": "bold" }}>
            View Wishlist
          </DrawerButton> */}
        </CartContainer>
      </CartDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDrawer: () => dispatch(toggleCartDrawer()),
});

export default connect(null, mapDispatchToProps)(CartDrawer);

const CartDrawerContainer = styled.div`
  font-family: PT Sans, sans-serif;
  position: fixed;
  width: 100%;
  /* max-width: 70%; */
  height: 208px;
  overflow-x: hidden;
  overflow-y: scroll;
  /*  right: 0; */
  /* top: 70%; */
  bottom: 0;
  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.6s ease-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(100%)")};

  @media screen and (max-width: 1199px) {
    height: 100%;
    left: 0;
    bottom: unset;
    width: 22rem;
    transition: transform 0.3s ease-out;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(-100%)"};
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%unset;
`;

const CartContainer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  /* padding-bottom: 30px; */

  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;

const DrawerItemContainer = styled.div`
  /* padding: 20px 10px 20px 10px; */
  display: flex;
  /* flex-direction: column; */

  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;

const CTAContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1199px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const DrawerItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #ddd;
  height: 100px;
  padding: 10px;
  & span {
    cursor: pointer;
  }

  & span:nth-child(2) {
    font-weight: bold;
  }
`;

const WishListText = styled.span`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  font-size: 14px;
  padding: 15px;
  margin-left: -20px;
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
