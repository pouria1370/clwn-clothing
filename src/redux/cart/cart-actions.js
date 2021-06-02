import cartActionTypes from './cart-types'

export const toggleCartHidden=()=>({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem=Item=>({
    type:cartActionTypes.ADD_ITEM,
    payload:Item
})
export const removeItem=Item=>({
    type:cartActionTypes.REMOVE_ITEM,
    payload:Item
})
export const removeItemFromCart=Item=>({
    type:cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload:Item
})

export const clearCart=()=>({
type:cartActionTypes.CLEAR_CART
})