import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { quantitySelector } from "../../redux/cart/cart.selector";
import {createStructuredSelector} from 'reselect'
import { toggleCartHidden } from "../../redux/cart/cart-actions.js";
const Carticon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({ itemCount: quantitySelector });
export default connect(mapStateToProps, mapDispatchToProps)(Carticon);
