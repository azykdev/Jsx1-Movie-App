import "./MovieList.css";
import MovieListItem from "../movie-list-item/MovieListItem";

const MovieList = ({ data, onDelete, toggleLikeAndCookieHandler }) => {
  return (
    <div  className="movie-list">
      {data.map((movie) => (
        <MovieListItem
          key={movie.id}
          {...movie}
          onDelete={() => onDelete(movie.id)}
          toggleLikeAndCookieHandler={(e) => toggleLikeAndCookieHandler(movie.id, e.currentTarget.getAttribute("data-toggle"))}
          
        />
      ))}
    </div>
  );
};

export default MovieList;
