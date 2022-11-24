import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const NavButtonReadMore = (props) => {
  // Setting variables and navigate
  const navigate = useNavigate();
  const url = `/movies/${props.movie.title}`;

  // Navigating to page with title in url and sending props with movie
  const readMore = () => {
    navigate(url, {
      state: {
        movie: props.movie,
      },
    });
  };

  // Returning "read more" button component
  return (
    <Fragment>
      <div className="read-more-btn-div">
        <button
          className="read-more-btn"
          type="button"
          onClick={() => readMore()}
        >
          Read more
        </button>
      </div>
    </Fragment>
  );
};

export default NavButtonReadMore;
