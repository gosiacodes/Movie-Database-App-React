import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RenderMovies from "../../components/renderData/RenderMovies";
import NavBtnAddMovie from "../../components/UI/NavBtnAddMovie";

const Movies = () => {
  const navigate = useNavigate();
  const [moviesList, setMoviesList] = useState(
    localStorage.getItem("moviesList")
      ? JSON.parse(localStorage.getItem("moviesList"))
      : []
  );
  const username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  useEffect(() => {}, [moviesList, navigate]);

  return (
    <Fragment>
      <main>
        {username !== "" && (
          <div className="username-div">
            <h3 className="username">{username}</h3>
          </div>
        )}
        <RenderMovies moviesList={moviesList}></RenderMovies>
        <NavBtnAddMovie
          moviesList={moviesList}
          setMoviesList={setMoviesList}
        ></NavBtnAddMovie>
      </main>
    </Fragment>
  );
};

export default Movies;
