import React, { useState } from "react";

// import drawer
import { SigninDrawer } from "../components/Drawer/SigninDrawer";
import { WishListDrawer } from "../components/Drawer/WishListDrawer";

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

  return (
    <>
      <SigninDrawer open={signinDrawer} handleClose={closeSigninDrawer} />
      <WishListDrawer open={wishtList} handleClose={closeWishListnDrawer} />
      <Navigation
        openSigninDrawer={openSigninDrawer}
        openWishListDrawer={openWishListnDrawer}
      />
      {children}
    </>
  );
};

export default Layout;
