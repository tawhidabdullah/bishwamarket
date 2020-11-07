import React from "react";
import styled from "styled-components";

// import header element
import { PageHeader } from "../../components/common/PageHeader";

// import wishlist container
import { Wishlist } from "../../containers/Wishlist";

const WishlistPage = () => {
  return (
    <WishlistContainer>
      <PageHeader>WISHLIST</PageHeader>
      <Wishlist />
    </WishlistContainer>
  );
};

export default WishlistPage;

const WishlistContainer = styled.section``;
