import {addItemToCart} from './cart.utils'
import cartActionTypes from '../cart/cart-types'
const INITIAL_STATE = {
  hidden: true,
  cartItems:[]
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
        case cartActionTypes.ADD_ITEM:{
          return{
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)
          };
        }
  }
};
export default cartReducer;
