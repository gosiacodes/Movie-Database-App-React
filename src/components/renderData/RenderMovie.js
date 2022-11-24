import NavBtnGoHome from "../UI/NavBtnGoHome";

const RenderMovie = (props) => {
  // Returning movie and "back to home page" button component
  return (
    <div className="movie-container">
      <h3 className="movie-title">{props.movie.title}</h3>
      <p>{props.movie.prodYear}</p>
      <img className="movie-img" src={props.movie.img} alt="movie template" />
      <p>{props.movie.description}</p>
      <NavBtnGoHome></NavBtnGoHome>
    </div>
  );
};

export default RenderMovie;
