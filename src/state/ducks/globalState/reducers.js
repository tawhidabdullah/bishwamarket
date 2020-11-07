import * as types from "./types";
import { createReducer } from "../../utils";

const initialState = {
  activeCategory: {},
  isLeftMenuActive: true,
  openSigninDrawer: false,
  openWishlistDrawer: false,
  openCartDrawer: false,
  openNavigationDrawer: false,
  openCategoryDrawer: false,
  openQuickviewDrawer: false,
  openSettingsDrawer: false,
  openSearchDrawer: false,
  categories: [],
};

const globalReducer = createReducer(initialState)({
  [types.CHANGE_ACTIVE_CATEGORY]: (state, action) => {
    const { category } = action.payload;

    if (category && Object.keys(category).length > 0) {
      return {
        ...state,
        activeCategory: category,
      };
    }

    return [...state];
  },
  [types.IS_LEFT_MENU_BUTTON_ACTIVE]: (state, action) => {
    return {
      ...state,
      isLeftMenuActive: !state.isLeftMenuActive,
    };
  },
  [types.CACHE_CATEGORY_LIST]: (state, action) => {
    const { categories } = action.payload;

    if (categories && Object.keys(categories).length > 0) {
      return {
        ...state,
        categories: categories,
      };
    }

    return [...state];
  },

  [types.TOGGLE_SIGNIN_DRAWER]: (state, action) => {
    console.log("from redux", state);
    return {
      ...state,
      openSigninDrawer: !state.openSigninDrawer,
    };
  },

  [types.TOGGLE_WISHLIST_DRAWER]: (state, action) => {
    return {
      ...state,
      openWishlistDrawer: !state.openWishlistDrawer,
    };
  },

  [types.TOGGLE_CART_DRAWER]: (state, action) => {
    return {
      ...state,
      openCartDrawer: !state.openCartDrawer,
    };
  },

  [types.TOGGLE_NAVIGATION_DRAWER]: (state, action) => {
    return {
      ...state,
      openNavigationDrawer: !state.openNavigationDrawer,
    };
  },

  [types.TOGGLE_CATEGORY_DRAWER]: (state, action) => {
    return {
      ...state,
      openCategoryDrawer: !state.openCategoryDrawer,
    };
  },

  [types.TOGGLE_QUICKVIEW_DRAWER]: (state, action) => {
    return {
      ...state,
      openQuickviewDrawer: !state.openQuickviewDrawer,
    };
  },

  [types.TOGGLE_SETTINGS_DRAWER]: (state, action) => {
    return {
      ...state,
      openSettingsDrawer: !state.openSettingsDrawer,
    };
  },

  [types.TOGGLE_SEARCH_DRAWER]: (state, action) => {
    return {
      ...state,
      openSearchDrawer: !state.openSearchDrawer,
    };
  },
});

export default globalReducer;
