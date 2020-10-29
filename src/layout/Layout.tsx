import React from "react";
import { connect } from "react-redux";

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

// import fixed components
import { Navigation } from "../containers/Navigation";
import { Footer } from "../components/Footer";

// import toggle drawer actions
// import {
//   toggleCategoryDrawer,
//   toggleSigninDrawer,
//   toggleWishlistDrawer,
//   toggleCartDrawer,
//   toggleNavigationDrawer,
//   toggleQuickviewDrawer,
//   toggleSettingsDrawer,
//   toggleSearchDrawer,
// } from "../redux/global/global.actions";

// import {
//   toggleCategoryDrawer,
//   toggleSigninDrawer,
//   toggleWishlistDrawer,
//   toggleCartDrawer,
//   toggleNavigationDrawer,
//   toggleQuickviewDrawer,
//   toggleSettingsDrawer,
//   toggleSearchDrawer,
// } from "../state/ducks/globalState/actions";

const Layout = ({ children, globalState }) => {
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

  return (
    <>
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
      {children}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  globalState: state.globalState,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleSigninDrawer: () => dispatch(toggleSigninDrawer()),
//   toggleWishlistDrawer: () => dispatch(toggleWishlistDrawer()),
//   toggleCartDrawer: () => dispatch(toggleCartDrawer()),
//   toggleNavigationDrawer: () => dispatch(toggleNavigationDrawer()),
//   toggleCategoryDrawer: () => dispatch(toggleCategoryDrawer()),
//   toggleQuickviewDrawer: () => dispatch(toggleQuickviewDrawer()),
//   toggleSettingsDrawer: () => dispatch(toggleSettingsDrawer()),
//   toggleSearchDrawer: () => dispatch(toggleSearchDrawer()),
// });

export default connect(mapStateToProps)(Layout);
