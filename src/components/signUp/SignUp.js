import React, { Fragment } from "react";

export default class SignUp extends React.Component {
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

  submitUser = (e) => {
    e.preventDefault();
    this.props.addNewUser(this.state.user);
    Array.from(document.querySelectorAll(".login-input")).forEach(
      (input) => (input.value = "")
    );
  };

  cleanInput = () => {
    if (this.username === "") {
      Array.from(document.querySelectorAll(".login-input")).forEach(
        (input) => (input.value = "")
      );
    }
  };

  render() {
    return (
      <Fragment>
        {this.cleanInput()}
        <form onSubmit={this.submitUser}>
          <h2>Don't have an account? Sign up!</h2>
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
            required
            onChange={this.handleChange}
          ></input>
          <input type="submit" className="login-btn" value="Sign up"></input>
        </form>
      </Fragment>
    );
  }
}
