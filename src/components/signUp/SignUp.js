import React, { Fragment } from "react";

// Class component according to the instructions
export default class SignUp extends React.Component {
  // Setting states and variables
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
  }
  username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  // Setting user when input values changes
  handleChange = (event) => {
    if (event.target.name === "email") {
      this.setState({
        user: { ...this.state.user, email: event.target.value },
      });
    }
    if (event.target.name === "password") {
      this.setState({
        user: { ...this.state.user, password: event.target.value },
      });
    }
  };

  // Submitting new user to list of movies via props-function and emptying inputs
  submitUser = (e) => {
    e.preventDefault();
    this.props.addNewUser(this.state.user);
    Array.from(document.querySelectorAll(".login-input")).forEach(
      (input) => (input.value = "")
    );
  };

  render() {
    // Returning input form for adding a new user
    return (
      <Fragment>
        <form className="login-form" onSubmit={this.submitUser}>
          <h2 className="login-title">Don't have an account? Sign up!</h2>
          <input
            type="email"
            name="email"
            className="login-input"
            placeholder="email"
            required
            onChange={this.handleChange}
          ></input>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="password"
            minLength="4"
            maxLength="20"
            required
            onChange={this.handleChange}
          ></input>
          <input type="submit" className="login-btn" value="Sign up"></input>
        </form>
      </Fragment>
    );
  }
}
