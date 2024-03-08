import "./MovieListItem.css";
import { Component } from "react";

class MovieListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cookie: false,
      star: false,
    };
  }

  toggleCookie = () => {
    this.setState(({ cookie }) => ({ cookie: !cookie }));
  }
  render() {
    const { title, rating } = this.props;
    const { cookie, star } = this.state;

    return (
      <div
        className={`movie-list-item d-flex justify-content-between align-items-center ${cookie && "cookie"} ${star && "star"}`}
      >
        <h6 className="m-0">{title}</h6>
  
        <div>
          <span id="rating" className="me-5 py-1 px-2 rounded text-dark">
            {rating}
          </span>
          <span onClick={this.toggleCookie} id="cookie" className="mdi mdi-cookie mx-1"></span>
          <span id="delete" className="mdi mdi-delete mx-1"></span>
          <span onClick={() => this.setState({ star: !star })} id="star" className="mdi mdi-star mx-1"></span>
        </div>
      </div>
    );
  }
}

// const MovieListItem = (movie) => {
//   return (
//     <div
//       className={`movie-list-item d-flex justify-content-between align-items-center ${movie.cookie && "cookie"} ${movie.star && "star"}`}
//     >
//       <h6 className="m-0">{movie.title}</h6>

//       <div>
//         <span id="rating" className="me-5 py-1 px-2 rounded text-dark">
//           {movie.rating}
//         </span>
//         <span id="cookie" className="mdi mdi-cookie mx-1"></span>
//         <span id="delete" className="mdi mdi-delete mx-1"></span>
//         <span id="star" className="mdi mdi-star mx-1"></span>
//       </div>
//     </div>
//   );
// };

export default MovieListItem;
