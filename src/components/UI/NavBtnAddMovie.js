import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const NavButtonAddMovie = () => {
  // Setting navigate
  const navigate = useNavigate();

  // Navigating to "add movie" page
  const addNewMovie = () => {
    navigate("/movies/addMovie");
  };

  // Returning "add new movie" button component
  return (
    <Fragment>
      <button
        type="button"
        className="add-new-movie-btn"
        onClick={() => addNewMovie()}
      >
        Add new movie
      </button>
    </Fragment>
  );
};

export default NavButtonAddMovie;
