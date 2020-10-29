export function productPositionInCart(cart, givenCartItem) {
  const index = cart.findIndex(cartItem => cartItem.product === givenCartItem.product && cartItem.variation === givenCartItem.variation);
  return index;
}

export function newCartItem(product, quantity, isSelectedForCheckout) {
  return {
    product,
    quantity,
    isSelectedForCheckout,
  };
}
