import "./MovieList.css";
import MovieListItem from "../movie-list-item/MovieListItem";

const MovieList = () => {
  return (
    <div className="movie-list">
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
    </div>
  );
};

export default MovieList;
