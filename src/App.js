import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import SHOPPAGE from "./pages/shop/shop.component.jsx";
import Header from "./components/header.component/header.component.jsx";
import SignInAndSignupPage from "./pages/sign-in and sign-up page/sign-in and sign-up page.jsx";
import {
  createUserProfileDocument,
  auth,
} from "../src/components/firbase/firebase.utility";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userAuthenticated: "",
    };
  }
  unsuscribeFromAuth = null;
  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            userAuthenticated: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } 
      else {
        this.setState({ userAuthenticated: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentuser={this.state.userAuthenticated} />
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={SHOPPAGE} exact path="/shop" />
          <Route component={SignInAndSignupPage} exact path="/signin" />
        </Switch>
      </div>
    );
  }
}

export default App;
