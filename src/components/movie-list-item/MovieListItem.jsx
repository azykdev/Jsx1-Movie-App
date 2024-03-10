import "./MovieListItem.css";
import { Component } from "react";

class MovieListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      rating,
      cookie,
      star,
      onDelete,
      toggleLikeAndCookieHandler,
    } = this.props;

    return (
      <div
        className={`movie-list-item d-flex justify-content-between align-items-center ${
          cookie && "cookie"
        } ${star && "star"}`}
      >
        <h6 className="m-0">{title}</h6>

        <div>
          <span id="rating" className="me-5 py-1 px-2 rounded text-dark">
            {rating}
          </span>
          <span
            onClick={toggleLikeAndCookieHandler}
            id="cookie"
            className="mdi mdi-cookie mx-1"
            data-toggle="cookie"
          ></span>
          <span
            onClick={onDelete}
            id="delete"
            className="mdi mdi-delete mx-1"
          ></span>
          <span
            onClick={toggleLikeAndCookieHandler}
            id="star"
            className="mdi mdi-star mx-1"
            data-toggle="star"
          ></span>
        </div>
      </div>
    );
  }
}

export default MovieListItem;
