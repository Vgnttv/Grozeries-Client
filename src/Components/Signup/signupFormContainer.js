import React from "react";
import SignupForm from "./signupForm";
import { connect } from "react-redux";
import { signup } from "../../actions/users";

class SignupFormContainer extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    streetName: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    phoneNumber: "",
    email: "",
    password: ""
  };

  onSubmit = user => {
    user.preventDefault();
    this.props.signup(
      this.state.firstName,
      this.state.lastName,
      this.state.streetName,
      this.state.houseNumber,
      this.state.zipCode,
      this.state.city,
      this.state.phoneNumber,
      this.state.email,
      this.state.password
    );
  };

  onChange = user => {
    this.setState({
      [user.target.name]: user.target.value
    });
  };

  render() {
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  signup: state.signup
});

export default connect(
  mapStateToProps,
  { signup }
)(SignupFormContainer);