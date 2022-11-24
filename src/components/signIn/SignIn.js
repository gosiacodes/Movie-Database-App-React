import { Fragment, useState, useEffect } from "react";

const SignIn = (props) => {
  // Setting state for user
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Setting user when input values changes
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  // Submitting user to login via props-function and emptying inputs
  const submitUser = (e) => {
    e.preventDefault();
    props.loginUser(user);
    Array.from(document.querySelectorAll(".login-input")).forEach(
      (input) => (input.value = "")
    );
  };

  useEffect(() => {}, [user]);

  // Returning input form for logging in
  return (
    <Fragment>
      <form className="login-form" onSubmit={submitUser}>
        <h2 className="login-title">Already have an account? Sign in!</h2>
        <input
          type="email"
          name="email"
          className="login-input"
          placeholder="email"
          required
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          className="login-input"
          placeholder="password"
          required
          onChange={handleChange}
        ></input>
        <input type="submit" className="login-btn" value="Sign in"></input>
      </form>
    </Fragment>
  );
};

export default SignIn;
