import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// import drawer
import { SigninDrawer } from "../components/Drawer/SigninDrawer";
import { WishListDrawer } from "../components/Drawer/WishListDrawer";
import { CartDrawer } from "../components/Drawer/CartDrawer";
import { NavDrawer } from "../components/Drawer/NavDrawer";
import { CategoryDrawer } from "../components/Drawer/CategoryDrawer";
import { QuickViewDrawer } from "../components/Drawer/QuickviewDrawer";
import { BottomDrawer } from "../components/Drawer/BottomDrawer";
import { SettingsDrawer } from "../components/Drawer/SettingsDrawer";
import { SearchDrawer } from "../components/Drawer/SearchDrawer";
import { CartIcon } from "../components/common/CartIcon";

// import fixed components
import { Navigation } from "../containers/Navigation";
import { Footer } from "../components/Footer";

import ScrollTopArrow from "../components/ScrollTopArrow";

// import redux opts
import { globalOperations } from "../state/ducks/globalState";

const Layout = ({ children }) => {
  const globalState = useSelector((state) => state.globalState);
  const dispatch = useDispatch();
  const {
    openSigninDrawer,
    openWishlistDrawer,
    openCartDrawer,
    openNavigationDrawer,
    openCategoryDrawer,
    openQuickviewDrawer,
    openSettingsDrawer,
    openSearchDrawer,
  } = globalState;
  const history = useHistory();

  useEffect(() => {
    history.listen((location) => {
      if (history.action === "POP" || history.action === "PUSH") {
        if (location.pathname !== "/") {
          dispatch(globalOperations.toggleShopByCategory());
        }
      }
    });
  });

  return (
    <>
      <ScrollTopArrow />
      <SigninDrawer open={openSigninDrawer} />
      <WishListDrawer open={openWishlistDrawer} />
      <CartDrawer open={openCartDrawer} />
      <NavDrawer open={openNavigationDrawer} />
      <CategoryDrawer open={openCategoryDrawer} />
      <QuickViewDrawer open={openQuickviewDrawer} />
      <SettingsDrawer open={openSettingsDrawer} />
      <SearchDrawer open={openSearchDrawer} />
      <BottomDrawer />
      <Navigation />
      <CartIcon />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
