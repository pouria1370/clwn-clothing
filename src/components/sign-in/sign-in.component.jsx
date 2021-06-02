import React, { Component } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CostumButton from "../custom-Button/button-component";
import {googleSignInStart,emailSignInStart} from '../../redux/user/user-actions.js'
import {connect} from 'react-redux'

 class SignIn extends Component {
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
    const{emailSignInStart}=this.props;
    emailSignInStart(email,password);
    
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const {googleSignInStart}=this.props;
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
            <CostumButton type="button" isGoogleSigned onClick={googleSignInStart}>
              Sign in With Google
            </CostumButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps=dispatch=>({
  googleSignInStart:()=>dispatch(googleSignInStart()),
  emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)