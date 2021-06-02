import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import SHOPPAGE from "./pages/shop/shop.component.jsx";
import Header from "./components/header.component/header.component.jsx";
import SignInAndSignupPage from "./pages/sign-in and sign-up page/sign-in and sign-up page.jsx";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { currentUserSelector } from "./redux/user/user.selector";
import CheckOut from "./pages/checkout/chekout.component";
import {checkUserSession} from './redux/user/user-actions'
class App extends React.Component {
  unsuscribeFromAuth = null;
  componentDidMount() {
    const{checkUserSession}=this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={SHOPPAGE} path="/shop" />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? (
                <Redirect exact to="/" />
              ) : (
                <SignInAndSignupPage />
              )
            }
          />
          <Route component={CheckOut} exact path="/checkout" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
});

const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
