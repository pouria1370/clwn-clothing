import React, { Component } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CostumButton from "../custom-Button/button-component";
import { auth, signInWithGoogle } from "../firbase/firebase.utility";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        password: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>i have already an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            label="email"
            handleChange={this.changeHandler}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            label="password"
            handleChange={this.changeHandler}
          />
          <div className="buttons">
            <CostumButton type="submit">Sign in</CostumButton>
            <CostumButton isGoogleSigned onClick={signInWithGoogle}>
              Sign in With Google
            </CostumButton>
          </div>
        </form>
      </div>
    );
  }
}
