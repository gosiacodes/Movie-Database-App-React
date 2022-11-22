import { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RenderMovie from "../../components/renderData/RenderMovie";

const Movie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });

  return (
    <Fragment>
      <main>
        {username !== "" && (
          <div className="username-div">
            <h3>{username}</h3>
          </div>
        )}
        {location.state && (
          <RenderMovie movie={location.state.movie}></RenderMovie>
        )}
      </main>
    </Fragment>
  );
};

export default Movie;
