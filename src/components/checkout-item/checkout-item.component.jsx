import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import { removeItemFromCart,removeItem,addItem } from "../../redux/cart/cart-actions";

const CheckOutItem = ({ cartItem, removeItem,addItem,reduceItem }) => {
  const { imageUrl, price, quantity, name } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container ">
        <img alt="i am image" src={imageUrl} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
      <div className="arrow" onClick={()=>reduceItem(cartItem)}>&#10094;</div>
       <span className="value">{quantity}</span>
       <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
       </div>
      <div className="price">{price}$</div>
      <div className="remove" onClick={() => removeItem(cartItem)}>
        &#9986;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  reduceItem:(item)=>dispatch(removeItem(item)),
  addItem:(item)=>dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
