//@ts-nocheck
import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

// import backdrop element
import { BackDrop } from "../../elements/Backdrop";
// import drawer header element
import DrawerHeader from "../DrawerElements/DrawerHeader";

// toggle cart action
import { globalOperations } from "../../../state/ducks/globalState";

// import cart store
import { cartOperations, cartSelectors } from "../../../state/ducks/cart";

// hooks for updating cart items
import { useHandleFetch } from "../../../hooks";

const CartDrawer = ({
  open,
  toggleCartDrawer,
  cartItems,
  totalPrice,
  changeQuantity,
  session,
  removeFromCart,
}) => {
  const history = useHistory();

  // this hook sends request to server for updating cart item
  const [updateCartItemState, handleUpdateCartItemFetch] = useHandleFetch(
    [],
    "updateCartItem"
  );

  // this hook sends request to server for updating cart item
  const [removeFromCartState, handleRemoveFromCartFetch] = useHandleFetch(
    [],
    "removeFromCart"
  );

  const gotoPage = (path) => history.push(path);

  const handleChangeQuantity = async (value, item) => {
    if (value === "minus") {
      if (item.quantity === 1) return;

      item.quantity = item.quantity - 1;

      changeQuantity(item, item.quantity);
    } else {
      item.quantity = item.quantity + 1;
      changeQuantity(item, item.quantity);
    }

    if (session.isAuthenticated) {
      await handleUpdateCartItemFetch({
        body: item,
      });
    }
  };

  const handleRemoveFromCart = async (item) => {
    removeFromCart(item);
    if (session.isAuthenticated) {
      await handleRemoveFromCartFetch({
        body: item,
      });
    }
  };

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
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item, idx) => (
                <DrawerItem key={idx}>
                  <QuantityContainer>
                    <i
                      className="fa fa-plus"
                      onClick={() => handleChangeQuantity("plus", item)}
                    />
                    <Quantity>{item.quantity}</Quantity>
                    <i
                      className="fa fa-minus"
                      onClick={() => handleChangeQuantity("minus", item)}
                    />
                  </QuantityContainer>

                  <Image src={item.cover} />

                  <ItemInfo>
                    <ItemHeader>{item.name}</ItemHeader>
                    <Price>৳ {item.price ? parseInt(item.price) : 0}</Price>
                  </ItemInfo>

                  <CartItemTotal>
                    ৳{" "}
                    {(item.price ? parseInt(item.price) : 0) *
                      (item.quantity ? parseInt(item.quantity) : 0)}
                  </CartItemTotal>

                  <RemoveItem onClick={() => handleRemoveFromCart(item)}>
                    <i className="fa fa-trash" />
                  </RemoveItem>
                </DrawerItem>
              ))}
          </DrawerItemContainer>
          <CartFooter>
            <CheckoutButton
              onClick={() => {
                gotoPage("/checkout");
                toggleCartDrawer();
              }}
            >
              <span>Checkout</span>
              <span>&#2547;&nbsp;{totalPrice}</span>
            </CheckoutButton>
          </CartFooter>
        </CartContainer>
      </CartDrawerContainer>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  session: state.session,
  totalPrice: cartSelectors.getTotalPriceOfCartItems(state.cart),
});

const mapDispatchToProps = {
  toggleCartDrawer: globalOperations.toggleCartDrawer,
  changeQuantity: cartOperations.changeQuantity,
  removeFromCart: cartOperations.removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDrawer);

const ScrollStyles = css`
  transition-duration: 0.5s;

  &::-webkit-scrollbar {
    width: 10px;
    height: 30px;
  }

  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 20px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const CheckoutButton = styled.div`
  background-color: #f77d0e;
  margin: 10px 25px;
  border-radius: 35px;
  padding: 0 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s;

  & span:first-child {
    color: #091436;
    font-size: 15px;
    font-weight: 700;
  }

  & span:nth-child(2) {
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    display: inline-block;
    border-radius: 40px;
    background-color: #091436;
    padding: 13px 25px;
    margin: 2px;
  }
`;

const CartFooter = styled.div`
  margin-top: 2rem;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1000;
`;

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

  /* overflow-x: hidden;
  overflow-y: scroll; */
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

const CartContainer = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  padding-bottom: 30px;
  flex-direction: column;
`;

const DrawerItemContainer = styled.div`
  height: calc(100vh - 50px);
  overflow-y: auto;
  margin-bottom: 40px;
  padding-bottom: 100px;

  ${ScrollStyles}
`;

const DrawerItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;
