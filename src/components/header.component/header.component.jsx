import React from "react";
import "./header.cstyle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import { auth } from "../firbase/firebase.utility";
import {createStructuredSelector} from 'reselect'
import {currentUserSelector} from '../../redux/user/user.selector.js'
import CartIcon from "../cart-icon/cart-icon";
import {hiddenSelector} from '../../redux/cart/cart.selector'
import { connect } from "react-redux";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentuser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentuser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signIn">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps =  createStructuredSelector ({
  currentuser:currentUserSelector,
  hidden:hiddenSelector
});
export default connect(mapStateToProps)(Header);
