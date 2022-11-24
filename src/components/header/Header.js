import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // Returning header with logo (with NavLink to home page), title and NavLink to login page.
  return (
    <Fragment>
      <header className="header">
        <NavLink to="/" className={"navlink"}>
          <img src={process.env.PUBLIC_URL + "/images/Grit-Academy-logo.png"} alt="Grit Academy Logo" />
        </NavLink>
        <h1 className="header-title">Movies Database CINEMA</h1>
        <div className="login-div">
          <NavLink to="/login" className={"navlink"} id={"nav-login"}>
            Profile
          </NavLink>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
