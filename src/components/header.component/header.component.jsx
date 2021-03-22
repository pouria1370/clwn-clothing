import React from "react";
import "./header.cstyle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import { auth } from "../firbase/firebase.utility";
const Header = ({ currentuser }) => {
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
      </div>
    </div>
  );
};
export default Header;
