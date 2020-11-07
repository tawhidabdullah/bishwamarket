import * as types from './types';
import * as utils from './utils';
import { createReducer } from '../../utils';

/* State shape
[
    {
        product,
        quantity,
    }
]
*/

const initialState = [];

const cartReducer = createReducer(initialState)({
  [types.TOGGLE]: (state, action) => {
    const { cartItem } = action.payload;
    const index = utils.productPositionInCart(state, cartItem);
    if (index === -1) {
      return [
        cartItem,
        ...state,
      ];
    }

    const tempArrayWithOutOldProduct = state.filter(
      (item) => item.product !== cartItem.product
    );

    return tempArrayWithOutOldProduct;
  },

  
  [types.ADD_PRODUCTS_TO_CART]: (state, action) => {
    const { cartItems } = action.payload;

    if (cartItems.length > 0) {
      return cartItems;
    } else {
      return [...state];
    }
  },

  [types.SELECT_PRODUCT_FOR_CHECKOUT]: (state, action) => {
    const { product } = action.payload;

    const index = utils.productPositionInCart(state, product.product);
    if (index === -1) {
      return [...state, { ...product, isSelectedForCheckout: true }];
    } else if (index !== -1 && !product.isSelectedForCheckout) {
      const tempArrayWithOutOldProduct = state.filter(
        (item) => item.product.id !== product.product.id
      );

      return [
        ...tempArrayWithOutOldProduct,
        { ...product, isSelectedForCheckout: true },
      ];
    }

    const tempArrayWithOutOldProduct = state.filter(
      (item) => item.product.id !== product.product.id
    );

    return [
      ...tempArrayWithOutOldProduct,
      { ...product, isSelectedForCheckout: false },
    ];
  },
  
 

  [types.CHANGE_QUANTITY]: (state, action) => {
    const { givenCartItem, quantity } = action.payload;
    const index = utils.productPositionInCart(state, givenCartItem);


    const updatedItem = Object.assign({}, state[index], { quantity });
    return [...state.slice(0, index), updatedItem, ...state.slice(index + 1)];
  },
  [types.REMOVE]: (state, action) => {
    const { cartItem } = action.payload;
    const index = utils.productPositionInCart(state, cartItem);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  },
  [types.CLEAR]: () => [],
});

export default cartReducer;
