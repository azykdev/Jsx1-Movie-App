import "./MovieList.css";
import MovieListItem from "../movie-list-item/MovieListItem";

const MovieList = (data) => {
  return (
    <div className="movie-list">
      {data.data.map((movie) => (
        <MovieListItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
