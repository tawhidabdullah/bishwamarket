import * as types from './types';
import { createReducer } from '../../utils';

const initialState = [];

const cartReducer = createReducer(initialState)({
  [types.ADD_PRODUCT]: (state, action) => {
    const { item } = action.payload;
   console.log("redux")
    if (item) {
      return [item];
    }

    return [...state];
  },

 
});

export default cartReducer;
