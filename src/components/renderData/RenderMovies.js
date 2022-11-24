import { useState, useEffect } from "react";
import NavButtonReadMore from "../UI/NavBtnReadMore";

const RenderMoviesData = () => {
  // Setting states and variables
  const [moviesList, setMovies] = useState(
    localStorage.getItem("moviesList")
      ? JSON.parse(localStorage.getItem("moviesList"))
      : []
  );
  const username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  // Deleting movie from list (only by user who added it before to list)
  const removeMovie = (index) => {
    const tempMovies = [...moviesList];
    tempMovies.splice(index, 1);
    localStorage.setItem("moviesList", JSON.stringify(tempMovies));
    setMovies(tempMovies);
  };

  useEffect(() => {}, [moviesList]);

  // Returning movies with "read more" button component with movie props
  // Returning "delete" button only when username is the same as movie id
  return moviesList.length > 0 ? (
    <div className="movies-container ">
      <ul>
        {moviesList.map((movie, index) => {
          return (
            <li key={index}>
              <div className="title-del-div">
                <h2 className="movies-title">{movie.title}</h2>
                {username === movie.id ? (
                  <button
                    className="delete-btn"
                    onClick={() => {
                      removeMovie(index);
                    }}
                  >
                    X
                  </button>
                ) : null}
              </div>
              <p>{movie.prodYear}</p>
              <img className="movie-img" src={process.env.PUBLIC_URL + movie.img} alt="movie template" />
              <NavButtonReadMore movie={movie}></NavButtonReadMore>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};

export default RenderMoviesData;
