import React, { useState } from "react";

// import drawer
import { SigninDrawer } from "../components/Drawer/SigninDrawer";
import { WishListDrawer } from "../components/Drawer/WishListDrawer";
import { CartDrawer } from "../components/Drawer/CartDrawer";

// import navigation
import { Navigation } from "../containers/Navigation";

const Layout = ({ children }) => {
  // state for signin drawer
  const [signinDrawer, setSigninDrawer] = useState(false);
  // handler for open/close signin drawer
  const openSigninDrawer = () => setSigninDrawer(true);
  const closeSigninDrawer = () => setSigninDrawer(false);

  // state for wishlist drawer
  const [wishtList, setWishList] = useState(false);
  // handler for open/close signin drawer
  const openWishListnDrawer = () => setWishList(true);
  const closeWishListnDrawer = () => setWishList(false);

  // state for cart drawer
  const [cartDrawer, setCartDrawer] = useState(false);
  // handler for open/close cart drawer
  const openCartDrawer = () => setCartDrawer(true);
  const closeCartDrawer = () => setCartDrawer(false);

  return (
    <>
      <SigninDrawer open={signinDrawer} handleClose={closeSigninDrawer} />
      <WishListDrawer open={wishtList} handleClose={closeWishListnDrawer} />
      <CartDrawer open={cartDrawer} handleClose={closeCartDrawer} />
      <Navigation
        openSigninDrawer={openSigninDrawer}
        openWishListDrawer={openWishListnDrawer}
        openCartDrawer={openCartDrawer}
      />
      {children}
    </>
  );
};

export default Layout;
