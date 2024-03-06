import "./MovieListItem.css";

const MovieListItem = (movie) => {
  return (
    <div
      className={`movie-list-item d-flex justify-content-between align-items-center ${movie.cookie && "cookie"} ${movie.star && "star"}`}
    >
      <h6 className="m-0">{movie.title}</h6>

      <div>
        <span id="rating" className="me-5 py-1 px-2 rounded text-dark">
          {movie.rating}
        </span>
        <span id="cookie" className="mdi mdi-cookie mx-1"></span>
        <span id="delete" className="mdi mdi-delete mx-1"></span>
        <span id="star" className="mdi mdi-star mx-1"></span>
      </div>
    </div>
  );
};

export default MovieListItem;
