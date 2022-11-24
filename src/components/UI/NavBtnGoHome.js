import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavButtonGoHome = () => {
  // Returning "back to home page" button component with navigation to home page
  return (
    <Fragment>
      <div className={"home-btn-div"}>
        <NavLink to="/">
          <picture>
            <source
              srcSet={process.env.PUBLIC_URL + "/images/chevron-double-left_48.png"}
              media="(max-width: 600px)"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/chevron-double-left_64.png"}
              alt="chevron left"
              title="Back to home page"
            />
          </picture>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default NavButtonGoHome;
