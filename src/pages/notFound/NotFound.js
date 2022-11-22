import { Fragment } from "react";
import NavBtnGoHome from "../../components/UI/NavBtnGoHome";

const NotFound = () => {
  const username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  return (
    <Fragment>
      <main>
        {username !== "" && (
          <div className="username-div">
            <h3>{username}</h3>
          </div>
        )}
        <div className="not-found-container">
          <h1 className="not-found-info">PAGE NOT FOUND</h1>
          <img
            className="not-found-img"
            src="/images/page-not-found_512.png"
            alt="page not found"
          ></img>
          <NavBtnGoHome></NavBtnGoHome>
        </div>
      </main>
    </Fragment>
  );
};

export default NotFound;
