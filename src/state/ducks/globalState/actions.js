import * as types from "./types";

// TODO should be one action for all toggles

// global actions

// open/close signin drawer
export const toggleSigninDrawer = () => ({
  type: types.TOGGLE_SIGNIN_DRAWER,
});

// open/close cart drawer
export const toggleCartDrawer = () => ({
  type: types.TOGGLE_CART_DRAWER,
});

// open/close wishlist drawer
export const toggleWishlistDrawer = () => ({
  type: types.TOGGLE_WISHLIST_DRAWER,
});

// open/close navigation drawer
export const toggleNavigationDrawer = () => ({
  type: types.TOGGLE_NAVIGATION_DRAWER,
});

// open/close category drawer
export const toggleCategoryDrawer = () => ({
  type: types.TOGGLE_CATEGORY_DRAWER,
});

// open/close quick view drawer
export const toggleQuickviewDrawer = () => ({
  type: types.TOGGLE_QUICKVIEW_DRAWER,
});

// open/close settings drawer
export const toggleSettingsDrawer = () => ({
  type: types.TOGGLE_SETTINGS_DRAWER,
});

// open/close search drawer
export const toggleSearchDrawer = () => ({
  type: types.TOGGLE_SEARCH_DRAWER,
});

export const changeActiveCategory = (category) => ({
  type: types.CHANGE_ACTIVE_CATEGORY,
  payload: {
    category,
  },
});

export const toggleLeftMenuButton = () => ({
  type: types.IS_LEFT_MENU_BUTTON_ACTIVE,
});

export const cacheCategoryList = (categories) => ({
  type: types.CACHE_CATEGORY_LIST,
  payload: {
    categories,
  },
});

export const toggleShopByCategory = () => ({
  type: types.TOGGLE_SHOP_BY_CATEGORY,
});


export const closeShopByCategory = () => ({
  type: types.CLOSE_SHOP_BY_CATEGORY,
});

export const openShopByCategory = () => ({
  type: types.OPEN_SHOP_BY_CATEGORY,
});