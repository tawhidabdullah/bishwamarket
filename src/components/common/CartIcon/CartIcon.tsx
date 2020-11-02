import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// shopping bag image
// import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";
import { ReactComponent as ShoppingIconSVG } from "../../../assets/shopping-bag.svg";

// import redux actions
import { globalOperations } from "../../../state/ducks/globalState";
import { cartSelectors } from "../../../state/ducks/cart";

function CartIcon({ toggleCartDrawer, cartItems, totalPrice }) {
  return (
    <a onClick={toggleCartDrawer}>
      <ShoppingIconContainer>
        <ShoppingIcon />

        <ItemCount>{cartItems.length}</ItemCount>
        <TotalPrice>${totalPrice}</TotalPrice>
      </ShoppingIconContainer>
    </a>
  );
}

const mapStateToProps = (state) => ({
  session: state.session,
  cartItems: state.cart,
  totalPrice: cartSelectors.getTotalPriceOfCartItems(state.cart),
});

const mapDispatchToProps = {
  toggleCartDrawer: globalOperations.toggleCartDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

const TotalPrice = styled.p`
  font-size: inherit;
  color: #fff;
  margin-bottom: 0;
`;

const ShoppingIconContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  cursor: pointer;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  z-index: 21;
  background: #ff6000;
  opacity: 1;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  top: 30%;
  left: 45%;
  color: #fff;
`;

const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 40px;
  height: 40px;
`;
