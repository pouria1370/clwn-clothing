export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingcartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingcartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingcartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingcartItem) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }
};
export const reduceItemFromCart = (cartItems, cartItemToRemove) => {
    const existingcartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    if (existingcartItem.quantity===1) {
      
      return removeItemFromCart(cartItems,cartItemToRemove);
    }
   return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
  };