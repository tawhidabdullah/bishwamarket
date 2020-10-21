import React from "react";
import { connect } from "react-redux";

// import drawer
import { SigninDrawer } from "../components/Drawer/SigninDrawer";
import { WishListDrawer } from "../components/Drawer/WishListDrawer";
import { CartDrawer } from "../components/Drawer/CartDrawer";
import { NavDrawer } from "../components/Drawer/NavDrawer";
import { CategoryDrawer } from "../components/Drawer/CategoryDrawer";
import { QuickViewDrawer } from "../components/Drawer/QuickviewDrawer";

// import fixed components
import { Navigation } from "../containers/Navigation";
import { Footer } from "../components/Footer";

// import toggle drawer actions
import {
  toggleCategoryDrawer,
  toggleSigninDrawer,
  toggleWishlistDrawer,
  toggleCartDrawer,
  toggleNavigationDrawer,
  toggleQuickviewDrawer,
} from "../redux/global/global.actions";

const Layout = ({ children, globals }) => {
  const {
    openSigninDrawer,
    openWishlistDrawer,
    openCartDrawer,
    openNavigationDrawer,
    openCategoryDrawer,
    openQuickviewDrawer,
  } = globals;

  return (
    <>
      <SigninDrawer open={openSigninDrawer} />
      <WishListDrawer open={openWishlistDrawer} />
      <CartDrawer open={openCartDrawer} />
      <NavDrawer open={openNavigationDrawer} />
      <CategoryDrawer open={openCategoryDrawer} />
      <QuickViewDrawer open={openQuickviewDrawer} />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  globals: state.globals,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSigninDrawer: () => dispatch(toggleSigninDrawer()),
  toggleWishlistDrawer: () => dispatch(toggleWishlistDrawer()),
  toggleCartDrawer: () => dispatch(toggleCartDrawer()),
  toggleNavigationDrawer: () => dispatch(toggleNavigationDrawer()),
  toggleCategoryDrawer: () => dispatch(toggleCategoryDrawer()),
  toggleQuickviewDrawer: () => dispatch(toggleQuickviewDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
