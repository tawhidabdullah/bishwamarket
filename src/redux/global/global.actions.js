// import types
import GlobalTypes from "./global.types";

// global actions

// open/close signin drawer
export const toggleSigninDrawer = () => ({
  type: GlobalTypes.TOGGLE_SIGNIN_DRAWER,
});

// open/close cart drawer
export const toggleCartDrawer = () => ({
  type: GlobalTypes.TOGGLE_CART_DRAWER,
});

// open/close wishlist drawer
export const toggleWishlistDrawer = () => ({
  type: GlobalTypes.TOGGLE_WISHLIST_DRAWER,
});

// open/close navigation drawer
export const toggleNavigationDrawer = () => ({
  type: GlobalTypes.TOGGLE_NAVIGATION_DRAWER,
});

// open/close category drawer
export const toggleCategoryDrawer = () => ({
  type: GlobalTypes.TOGGLE_CATEGORY_DRAWER,
});
