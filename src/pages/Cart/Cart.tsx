import React from "react";
import styled from "styled-components";

// import header element
import { PageHeader } from "../../components/common/PageHeader";

// import wishlist container
import { Cart } from "../../containers/Cart";

const CartPage = () => {
  return (
    <CartContainer>
      <PageHeader>Cart</PageHeader>
      <Cart />
    </CartContainer>
  );
};

export default CartPage;

const CartContainer = styled.section``;
