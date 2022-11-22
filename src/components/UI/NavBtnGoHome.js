import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavButtonGoHome= () => {

  return (
    <Fragment>
      <div className={"home-btn-div"}>
            <NavLink to="/">
              <img
                src="/images/chevron-double-left_48.png"
                alt="chevron left"
                title="Home page"
              />
            </NavLink>
          </div>
    </Fragment>
  );
};

export default NavButtonGoHome;