// import global types
import GlobalTypes from "./global.types";

const INITIAL_STATE = {
  openSigninDrawer: false,
  openWishlistDrawer: false,
  openCartDrawer: false,
  openNavigationDrawer: false,
  openCategoryDrawer: false,
  openQuickviewDrawer: false,
};

const GlobalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GlobalTypes.TOGGLE_SIGNIN_DRAWER:
      return {
        ...state,
        openSigninDrawer: !state.openSigninDrawer,
      };

    case GlobalTypes.TOGGLE_WISHLIST_DRAWER:
      return {
        ...state,
        openWishlistDrawer: !state.openWishlistDrawer,
      };

    case GlobalTypes.TOGGLE_CART_DRAWER:
      return {
        ...state,
        openCartDrawer: !state.openCartDrawer,
      };

    case GlobalTypes.TOGGLE_NAVIGATION_DRAWER:
      return {
        ...state,
        openNavigationDrawer: !state.openNavigationDrawer,
      };

    case GlobalTypes.TOGGLE_CATEGORY_DRAWER:
      return {
        ...state,
        openCategoryDrawer: !state.openCategoryDrawer,
      };

    case GlobalTypes.TOGGLE_QUICKVIEW_DRAWER:
      return {
        ...state,
        openQuickviewDrawer: !state.openQuickviewDrawer,
      };

    default:
      return state;
  }
};

export default GlobalReducer;
