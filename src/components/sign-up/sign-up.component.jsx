import React from "react";
import FormInput from "../form-input/form-input.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-actions.js";
import CustomButton from "../custom-Button/button-component";
import {
  auth,
  createUserProfileDocument,
} from "../firbase/firebase.utility.js";

import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    const { signUpStart } = this.props;
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }
    signUpStart({ email, password, displayName });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up With Your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (emailAndPass) => dispatch(signUpStart(emailAndPass)),
});

export default connect(null, mapDispatchToProps)(SignUp);
