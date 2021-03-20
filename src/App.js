import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import SHOPPAGE from "./pages/shop/shop.component.jsx";
import Header from "./components/header.component/header.component.jsx";
import SignInAndSignupPage from "./pages/sign-in and sign-up page/sign-in and sign-up page.jsx";
import { auth } from "../src/components/firbase/firebase.utility";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userAuthenticated: "",
    };
  }
  unsuscribeFromAuth=null;
  componentDidMount() {
    this.unsuscribeFromAuth=auth.onAuthStateChanged((user) => {
      this.setState({ userAuthenticated: user });
      console.log(user);
    });
  }
  componentWillUnmount(){
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
