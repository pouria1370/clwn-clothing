import { createSelector } from "reselect";

const stateCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [stateCart],
  cart => cart.cartItems
);
export const quantitySelector = createSelector(
  [selectCartItems],
   (cartItems) => 
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
  
);
