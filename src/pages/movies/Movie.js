import { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RenderMovie from "../../components/renderData/RenderMovie";

const Movie = () => {
  // Setting variables, location and navigate
  const location = useLocation();
  const navigate = useNavigate();
  const username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  // If there is no movie with desired title, navigate to home page
  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });

  // Returning components and showing them in DOM,
  // sending state props to component if there is location.state
  // If user is logged in, showing username
  return (
    <Fragment>
      <main>
        {username !== "" && (
          <div className="username-div">
            <h3 className="username">{username}</h3>
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
