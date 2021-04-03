import { createSelector } from "reselect";

const stateCart = (state) => state.cart;
export const hiddenSelector=createSelector(
    [stateCart],(cart)=>
        cart.hidden
    
)
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
// export const removeItemFromCart = createSelector(
//   [selectCartItems],
//    (cartItems) => 
//    cartItems.filter(item=>item.id!==cartItemToRemove.id)
  
// );
export const totalPrice = createSelector(
  [selectCartItems],
   (cartItems) => 
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity*cartItem.price,
      0
    )
  
);
