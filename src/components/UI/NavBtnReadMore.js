import { Fragment, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavButtonReadMore = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = `/movies/${props.movie.title}`;

  const readMore = () => {
    navigate(url, {
      state: {
        movie: props.movie,
      },
    });
  };

  useEffect(() => {}, [location.state, props]);

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
