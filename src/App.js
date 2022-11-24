import { Fragment, useState } from "react";
import RenderMovies from "./components/renderData/RenderMovies";
import NavBtnAddMovie from "./components/UI/NavBtnAddMovie";

const App = () => {
  // Setting states and variables
  const [moviesList, setMoviesList] = useState(
    localStorage.getItem("moviesList")
      ? JSON.parse(localStorage.getItem("moviesList"))
      : []
  );
  const username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  // Returning components and showing them in DOM, sending props to components
  // If user is logged in, showing username
  return (
    <Fragment>
      <main>
        {username !== "" && (
          <div className="username-div">
            <h3 className="username">Welcome {username}</h3>
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

export default App;
