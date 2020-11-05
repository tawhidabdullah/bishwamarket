import * as types from './types';

 export const addProduct = (item) => ({
   type: types.ADD_PRODUCT,
   payload: {
     item,
   },
 });


