import React, { useState } from "react";

// import drawer
import { SigninDrawer } from "../components/Drawer/SigninDrawer";
import { WishListDrawer } from "../components/Drawer/WishListDrawer";
import { CartDrawer } from "../components/Drawer/CartDrawer";
import { NavDrawer } from "../components/Drawer/NavDrawer";
import { CategoryDrawer } from "../components/Drawer/CategoryDrawer";

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

  // state for NavDrawer
  const [navDrawer, setNavDrawer] = useState(false);
  // handler for open/close nav drawer
  const openNavDrawer = () => setNavDrawer(true);
  const closeNavDrawer = () => setNavDrawer(false);

  // state for category drawer
  const [categoryDrawer, setCategoryDrawer] = useState(false);
  // handler for open/close category drawer
  const openCategoryDrawer = () => setCategoryDrawer(true);
  const closeCategoryDrawer = () => setCategoryDrawer(false);

  return (
    <>
      <SigninDrawer open={signinDrawer} handleClose={closeSigninDrawer} />
      <WishListDrawer open={wishtList} handleClose={closeWishListnDrawer} />
      <CartDrawer open={cartDrawer} handleClose={closeCartDrawer} />
      <NavDrawer open={navDrawer} handleClose={closeNavDrawer} />
      <CategoryDrawer open={categoryDrawer} handleClose={closeCategoryDrawer} />
      <Navigation
        openSigninDrawer={openSigninDrawer}
        openWishListDrawer={openWishListnDrawer}
        openCartDrawer={openCartDrawer}
        openNavDrawer={openNavDrawer}
        openCategoryDrawer={openCategoryDrawer}
      />
      {children}
    </>
  );
};

export default Layout;
