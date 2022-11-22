import { Fragment, useState, useEffect } from "react";

const SignIn = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    props.loginUser(user);
    Array.from(document.querySelectorAll(".login-input")).forEach(
      (input) => (input.value = "")
    );
  };

  useEffect(() => {}, [user]);

  return (
    <Fragment>
      <form onSubmit={submitUser}>
        <h2>Already have an account? Sign in!</h2>
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
