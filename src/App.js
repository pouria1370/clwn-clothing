import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import SHOPPAGE from "./pages/shop/shop.component.jsx";
import Header from "./components/header.component/header.component.jsx";
import SignInAndSignupPage from "./pages/sign-in and sign-up page/sign-in and sign-up page.jsx";
import {
  createUserProfileDocument,
  auth,
  
} from "../src/components/firbase/firebase.utility";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";

class App extends React.Component {
  unsuscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
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
          <Route component={SHOPPAGE} exact path="/shop" />
          <Route
            exact
            path="/signIn"
            render={() =>
              (this.props.currentUser) ? (
                <Redirect exact to="/" />
              ) : (
                <SignInAndSignupPage/>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
