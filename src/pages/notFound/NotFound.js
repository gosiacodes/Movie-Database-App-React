import { Fragment } from "react";
import NavBtnGoHome from "../../components/UI/NavBtnGoHome";

const NotFound = () => {
  // Checking whether the user is logged in and saved in LocalStorage
  const username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  // Returning "page not found" info with picture and navigation button component
  // If user is logged in, showing username
  return (
    <Fragment>
      <main>
        {username !== "" && (
          <div className="username-div">
            <h3 className="username">{username}</h3>
          </div>
        )}
        <div className="not-found-container">
          <h1 className="not-found-info">PAGE NOT FOUND</h1>
          <picture>
            <source
              srcSet="/images/page-not-found_192.png"
              media="(max-width: 400px)"
            />
            <source
              srcSet="/images/page-not-found_256.png"
              media="(max-width: 600px)"
            />
            <img
              className="not-found-img"
              src="/images/page-not-found_512.png"
              alt="page not found"
            ></img>
          </picture>
          <NavBtnGoHome></NavBtnGoHome>
        </div>
      </main>
    </Fragment>
  );
};

export default NotFound;
