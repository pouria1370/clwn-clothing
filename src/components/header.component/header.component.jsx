import React from "react";
//import "./header.cstyle.scss";
//import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import { auth } from "../firbase/firebase.utility";
import {createStructuredSelector} from 'reselect'
import {currentUserSelector} from '../../redux/user/user.selector.js'
import CartIcon from "../cart-icon/cart-icon";
import {hiddenSelector} from '../../redux/cart/cart.selector'
import { connect } from "react-redux";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {HeaderContainer,LogoContainer,
  OptionsContainer,LinkOption,DivOption} from './header.style.jsx'

const Header = ({ currentuser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <LinkOption to="/shop">
          SHOP
        </LinkOption>
        <LinkOption to="/shop">
          CONTACT
        </LinkOption>
        {currentuser ? (
          <DivOption onClick={() => auth.signOut()}>
            Sign out
          </DivOption>
        ) : (
          <LinkOption to="/signIn">
            Sign in
          </LinkOption>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps =  createStructuredSelector ({
  currentuser:currentUserSelector,
  hidden:hiddenSelector
});
export default connect(mapStateToProps)(Header);
