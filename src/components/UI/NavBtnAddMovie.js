import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const NavButtonAddMovie = (props) => {
  const navigate = useNavigate();

  const addNewMovie = () => {
    navigate("/movies/addMovie");
  };

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
